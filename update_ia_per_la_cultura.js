const path = require('path');
const {
  conceptCard,
  docCard,
  ensureSubject,
  mcq,
  readJson,
  removeQuestionsForSubject,
  sortQuestions,
  writeJson,
} = require('./script-utils');

const ROOT = __dirname;
const DB_PATH = path.join(ROOT, 'db.json');
const SECTION_KEY = 'ia_per_la_cultura';
const SECTION_LABEL = 'IA per la cultura';

function buildTheoryHtml() {
  const cards = [
    conceptCard(
      '1. Origini e definizioni',
      "L'intelligenza artificiale nasce come campo di ricerca negli anni '50 e prende forma con il workshop di Dartmouth del 1956.",
      [
        'John McCarthy conia il termine «intelligenza artificiale».',
        "L'AI debole risolve compiti specifici; l'AI forte punta a capacità cognitive più generali.",
        'Tra i primi filoni ci sono la logica simbolica e i sistemi esperti.',
      ],
      ['Dartmouth 1956', true],
      ['AI debole / forte', false],
    ),
    conceptCard(
      '2. Machine learning e apprendimento',
      'Nel machine learning il modello apprende dai dati e migliora con l’esperienza.',
      [
        'Supervisionato: usa dati etichettati per imparare una risposta corretta.',
        'Non supervisionato: cerca strutture e gruppi senza etichette.',
        'Apprendimento per rinforzo: migliora tramite premi e penalità.',
        'Training set e test set servono per addestrare e verificare la generalizzazione.',
      ],
      ['Training / Test', true],
      ['Overfitting', false],
    ),
    conceptCard(
      '3. Chatbot, LLM e GenAI',
      'I chatbot moderni usano Large Language Models per generare testo, spiegazioni, sintesi e risposte contestuali.',
      [
        'Gli LLM sono una sottocategoria della GenAI.',
        'ChatGPT, Gemini, Claude e Copilot sono esempi molto diffusi.',
        "La qualità dell'output dipende da dati, contesto e istruzioni.",
      ],
      ['LLM', true],
      ['GenAI', false],
    ),
    conceptCard(
      '4. Prompt e produzione',
      "Un buon prompt guida il modello con contesto, obiettivo, tono e formato dell'output.",
      [
        'Il prompt deve essere chiaro, specifico e riusabile.',
        "L'output formatting aiuta a ottenere risposte ordinate e facili da usare.",
        'L’output distillation riduce il rumore e porta il contenuto alla forma utile.',
        'Iterare sul prompt migliora precisione e qualità della risposta.',
      ],
      ['Prompt design', true],
      ['Output', false],
    ),
    conceptCard(
      '5. Uso responsabile',
      "L'uso corretto dell'AI richiede attenzione a errori, bias, privacy e verifica delle fonti.",
      [
        'Le hallucinations sono risposte plausibili ma non supportate dai dati.',
        'I bias riflettono squilibri o stereotipi presenti nei dati.',
        'Non inserire dati personali o sensibili senza motivo.',
        'Quando possibile confronta sempre le risposte con fonti affidabili.',
      ],
      ['Privacy', true],
      ['Verifica', false],
    ),
    conceptCard(
      '6. Strumenti e workflow',
      'Perplexity, NotebookLM, Gemini, Markdown e Teachable Machine sono strumenti utili in un flusso di lavoro didattico e documentale.',
      [
        'Perplexity aiuta nelle ricerche con fonti e riferimenti.',
        "NotebookLM è utile per lavorare su fonti caricate dall'utente.",
        'Markdown resta il formato ideale per note, guide e documentazione.',
        'Un workflow efficace: ricerca, analisi, sintesi, revisione, pubblicazione.',
      ],
      ['Workflow', true],
      ['Markdown', false],
    ),
  ];

  return cards.join('');
}

