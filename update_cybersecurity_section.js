const fs = require('fs');
const path = require('path');
const {
  conceptCard,
  ensureSubject,
  escapeHtml,
  mcq,
  readJson,
  removeQuestionsForSubject,
  sortQuestions,
  writeJson,
} = require('./script-utils');

const ROOT = __dirname;
const DB_PATH = path.join(ROOT, 'db.json');
const SOURCE_DIR = path.join(ROOT, 'markdown-output-cybersecurity');
const SECTION_KEY = 'sicurezza_sistemi_informatici';
const SECTION_LABEL = 'Sicurezza dei sistemi informatici';

const SOURCE_REPLACEMENTS = [
  ['Ã‚Â«', 'Â«'],
  ['Ã‚Â»', 'Â»'],
  ['Ãƒâ‚¬', 'Ã€'],
  ['ÃƒË†', 'Ãˆ'],
  ['Ãƒâ€°', 'Ã‰'],
  ['ÃƒÅ’', 'ÃŒ'],
  ['Ãƒâ€™', 'Ã’'],
  ['Ãƒâ„¢', 'Ã™'],
  ['ÃƒÂ ', 'Ã '],
  ['ÃƒÂ¨', 'Ã¨'],
  ['ÃƒÂ©', 'Ã©'],
  ['ÃƒÂ¬', 'Ã¬'],
  ['ÃƒÂ²', 'Ã²'],
  ['ÃƒÂ¹', 'Ã¹'],
  ['ÃƒÂ§', 'Ã§'],
  ['ÃƒÂ±', 'Ã±'],
  ['ÃƒÂ¼', 'Ã¼'],
  ['ÃƒÂ¶', 'Ã¶'],
  ['ÃƒÂ¤', 'Ã¤'],
  ['ÃƒÂ¢', 'Ã¢'],
  ['Ã¢â‚¬â„¢', "'"],
  ['Ã¢â‚¬Ëœ', "'"],
  ['Ã¢â‚¬Å“', '"'],
  ['Ã¢â‚¬Â', '"'],
  ['Ã¢â‚¬â€œ', '-'],
  ['Ã¢â‚¬â€', '-'],
  ['Ã¢â‚¬Â¢', 'â€¢'],
  ['Ã¢â‚¬Â¦', 'â€¦'],
  ['Ã¯Â¬Â', 'fi'],
  ['Ã¯Â¬â€š', 'fl'],
];

const EXTRA_REPLACEMENTS = [
  ['Ã ', 'à'],
  ['Ã¨', 'è'],
  ['Ã©', 'é'],
  ['Ã¬', 'ì'],
  ['Ã²', 'ò'],
  ['Ã¹', 'ù'],
  ['Ã€', 'À'],
  ['Ãˆ', 'È'],
  ['Ã‰', 'É'],
  ['ÃŒ', 'Ì'],
  ['Ã’', 'Ò'],
  ['Ã™', 'Ù'],
  ['Â«', '«'],
  ['Â»', '»'],
];

function replaceLiteral(text, from, to) {
  return text.split(from).join(to);
}

function scoreMojibake(text) {
  const markerCount = (text.match(/[ÃÂâ�]/g) || []).length;
  return markerCount + (text.includes('ï¿½') ? 5 : 0);
}

function repairText(text) {
  const base = String(text || '').replace(/^\uFEFF/, '');
  const candidates = [base];

  try {
    candidates.push(Buffer.from(base, 'latin1').toString('utf8'));
  } catch {
    // Ignore encoding edge cases and fall back to the original text.
  }

  try {
    const roundTrip = Buffer.from(base, 'latin1').toString('utf8');
    candidates.push(Buffer.from(roundTrip, 'latin1').toString('utf8'));
  } catch {
    // Ignore encoding edge cases and fall back to the original text.
  }

  let best = candidates[0];
  for (const candidate of candidates) {
    if (scoreMojibake(candidate) < scoreMojibake(best)) {
      best = candidate;
    }
  }

  for (const [source, target] of [...SOURCE_REPLACEMENTS, ...EXTRA_REPLACEMENTS]) {
    best = replaceLiteral(best, source, target);
  }

  return best;
}

