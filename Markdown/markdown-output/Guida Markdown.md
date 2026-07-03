# Guida Markdown

Guida Markdown
Base di Markdown puro + approfondimento su GFM, Obsidian e Pandoc

---

Obiettivi della lezione
Capire che cos'è Markdown e perché si usa.
Imparare la sintassi essenziale del Markdown puro.
Distinguere tra Markdown puro, GFM, Obsidian e Pandoc.
Sapere quali estensioni usare nei diversi contesti.

---

Che cos'è Markdown
• È un linguaggio di markup leggero pensato per scrivere testo formattato in modo semplice.
• Usa simboli leggibili anche nel file sorgente, senza impaginazione complessa.
• È adatto a documentazione, appunti, README, guide didattiche e conversione in altri formati.

---

Perché conviene usarlo
• Semplice da scrivere e leggere.
• Portabile: è testo semplice .md.
• Compatibile con Git e con i sistemi di versionamento.
• Convertibile in HTML, PDF, DOCX e slide tramite strumenti dedicati.

---

Markdown puro: struttura minima
# Titolo principale
## Sottotitolo
Testo in **grassetto** e *corsivo*.
- Punto elenco
- Altro punto
1. Primo passaggio
2. Secondo passaggio
> Una citazione
`codice inline`
Questo esempio usa solo elementi base generalmente supportati ovunque.

---

Indice iniziale in Markdown puro
# Guida Markdown
## Indice
- [Cos'è Markdown](#cosè-markdown)
- [Sintassi base](#sintassi-base)
- [Elenchi](#elenchi)
- [Link e codice](#link-e-codice)
L'indice usa link interni ai titoli; il supporto dipende dal renderer.

---

Sintassi base del Markdown puro
Titoli con #, ##, ### fino a sei livelli.
Enfasi con **grassetto** e *corsivo*.
Liste puntate con -, * o +.
Liste numerate con 1. 2. 3.
Citazioni con > e codice inline con backtick.

---

I flavor
Accanto alla "lingua ufficiale" del markdown, esistono anche una serie di dialetti chiamati "flavor".
I dialetti sono specifiche del linguaggio, legati alla piattaforma che si sta utilizzando.
Possiamo distinguere tra:
• Markdown base: È quello definito originariamente da John Gruber. Supporta:
• titoli #
• grassetto **
• corsivo *
• liste
• link
• GitHub Flavored Markdown (GFM): è quello usato da GitHub. Aggiunge:
• task list: - [x] - [ ]
• barrato: ~~testo~~
• tabelle: create con trattini e pipe (es. | colonna1|colonna2|)
• Markdown di Obsidian. Aggiunge:
• wiki link: [[Nota]]
• evidenziazione: ==testo==
• note: > [!note]
• Pandoc. Aggiunge varie funzionalità come note a piè di pagina, metadati, citazioni…

---

Confronto 1: testo e codice
Funzionalità Sintassi MD puro GFM Obsidian Pandoc
Intestazioni H1-H6 # ## ### âœ…
 âœ…
 âœ…
 âœ…
Grassetto / Corsivo **testo** / *testo* âœ…
 âœ…
 âœ…
 âœ…
Barrato ~~testo~~ âŒ
 âœ…
 âœ…
 âœ…
Codice inline `codice` âœ…
 âœ…
 âœ…
 âœ…
Blocco di codice indentato 4 spazi âœ…
 âœ…
 âœ…
 âœ…
Fenced code block ``` âŒ
 âœ…
 âœ…
 âœ…

---

Confronto 2: liste e struttura
Funzionalità Sintassi MD puro GFM Obsidian Pandoc
Lista puntata - elemento âœ…
 âœ…
 âœ…
 âœ…
Lista numerata 1. elemento âœ…
 âœ…
 âœ…
 âœ…
Task list - [ ] elemento âŒ
 âœ…
 âœ…
 âœ…
Citazione > testo âœ…
 âœ…
 âœ…
 âœ…
Linea orizzontale --- *** ___ âœ…
 âœ…
 âœ…
 âœ…
YAML frontmatter --- in testa âŒ
 âŒ
 âœ…
 âœ…

---

Confronto 3: link, tabelle e note
Funzionalità Sintassi MD puro GFM Obsidian Pandoc
Tabelle con pipe | col | col | âŒ
 âœ…
 âœ…
 âœ…
Allineamento colonne :--- :---: ---: âŒ
 âœ…
 âœ…
 âœ…
Link standard [testo](url) âœ…
 âœ…
 âœ…
 âœ…
Autolink https://sito.it âŒ
 âœ…
 âœ…
 âœ…
Note a piè di pagina [^1] âŒ
 âŒ
 âœ…
 âœ…
Evidenziazione ==testo== âŒ
 âŒ
 âœ…
 âŒ

---

Confronto 4: estensioni avanzate
Funzionalità Sintassi MD puro GFM Obsidian Pandoc
Wikilink [[Pagina]] âŒ
 âŒ
 âœ…
 âŒ
Embed allegati ![[file]] âŒ
 âŒ
 âœ…
 âŒ
Commenti Obsidian %% commento %% âŒ
 âŒ
 âœ…
 âŒ
Math LaTeX $...$ / $$...$$ âŒ
 âŒ
 âœ…
 âœ…
Citazioni bibliografiche @chiave âŒ
 âŒ
 âŒ
 âœ…
Definition list term
: definizione
âŒ
 âŒ
 âŒ
 âœ…

---

Quando usare ogni variante
Markdown puro: per la massima compatibilità e per imparare la sintassi di base.
GFM: per GitHub, README, issue, wiki e documentazione tecnica collaborativa.
Obsidian: per appunti collegati, knowledge base personali e vault con wikilink.
Pandoc: per conversioni professionali, documenti accademici e output multipli.

---

Base consigliata in Markdown puro
# Titolo
## Sezione
Testo introduttivo.
### Elenco
- Voce 1
- Voce 2
### Passaggi
1. Primo
2. Secondo
> Nota importante
Parti da questa base e aggiungi estensioni solo quando il tuo ambiente le supporta.

---

Nota didattica importante
Non tutto ciò che sembra Markdown funziona ovunque allo stesso modo.
Task list, tabelle, footnote, wikilink e matematica dipendono dal flavor.
Per questo conviene distinguere sempre tra sintassi base ed estensioni.

---

Risorse utili
Guida ufficiale Markdown / Markdown Guide
GitHub Docs per GitHub Flavored Markdown
Obsidian Flavored Markdown
Manuale Pandoc per estensioni e conversioni avanzate
JoeBird - Editor online
Dillinger.io - Editor online