function buildDocumentationHtml() {
  const cards = [
    docCard("Modulo 1: Dalle origini all'AI debole e forte", "L'IA per la cultura parte da una definizione semplice: sistemi che elaborano dati e producono risposte, suggerimenti o classificazioni con tecniche automatiche.", [
      [
        'Origini',
        "Il workshop di Dartmouth del 1956 segna l'inizio formale dell'AI come disciplina. In quel contesto emergono i primi obiettivi di automazione del ragionamento.",
        [
          'John McCarthy propone il termine «intelligenza artificiale».',
          'Marvin Minsky, Claude Shannon e altri studiosi contribuiscono alla nascita della disciplina.',
        ],
      ],
      [
        'AI debole e AI forte',
        "L'AI debole risolve compiti specifici; l'AI forte richiederebbe capacità generali simili a quelle umane.",
        [
          'Gli assistenti vocali e i classificatori automatici sono esempi di AI debole.',
          "L'AI forte resta un obiettivo teorico e di ricerca.",
        ],
      ],
    ]),
    docCard('Modulo 2: Apprendimento, dataset e valutazione', 'Il machine learning si basa sull’uso dei dati per addestrare e misurare un modello.', [
      [
        'Dataset',
        'Il training set serve per addestrare il modello; il test set serve per verificare se il modello sa generalizzare su dati mai visti.',
        [
          'Un buon dataset è rappresentativo del problema reale.',
          'La separazione tra training e test riduce il rischio di autoinganno.',
        ],
      ],
      [
        'Errori tipici',
        'Underfitting e overfitting indicano che il modello non sta trovando il giusto equilibrio di complessità.',
        [
          'Underfitting: il modello è troppo semplice.',
          'Overfitting: il modello memorizza troppo i dati di training e peggiora sul test set.',
        ],
      ],
    ]),
    docCard('Modulo 3: Chatbot, GenAI e LLM', 'I chatbot moderni non sono solo interfacce di chat: sono sistemi che combinano modello linguistico, istruzioni e strumenti esterni.', [
      [
        'GenAI',
        'La generazione di contenuti comprende testo, immagini, codice, audio e video.',
        [
          'ChatGPT, Gemini, Claude e Copilot sono esempi di chatbot basati su LLM.',
          'Gli LLM sono centrali per sintetizzare, riformulare e assistere l’utente.',
        ],
      ],
      [
        'Usi didattici',
        "In un contesto culturale gli LLM possono produrre schemi, mappe, riassunti, confronti e materiali di supporto.",
        [
          'Possono accelerare la prima fase di studio e organizzazione.',
          'Il contenuto va sempre verificato su fonti affidabili.',
        ],
      ],
    ]),
    docCard('Modulo 4: Prompt engineering e Markdown', "La qualità dell'output dipende dalla qualità dell'input: un prompt ben costruito rende il modello più utile e prevedibile.", [
      [
        'Prompt efficace',
        'Un buon prompt contiene obiettivo, contesto, ruolo, vincoli, formato e, quando serve, esempi.',
        [
          'Più il prompt è chiaro, più l’output è controllabile.',
          'Iterare sul prompt permette di raffinare la risposta.',
        ],
      ],
      [
        'Markdown',
        'Markdown è un formato semplice, testuale e portabile perfetto per appunti, guide e documentazione tecnica.',
        [
          'È leggibile anche nel file sorgente.',
          'Si converte facilmente in HTML, PDF e altri formati.',
        ],
      ],
    ]),
    docCard('Modulo 5: Rischi, sicurezza e workflow', "L'uso consapevole dell'AI richiede attenzione a errori, bias, privacy e sicurezza dei sistemi.", [
      [
        'Rischi',
        'Hallucinations, bias e prompt injection possono compromettere la qualità delle risposte o la sicurezza del sistema.',
        [
          'Le hallucinations inventano contenuti plausibili ma non verificati.',
          'I bias introducono squilibri nei risultati.',
          'La prompt injection può manipolare il comportamento dell’assistente.',
        ],
      ],
      [
        'Workflow consigliato',
        'Un flusso efficace passa da ricerca, analisi, sintesi, revisione e pubblicazione.',
        [
          'Perplexity aiuta a cercare e documentare le fonti.',
          "NotebookLM aiuta a lavorare su materiali caricati dall'utente.",
          'Il risultato va sempre riletto e rifinito dall’umano.',
        ],
      ],
    ]),
  ];

  return cards.join('');
}