function cleanSourceText(text) {
  return repairText(text);
}

const AUTHOR_PREFIXES = ['Ing.', 'Prof.', 'Dott.', 'Arch.'];

function normalizeInlineText(text) {
  return String(text || '').replace(/\s+/g, ' ').trim();
}

function stripSourceHeader(lines) {
  let start = 0;

  while (start < lines.length && !lines[start].trim()) start += 1;

  if (start < lines.length && /^#\s+/.test(lines[start].trim())) {
    start += 1;
  }

  while (start < lines.length && !lines[start].trim()) start += 1;

  const maybeAuthor = lines[start] ? lines[start].trim() : '';
  const hasAuthorPrefix = AUTHOR_PREFIXES.some((prefix) => maybeAuthor.startsWith(prefix));
  const looksLikeName = /^[A-Z][A-Za-z'.-]+(?:\s+[A-Z][A-Za-z'.-]+){1,4}$/.test(maybeAuthor);

  if (hasAuthorPrefix || looksLikeName) {
    start += 1;
  }

  while (start < lines.length && !lines[start].trim()) start += 1;

  return lines.slice(start);
}

function markdownToHtml(text) {
  const lines = stripSourceHeader(cleanSourceText(text).replace(/\r/g, '').split('\n'));
  const htmlParts = [];
  let paragraph = [];
  let listItems = [];
  let listType = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    htmlParts.push(`<p>${escapeHtml(normalizeInlineText(paragraph.join(' ')))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    htmlParts.push(
      `<${listType}>${listItems.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</${listType}>`,
    );
    listItems = [];
    listType = null;
  };

  for (const rawLine of lines) {
    const line = normalizeInlineText(rawLine);
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (/^---+$/.test(line)) {
      flushParagraph();
      flushList();
      htmlParts.push('<hr>');
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      htmlParts.push(`<h4>${escapeHtml(normalizeInlineText(heading[2]))}</h4>`);
      continue;
    }

    if (/^(?:[-*•])\s+/.test(line)) {
      flushParagraph();
      if (listType && listType !== 'ul') flushList();
      listType = 'ul';
      listItems.push(normalizeInlineText(line.replace(/^(?:[-*•])\s+/, '')));
      continue;
    }

    if (/^\d+[.)]\s+/.test(line)) {
      flushParagraph();
      if (listType && listType !== 'ol') flushList();
      listType = 'ol';
      listItems.push(normalizeInlineText(line.replace(/^\d+[.)]\s+/, '')));
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return htmlParts.join('');
}

function markdownCard(title, text) {
  return (
    '<div class="doc-card">' +
    `<h3>${escapeHtml(title)}</h3>` +
    `${markdownToHtml(text)}` +
    '</div>'
  );
}

function buildSecurityTheory() {
  const cards = [
    conceptCard(
      '1. Safety, security e Cibernetica',
      'La sicurezza informatica protegge sistemi e dati da eventi intenzionali, mentre la safety riguarda gli incidenti accidentali.',
      [
        'Cybersecurity = protezione di dati, sistemi, persone e processi.',
        'La cibernetica studia il controllo e la comunicazione nei sistemi naturali e artificiali.',
        'Nel linguaggio operativo, safety e security hanno scopi complementari.',
      ],
      ['Safety vs Security', true],
      ['Cibernetica', false],
    ),
    conceptCard(
      '2. Triade CIA',
      'La triade CIA è il modello base della sicurezza informatica.',
      [
        'Confidenzialità: accesso solo per utenti autorizzati.',
        'Integrità: i dati non devono essere alterati in modo improprio.',
        'Disponibilità: sistemi e informazioni devono essere accessibili quando servono.',
      ],
      ['CIA', true],
      ['Confidenzialità', false],
      ['Integrità', false],
      ['Disponibilità', false],
    ),
    conceptCard(
      '3. Asset, minacce e rischio',
      'La sicurezza parte dall’analisi degli asset e delle minacce che li possono colpire.',
      [
        'Asset: persone, dispositivi, identità, software, dati e reti.',
        'Minaccia: evento o azione che può danneggiare un asset.',
        'Vulnerabilità: debolezza sfruttabile da una minaccia.',
        'Rischio: combinazione di impatto e probabilità.',
      ],
      ['Risk', true],
      ['Asset', false],
    ),
    conceptCard(
      '4. Social engineering e phishing',
      'Molti attacchi sfruttano le persone prima ancora delle tecnologie.',
      [
        'Social engineering: manipolazione psicologica dell’utente.',
        'Phishing: messaggi fraudolenti per rubare credenziali o dati.',
        'Smishing: phishing via SMS.',
        'Vishing: phishing via telefonata.',
      ],
      ['Phishing', true],
      ['MFA', false],
    ),
    conceptCard(
      '5. Malware, ransomware e difese',
      'Il malware mira a compromettere confidenzialità, integrità e disponibilità.',
      [
        'Trojan, spyware, keylogger e backdoor sono forme comuni di malware.',
        'Ransomware cripta i dati e li rende inaccessibili fino al pagamento.',
        'Backup, monitoraggio, risposta agli incidenti e recovery riducono l’impatto.',
        'Antivirus, EDR e aggiornamenti regolari rafforzano la difesa.',
      ],
      ['Malware', true],
      ['Backup', false],
      ['Recovery', false],
    ),
    conceptCard(
      '6. QR code, link e comportamento sicuro',
      'Anche un QR code o un link accorciato possono nascondere un attacco.',
      [
        'I QR code possono aprire siti o app malevoli.',
        'URL shortener e deep linking rendono più difficile vedere la destinazione reale.',
        'Verificare il mittente, il dominio e il contesto è essenziale.',
        'Non inserire credenziali o OTP dopo aver aperto un link sospetto.',
      ],
      ['QR', true],
      ['Link', false],
      ['Attenzione', false],
    ),
  ];

  return cards.join('');
}

function buildSecurityDocumentation() {
  const fileMap = [
    ['Lezione 1 - Fondamenti', path.join(SOURCE_DIR, 'Fondamenti di Cybersecurity Lezione 1.md')],
    ['Lezione 2 - Minacce e difese', path.join(SOURCE_DIR, 'Fondamenti di Cybersecurity Lezione 2.md')],
    ['Lezione 3 - Attacchi social e QR code', path.join(SOURCE_DIR, 'Fondamenti di Cybersecurity Lezione 3.md')],
    ['Safety e security', path.join(SOURCE_DIR, 'Safety e security (2).md')],
  ];

  return fileMap
    .map(([title, filePath]) => {
      const source = fs.readFileSync(filePath, 'utf8');
      return markdownCard(title, source);
    })
    .join('');
}

function buildSecurityQuiz() {
  const subject = SECTION_KEY;
  return [
    mcq(
      subject,
      'base',
      'Quale affermazione descrive meglio la safety?',
      [
        'Protegge da danni accidentali o non intenzionali.',
        'Protegge solo da attacchi phishing.',
        'Serve unicamente per i database.',
        'Coincide sempre con il ransomware.',
      ],
      0,
      'La safety riguarda eventi accidentali, non azioni dolose.',
    ),
    mcq(
      subject,
      'base',
      'Quale affermazione descrive meglio la security?',
      [
        'Previene danni accidentali.',
        'Protegge da eventi intenzionali o atti illeciti.',
        'Riguarda solo la salute fisica.',
        'Si applica solo alla grafica web.',
      ],
      1,
      'La security tutela da minacce intenzionali come furti e attacchi informatici.',
    ),
    mcq(
      subject,
      'base',
      'Quali sono gli obiettivi della triade CIA?',
      [
        'Costo, velocità e semplicità.',
        'Confidenzialità, Integrità e Disponibilità.',
        'Controllo, Ispezione e Automazione.',
        'Crittografia, Internet e Accesso.',
      ],
      1,
      'La triade CIA è il modello base della sicurezza informatica.',
    ),
    mcq(
      subject,
      'medio',
      'Cosa garantisce la confidenzialità?',
      [
        'Che i dati siano sempre modificabili da chiunque.',
        'Che le informazioni siano accessibili solo a utenti autorizzati.',
        'Che il sistema sia sempre offline.',
        'Che nessuno usi mai password.',
      ],
      1,
      'La confidenzialità limita l’accesso ai soggetti autorizzati.',
    ),
    mcq(
      subject,
      'medio',
      'Cosa garantisce l’integrità?',
      [
        'Che i dati non vengano alterati, distrutti o manomessi impropriamente.',
        'Che il sito sia sempre bello da vedere.',
        'Che i dati siano sempre pubblici.',
        'Che la rete sia più lenta.',
      ],
      0,
      'L’integrità tutela accuratezza e affidabilità delle informazioni.',
    ),
    mcq(
      subject,
      'medio',
      'Cosa garantisce la disponibilità?',
      [
        'Che le informazioni siano accessibili quando servono agli utenti autorizzati.',
        'Che il sistema non salvi mai nulla.',
        'Che i dati vengano sempre cancellati.',
        'Che tutti i file siano criptati senza motivo.',
      ],
      0,
      'La disponibilità riguarda l’accesso ai sistemi nel momento necessario.',
    ),
    mcq(
      subject,
      'base',
      'Cos’è il social engineering?',
      [
        'Una manipolazione psicologica per indurre le persone a compiere azioni dannose.',
        'Un protocollo di rete.',
        'Una tecnica di backup incrementale.',
        'Un sistema di autenticazione biometrica.',
      ],
      0,
      'Il social engineering sfrutta l’errore umano e la fiducia.',
    ),
    mcq(
      subject,
      'base',
      'Cos’è il phishing?',
      [
        'Un attacco che usa messaggi fraudolenti per rubare dati o credenziali.',
        'Una tecnica per aumentare la velocità della RAM.',
        'Un tipo di rete locale.',
        'Una funzione del firewall.',
      ],
      0,
      'Il phishing usa email, SMS o siti falsi per ingannare la vittima.',
    ),
    mcq(
      subject,
      'base',
      'Cos’è lo smishing?',
      ['Phishing via SMS.', 'Phishing via posta cartacea.', 'Un backup automatico.', 'Un antivirus per smartphone.'],
      0,
      'Lo smishing sfrutta messaggi SMS fraudolenti.',
    ),
    mcq(
      subject,
      'base',
      'Cos’è il vishing?',
      ['Phishing tramite chiamate telefoniche.', 'Un virus informatico.', 'Un tipo di firewall.', 'Una VPN per lavorare da remoto.'],
      0,
      'Il vishing usa il telefono per ottenere dati sensibili.',
    ),
    mcq(
      subject,
      'medio',
      'Perché i QR code possono essere rischiosi?',
      [
        'Perché non contengono mai informazioni.',
        'Perché possono nascondere link o azioni malevole.',
        'Perché funzionano solo su carta.',
        'Perché non possono aprire siti web.',
      ],
      1,
      'Un QR code può portare l’utente su una destinazione dannosa o inattesa.',
    ),
    mcq(
      subject,
      'medio',
      'Qual è un buon comportamento davanti a un URL shortener o a un link ricevuto via messaggio?',
      [
        'Aprirlo subito senza controlli.',
        'Verificare il contesto e la destinazione prima di inserire dati.',
        'Inviare subito la password.',
        'Disattivare l’antivirus per velocizzare.',
      ],
      1,
      'La verifica preventiva riduce il rischio di phishing o spoofing.',
    ),
    mcq(
      subject,
      'medio',
      'Quale tra questi è un esempio di malware?',
      ['Trojan', 'Firewall', 'Backup', 'Password manager'],
      0,
      'Trojan, spyware, keylogger e backdoor sono esempi di malware.',
    ),
    mcq(
      subject,
      'medio',
      'Cos’è un ransomware?',
      [
        'Un malware che cripta i dati rendendoli inaccessibili fino al pagamento.',
        'Un aggiornamento automatico di Windows.',
        'Un sistema di autenticazione.',
        'Una cartella compressa.',
      ],
      0,
      'Il ransomware blocca l’accesso ai dati e chiede un riscatto.',
    ),
    mcq(
      subject,
      'medio',
      'Perché i backup sono fondamentali nella sicurezza?',
      [
        'Perché rendono più lento il computer.',
        'Perché permettono il ripristino dopo incidenti o ransomware.',
        'Perché eliminano i privilegi di accesso.',
        'Perché sostituiscono il firewall.',
      ],
      1,
      'I backup sono la base del recovery e limitano i danni dopo un incidente.',
    ),
    mcq(
      subject,
      'base',
      'Quale strumento protegge il traffico di rete controllando le connessioni?',
      ['Firewall', 'Spreadsheet', 'Notepad', 'Speaker'],
      0,
      'Il firewall filtra e controlla il traffico in entrata e in uscita.',
    ),
    mcq(
      subject,
      'medio',
      'Cos’è un insider threat?',
      [
        'Una minaccia che arriva da un attore interno con accessi legittimi o privilegi.',
        'Un guasto elettrico casuale.',
        'Un archivio ZIP protetto.',
        'Una stampante di rete.',
      ],
      0,
      'La minaccia interna sfrutta accessi già concessi all’interno dell’organizzazione.',
    ),
    mcq(
      subject,
      'medio',
      'Quale combinazione rafforza davvero la difesa?',
      [
        'Password deboli e niente aggiornamenti.',
        '2FA, backup, aggiornamenti e formazione degli utenti.',
        'Solo spegnere il PC alla sera.',
        'Usare sempre la stessa password.',
      ],
      1,
      'La sicurezza efficace combina tecnologia, processi e comportamento umano.',
    ),
    mcq(
      subject,
      'avanzato',
      'Nel modello di rischio, qual è la relazione corretta?',
      ['Rischio = impatto + fortuna.', 'Rischio = funzione di impatto e probabilità.', 'Rischio = numero di password.', 'Rischio = dimensione del monitor.'],
      1,
      'Il rischio è valutato combinando gravità e probabilità di un evento.',
    ),
  ];
}

function main() {
  const data = readJson(DB_PATH);

  data.materie = ensureSubject(data.materie, SECTION_KEY, SECTION_LABEL);

  data.domande = removeQuestionsForSubject(data.domande, SECTION_KEY);
  data.domande.push(...buildSecurityQuiz());

  data.teoria = data.teoria || {};
  data.teoria[SECTION_KEY] = {
    desc: 'Sintesi dei concetti fondamentali di sicurezza dei sistemi informatici: safety, security, triade CIA, minacce, malware e difesa.',
    html: buildSecurityTheory(),
  };

  data.documentazione = data.documentazione || {};
  data.documentazione[SECTION_KEY] = {
    desc: 'Documentazione completa tratta dai quattro markdown di cybersecurity.',
    html: buildSecurityDocumentation(),
  };

  data.domande = sortQuestions(data.domande);

  writeJson(DB_PATH, data);
}

if (require.main === module) {
  main();
}

module.exports = { main, buildSecurityDocumentation, buildSecurityQuiz, buildSecurityTheory };