function buildDomande() {
  const subject = SECTION_KEY;
  return [
    mcq(
      subject,
      'base',
      'Quale affermazione descrive meglio l’AI debole?',
      [
        'Risolve compiti specifici e ben delimitati.',
        'Possiede capacità cognitive generali simili a quelle umane.',
        'Funziona solo senza dati di addestramento.',
        'È sempre in grado di spiegare ogni decisione.',
      ],
      0,
      "L'AI debole è progettata per compiti specifici, non per una cognizione generale.",
    ),
    mcq(
      subject,
      'base',
      'A cosa serve il Test di Turing?',
      [
        'A misurare la velocità di un computer.',
        'A verificare se una macchina riesce a sembrare umana in una conversazione.',
        'A classificare immagini mediche.',
        'A confrontare due reti neurali.',
      ],
      1,
      'Il Test di Turing valuta se il comportamento conversazionale di una macchina appare umano.',
    ),
    mcq(
      subject,
      'medio',
      'Qual è la funzione del training set in un progetto di machine learning?',
      ['Misurare il risultato finale su dati mai visti.', 'Correggere manualmente ogni errore del modello.', 'Addestrare il modello su esempi noti.', 'Contenere solo i dati di validazione.'],
      2,
      'Il training set è il dataset usato per apprendere i parametri del modello.',
    ),
    mcq(
      subject,
      'medio',
      'Quale scenario indica overfitting?',
      ['Errore alto sia su training che su test.', 'Errore basso su training e alto su test.', 'Errore alto su training e basso su test.', 'Errore identico e nullo su ogni situazione.'],
      1,
      "L'overfitting compare quando il modello impara troppo bene il training set e generalizza male.",
    ),
    mcq(
      subject,
      'base',
      'Quando è più adatto usare l’apprendimento non supervisionato?',
      [
        'Quando il dataset ha già tutte le risposte corrette.',
        'Quando bisogna prevedere un valore numerico noto.',
        'Quando si vogliono scoprire gruppi o pattern senza etichette.',
        'Quando si vuole eliminare il test set.',
      ],
      2,
      'Il non supervisionato cerca strutture nei dati senza usare etichette.',
    ),
    mcq(
      subject,
      'medio',
      'Perché gli LLM sono considerati una componente della GenAI?',
      [
        'Perché sostituiscono tutti i database.',
        'Perché generano contenuti linguistici e supportano la produzione di nuovi testi.',
        'Perché lavorano solo offline.',
        'Perché non usano dati di addestramento.',
      ],
      1,
      'Gli LLM generano e rielaborano contenuti, quindi rientrano nella GenAI.',
    ),
    mcq(
      subject,
      'medio',
      'Quale elemento rende più utile un prompt ben progettato?',
      ['Lunghezza casuale e priva di contesto.', 'Contesto, obiettivo, vincoli e formato di output.', 'Più emoji possibili.', 'Solo la richiesta finale, senza dettagli.'],
      1,
      'Un buon prompt guida il modello con istruzioni chiare e verificabili.',
    ),
    mcq(
      subject,
      'base',
      'Cosa sono le hallucinations in un sistema AI?',
      ['Risposte inventate o non supportate dalle fonti.', 'Un difetto del monitor.', 'Un formato di file.', 'Una tecnica per aumentare la privacy.'],
      0,
      'Le hallucinations sono contenuti plausibili ma non verificati.',
    ),
    mcq(
      subject,
      'medio',
      'Qual è un comportamento corretto quando si usa l’AI?',
      ['Condividere sempre dati personali per avere risposte migliori.', 'Verificare le informazioni e proteggere i dati sensibili.', 'Accettare ogni risposta senza controlli.', 'Disattivare le fonti per velocizzare il lavoro.'],
      1,
      "L'uso responsabile richiede verifica delle risposte e attenzione alla privacy.",
    ),
    mcq(
      subject,
      'base',
      'Perché Markdown è utile nel lavoro con gli LLM?',
      ['Perché è un file grafico.', 'Perché è testo semplice, strutturato e facile da elaborare.', 'Perché obbliga a usare immagini.', 'Perché impedisce di fare modifiche.'],
      1,
      'Markdown è leggibile sia per l’umano sia per il modello.',
    ),
    mcq(
      subject,
      'medio',
      'Quale strumento è particolarmente utile per ricerche con fonti e riferimenti?',
      ['Perplexity', 'Paint', 'Blocco note', 'Calculator'],
      0,
      'Perplexity integra ricerca web e fonti in modo comodo per lo studio.',
    ),
    mcq(
      subject,
      'avanzato',
      'Qual è il flusso più sensato per produrre un elaborato affidabile con l’AI?',
      ['Inventare, pubblicare, correggere se qualcuno nota errori.', 'Ricerca, analisi, sintesi, revisione e pubblicazione.', 'Saltare la verifica per risparmiare tempo.', 'Usare solo un’unica fonte non verificata.'],
      1,
      'Un workflow robusto passa da ricerca e analisi a revisione finale.',
    ),
  ];
}

function buildRealQuiz() {
  const subject = SECTION_KEY;
  return [
    mcq(subject, 'base', 'Nel contesto del machine learning, quale combinazione descrive correttamente training set e test set?', [
      'Entrambi servono solo per addestrare il modello.',
      'Il training set serve per addestrare, il test set per valutare la generalizzazione.',
      'Il training set documenta i requisiti e il test set genera i pesi.',
      'Il test set contiene solo etichette e nessun dato.',
    ], 1, 'Il training set addestra il modello, il test set controlla se sa generalizzare.'),
    mcq(subject, 'base', 'Quale scenario indica chiaramente overfitting?', [
      'Errore alto sia su training che su test.',
      'Errore basso su training e alto su test.',
      'Errore alto su training e basso su test.',
      'Errore sempre nullo in ogni situazione.',
    ], 1, 'L’overfitting si riconosce da un ottimo training ma da prestazioni scarse sul test.'),
    mcq(subject, 'medio', 'In quale caso è più appropriato utilizzare l’apprendimento non supervisionato?', [
      'Prevedere il prezzo di vendita di un prodotto già etichettato.',
      'Classificare email spam usando esempi etichettati.',
      'Scoprire gruppi o pattern nei dati senza etichette.',
      'Misurare soltanto il punteggio finale di un esame.',
    ], 2, 'Il non supervisionato serve a trovare struttura in dati non etichettati.'),
    mcq(subject, 'medio', 'In che modo il deep learning si distingue dal machine learning più tradizionale?', [
      'Usa solo regole scritte a mano.',
      'Si basa su reti neurali profonde con più livelli di rappresentazione.',
      'Non richiede dati di addestramento.',
      'Funziona soltanto per i fogli di calcolo.',
    ], 1, 'Il deep learning usa reti neurali multilivello per apprendere rappresentazioni più ricche.'),
    mcq(subject, 'base', 'Perché gli LLM sono considerati una componente della GenAI?', [
      'Perché salvano automaticamente tutti i PDF.',
      'Perché generano contenuti linguistici e nuove risposte a partire dai dati.',
      'Perché funzionano solo senza internet.',
      'Perché sono sempre perfetti.',
    ], 1, 'Gli LLM producono contenuti nuovi e quindi rientrano nella GenAI.'),
    mcq(subject, 'medio', 'Nel contesto della formazione culturale, quale uso avanzato può essere fatto dell’AI generativa?', [
      'Sostituire qualsiasi studio con una risposta casuale.',
      'Creare sintesi, mappe concettuali e confronti tra fonti affidabili.',
      'Eliminare ogni riferimento bibliografico.',
      'Ignorare i documenti ufficiali.',
    ], 1, 'In ambito culturale l’AI è utile per organizzare e confrontare il materiale.'),
    mcq(subject, 'medio', 'Qual è il vantaggio principale di NotebookLM rispetto ad altri LLM?', [
      "Lavora sulle fonti caricate dall'utente e resta ancorato a quei materiali.",
      'Funziona solo senza documenti.',
      'Serve solo per programmare.',
      'Non permette mai di citare nulla.',
    ], 0, 'NotebookLM è forte quando bisogna lavorare su un corpus di fonti specifiche.'),
    mcq(subject, 'medio', 'Quali vantaggi offre Perplexity nelle ricerche?', [
      'Evita di mostrare le fonti.',
      'Unisce ricerca web, sintesi e riferimenti alle fonti.',
      'Serve soltanto per scrivere codice.',
      'Funziona solo offline.',
    ], 1, 'Perplexity è utile perché parte dalle fonti e rende più semplice verificare le risposte.'),
    mcq(subject, 'base', 'Qual è lo scopo principale dei Gem in Gemini?', [
      'Cambiare la tastiera del computer.',
      'Creare assistenti o workflow personalizzati per compiti specifici.',
      'Cancellare la cronologia del browser.',
      'Convertire i file in PDF.',
    ], 1, 'I Gem servono a costruire assistenti o procedure riusabili in Gemini.'),
    mcq(subject, 'avanzato', 'In uno scenario di prompt injection indiretta su un sistema RAG, quale rischio è più realistico?', [
      'Il monitor si spegne.',
      'Una fonte esterna contiene istruzioni malevole che alterano il comportamento del modello.',
      'Il modello smette di usare il linguaggio naturale.',
      'Le immagini diventano file audio.',
    ], 1, 'La prompt injection indiretta sfrutta contenuti esterni per influenzare il sistema.'),
    mcq(subject, 'medio', 'Qual è la differenza chiave tra prompt injection e jailbreak?', [
      'La prompt injection manipola il contesto o i dati esterni; il jailbreak cerca di aggirare le regole del modello.',
      'Sono esattamente la stessa cosa.',
      'Il jailbreak riguarda solo i colori dell’interfaccia.',
      'La prompt injection serve solo per addestrare il modello.',
    ], 0, 'Injection e jailbreak sono attacchi diversi anche se puntano entrambi a forzare il comportamento del sistema.'),
    mcq(subject, 'medio', 'Quale tecnica di jailbreak sfrutta la finzione narrativa per aggirare i filtri di sicurezza?', [
      'Roleplay o story-based jailbreak.',
      'Compressione ZIP.',
      'OCR.',
      'Data labeling.',
    ], 0, 'La narrazione o il gioco di ruolo viene usato per far abbassare le difese del modello.'),
    mcq(subject, 'avanzato', 'In un attacco di data exfiltration tramite prompt injection, qual è il pericolo principale?', [
      'Il modello genera un riassunto più breve.',
      'Informazioni sensibili, istruzioni interne o segreti possono essere rivelati.',
      'Il file Markdown si converte in HTML.',
      'La qualità del microfono diminuisce.',
    ], 1, 'Il rischio è la fuga di dati o di istruzioni riservate.'),
    mcq(subject, 'avanzato', 'Nella tassonomia degli attacchi agli LLM, quale scenario descrive meglio un attacco al chatbot?', [
      'System prompt override e role hijacking.',
      'Aggiornamento automatico del dizionario.',
      'Riduzione del rumore nel dataset.',
      'Compressione del testo in PDF.',
    ], 0, 'Il sistema viene forzato a ignorare o sostituire le regole originarie.'),
    mcq(subject, 'medio', 'Nel modello di defense in depth, quale combinazione è più corretta?', [
      'Un solo filtro all’ingresso.',
      'Sanitizzazione, controlli di accesso, sandboxing e supervisione umana.',
      'Nessun logging per non lasciare tracce.',
      'Aumentare soltanto la lunghezza del prompt.',
    ], 1, 'La difesa a più livelli riduce il rischio perché non dipende da un unico controllo.'),
    mcq(subject, 'base', 'Cos’è Gandalf prodotto da Lakera AI?', [
      'Un editor di immagini.',
      'Un gioco/simulatore per allenarsi a difendersi dagli attacchi ai modelli.',
      'Un motore di ricerca accademico.',
      'Un formato di file per presentazioni.',
    ], 1, 'Gandalf è un esercizio pratico di sicurezza per LLM.'),
    mcq(subject, 'base', 'Che cosa insegna la simulazione Gandalf riguardo alla difesa?', [
      'A fidarsi sempre del primo input.',
      'A pensare come un attaccante e costruire difese a strati.',
      'A non usare mai un modello linguistico.',
      'A cancellare tutte le fonti.',
    ], 1, 'La simulazione mostra come ragionare in ottica offensiva e difensiva insieme.'),
    mcq(subject, 'base', 'Cos’è un file Markdown?', [
      'Un file immagine.',
      'Un file di testo con markup leggero e leggibile.',
      'Un file audio compresso.',
      'Un file eseguibile.',
    ], 1, 'Markdown è testo semplice con una sintassi molto leggera.'),
    mcq(subject, 'base', 'Quale tra questi software è un ottimo strumento per gestire i Markdown?', [
      'Obsidian',
      'Paint',
      'Calculator',
      'Movie Maker',
    ], 0, 'Obsidian è uno degli strumenti più usati per note e documentazione in Markdown.'),
    mcq(subject, 'base', 'Perché il Markdown è il formato preferito dagli LLM?', [
      'Perché è binario.',
      'Perché è testo semplice, strutturato e facilmente analizzabile.',
      'Perché include sempre immagini.',
      'Perché impedisce gli errori.',
    ], 1, 'La semplicità del formato aiuta il modello a leggere e ricostruire il contenuto.'),
    mcq(subject, 'medio', 'Che cosa distingue un prompt vago da un prompt ben progettato?', [
      'Il prompt ben progettato include contesto, obiettivo e formato dell’output.',
      'Il prompt vago è più lungo.',
      'Il prompt ben progettato usa sempre maiuscole.',
      'Non c’è alcuna differenza.',
    ], 0, 'Un buon prompt guida il modello in modo preciso e verificabile.'),
    mcq(subject, 'medio', 'Cosa si intende per output formatting e output distillation?', [
      'Tradurre il testo in un’altra lingua soltanto.',
      'Definire struttura e sintesi dell’output per renderlo più utile.',
      'Aggiungere più errori per testare il sistema.',
      'Nascondere le fonti di partenza.',
    ], 1, 'Formattare e distillare significa rendere l’output organizzato e più usabile.'),
    mcq(subject, 'base', 'Nell’utilizzo dell’AI, quale comportamento è più consono?', [
      'Inserire dati personali senza pensarci.',
      'Verificare le risposte e usare l’AI con responsabilità.',
      'Condividere segreti aziendali per testare il modello.',
      'Accettare tutto senza controlli.',
    ], 1, 'La verifica delle informazioni e la protezione dei dati sono fondamentali.'),
    mcq(subject, 'base', 'Vuoi creare un titolo di livello 2 (H2) in Markdown puro con il testo "Sintassi". Quale sintassi usi?', [
      '# Sintassi',
      '## Sintassi',
      '### Sintassi',
      '- Sintassi',
    ], 1, 'In Markdown il livello 2 si scrive con due cancelletto: `##`.'),
    mcq(subject, 'base', 'Che cos’è Ollama nel contesto dei progetti di intelligenza artificiale?', [
      'Un editor per immagini.',
      'Un tool per scaricare, avviare e gestire modelli LLM in locale.',
      'Un formato di file per i quiz.',
      'Un database relazionale.',
    ], 1, 'Ollama è utile per lavorare con modelli locali dal terminale.'),
    mcq(subject, 'base', 'Qual è il comando da terminale di Ollama per scaricare o aggiornare un modello?', [
      'ollama update model',
      'ollama pull model',
      'ollama list model',
      'ollama run pull model',
    ], 1, 'Il comando corretto è `ollama pull <nome-modello>`.'),
    mcq(subject, 'base', 'Una volta installato Ollama, quale comando da terminale elenca i modelli disponibili?', [
      'ollama show',
      'ollama list',
      'ollama models',
      'ollama index',
    ], 1, 'Per vedere i modelli installati si usa `ollama list`.'),
    mcq(subject, 'base', 'Cosa è Teachable Machine?', [
      'Un ambiente no-code per addestrare modelli semplici con esempi.',
      'Un editor video professionale.',
      'Un software di contabilità.',
      'Un client Git.',
    ], 0, 'Teachable Machine permette di creare modelli semplici con immagini, audio o pose.'),
    mcq(subject, 'medio', 'Come si integra Teachable Machine in un sito web?', [
      'Si esporta il modello e si usa il codice generato nella pagina.',
      'Si stampa il progetto su carta.',
      'Si converte tutto in PDF e basta.',
      'Si usa solo il CSS senza script.',
    ], 0, 'Il modello esportato viene collegato al sito tramite il codice di integrazione.'),
  ];
}

function main() {
  const data = readJson(DB_PATH);

  data.meta = data.meta || {};
  if (!data.meta.corso) {
    data.meta.corso = SECTION_LABEL;
  }

  data.materie = ensureSubject(data.materie, SECTION_KEY, SECTION_LABEL);

  data.domande = removeQuestionsForSubject(data.domande, SECTION_KEY);
  data.domande.push(...buildDomande());

  data.teoria = data.teoria || {};
  data.teoria[SECTION_KEY] = {
    desc: 'Sintesi dei temi principali del corso: origini dell’IA, ML, chatbot, prompt, Markdown, workflow e uso responsabile.',
    html: buildTheoryHtml(),
  };

  data.documentazione = data.documentazione || {};
  data.documentazione[SECTION_KEY] = {
    desc: 'Documentazione completa e strutturata del materiale IA per la cultura.',
    html: buildDocumentationHtml(),
  };

  data.quiz_reale = data.quiz_reale || {};
  data.quiz_reale[SECTION_KEY] = buildRealQuiz();

  data.domande = sortQuestions(data.domande);

  writeJson(DB_PATH, data);
}

if (require.main === module) {
  main();
}

module.exports = { main, buildDocumentationHtml, buildDomande, buildRealQuiz, buildTheoryHtml };
