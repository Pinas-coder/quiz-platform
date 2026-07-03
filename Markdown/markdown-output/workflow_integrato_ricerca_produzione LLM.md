# workflow_integrato_ricerca_produzione LLM

Workflow integrato per ricerca, analisi
e produzione
Perplexity  ·  Google NotebookLM  ·  Gemini
Un processo modulare, scalabile e verificabile
per produrre contenuti affidabili e riutilizzabili
1 / 25


---

Introduzione: il pericolo delle allucinazioni
Obiettivo: creare un documento preciso e verificato
• Definizione: le allucinazioni sono affermazioni non supportate dalle fonti o inventate dall' AI.
• Impatto: possono compromettere credibilità, decisioni e responsabilità legale.
• Cause comuni: dati di training incompleti, prompt ambigui, mancanza di contesto verificabile.
• Segnali di allarme: dettagli troppo precisi senza citazione; numeri o date non verificabili; affermazioni
contraddittorie.
Questo workflow si propone di creare un documento preciso e verificato nei suoi contenuti
2 / 25

---

Obiettivo del workflow
Processo affidabile e scalabile
Ripetibile su qualsiasi progetto o tema
Separazione delle fasi
Ricerca · Archiviazione · Analisi · Produzione
Riduzione di errori e allucinazioni
Fonti primarie sempre verificabili
Strumenti riutilizzabili
Gem, prompt, tassonomie pronti all'uso
3 / 25

---

Panoramica del flusso di lavoro
1
Ricerca
Perplexity
2
Download PDF
File system
3
Caricamento
Google Notebook LM
4
Gem AI
Gemini
5
Verifica
LM + Perplexity
Ogni fase è indipendente e verificabile · L'output di ciascuna è l'input della successiva
4 / 25

---

Fase 1 â€” Ricerca con Perplexity
Obiettivo: individuare fonti affidabili e aggiornate con citazioni verificabili
Ricerca mirata con citazioni
Usa query specifiche: topic + anno + tipo fonte (es. "normativa GDPR 2025 PDF")
Individuazione rapida di PDF
Paper accademici, normative, report istituzionali, linee guida
Fonti primarie e secondarie
Distingui subito: fonti originali vs. commenti/analisi
Raccolta URL e metadati
Salva titolo, autore, anno, ente emittente per ogni fonte
5 / 25

---

Fase 2 â€” Download e gestione dei PDF
Obiettivo: creare un archivio stabile, rinominato e ripulito
• Scaricare tutte le fonti individuate su Perplexity
• Rinominare ogni file con schema chiaro (vedi slide successiva)
• Organizzare in cartelle tematiche standardizzate
• Pulizia opzionale: rimuovere copertine, pagine inutili, pubblicità
ðŸ’¡
  Strumenti utili: Adobe Acrobat (pulizia PDF), Bulk Rename Utility (rinomina massiva), Zotero (gestione bibliografica)
6 / 25

---

Tassonomia e naming convention per i PDF
Struttura cartelle
01 fonti_primarie
02 fonti_secondarie
03 normativa
04 analisi
05 materiali_didattici
Naming convention file
AAAA-MM_Autore_Titolo-breve.pdf
Esempio:
2025-03_AGID_Linee-guida-accessibilita.pdf
âœ”  Anno e mese in testa â†’ ordinamento automatico
âœ”  Niente spazi â†’ usa trattini o underscore
âœ”  Titolo breve (max 30 car.) ma descrittivo
âœ”  Versione: aggiungi _v2 se aggiorni il file
7 / 25

---

Fase 3 â€” Caricamento su Google Notebook LM
Obiettivo: creare un layer semantico interrogabile sulle tue fonti
Indicizzazione
Si possono integrare diversi tipi di fonte (web, pdf,
documenti, video…).
Ogni fonte viene analizzata e resa ricercabile per concetti.
Interrogazione
Poni domande specifiche ai tuoi documenti con citazioni
di fonte
Riassunti
Sintesi automatiche, mappe concettuali, timeline per
documento
Confronto
Analisi comparativa tra documenti diversi nello stesso
Notebook
âš 
  Limite attuale: max 50 fonti per Notebook · dimensione singolo file ~200MB 8 / 25

---

Fase 4 â€” Creazione dei Gem con Gemini
Cos'è un Gem?
Un Gem è una versione personalizzata di Gemini con istruzioni permanenti su ruolo, stile e contesto. Può essere collegato a Google
Drive / Docs / Notebook LM come fonte di riferimento.
Istruzioni permanenti
Stile, tono, formato, profondità definiti una volta per tutte
Collegamento a fonti
Integrazione con Google Drive oppure a Notebook LM per accedere ai PDF archiviati o caricati, senza perdere il contesto
Riduzione allucinazioni
Le risposte restano ancorate alle fonti caricate
Riutilizzabilità
Lo stesso Gem funziona su qualsiasi nuovo input dello stesso tipo
9 / 25

---

Esempi di Gem specializzati
Gem_SintesiDidattiche
Produce riassunti semplificati per studenti, con glossario e punti chiave
Gem_AnalisiNormativa
Legge e interpreta atti normativi, regolamenti, circolari PA
Gem_ConfrontoFonti
Confronta documenti diversi, evidenzia convergenze e divergenze
Gem_ProduzioneSlide
Genera outline e testi per presentazioni a partire dalle fonti
Gem_StesuraAccademica
Redige testi accademici, abstract, bibliografie in stile scientifico
10 / 25

---

Fase 5 â€” Verifica incrociata e rifinitura
Obiettivo: garantire accuratezza, coerenza e tracciabilità delle fonti
1Â°
Google Notebook LM
"Verifica se il testo è coerente con le fonti caricate"
2Â°
Perplexity
"Esistono fonti recenti che contraddicono questa affermazione?"
3Â°
Revisione umana
Lettura critica finale · controllo citazioni · coerenza stile
11 / 25

---

Miglioramenti al workflow
Libreria di prompt
Archivia i prompt più efficaci in un documento condiviso,
catalogati per tipo di output
Estrarre tabelle in CSV
Struttura dati estratti dai PDF in CSV prima del caricamento,
per analisi quantitative precise
Annotare i PDF
Aggiungi evidenziazioni e note prima del caricamento:
NotebookLM le indicizza
Versionare gli output
Usa suffissi _v1 _v2 e un log delle modifiche per tracciare
l'evoluzione dei documenti prodotti
12 / 25

---

Libreria di prompt ricorrenti
Analisi "Genera una mappa concettuale basata sulle fonti caricate"
Confronto "Confronta i documenti X e Y: differenze principali e punti comuni"
Didattica "Crea una sintesi per studenti di scuola superiore con glossario"
PA / Enti "Crea una scheda operativa per un funzionario della Pubblica Amministrazione"
Normativa "Elenca gli obblighi di legge presenti nei documenti, con articolo e fonte"
Verifica "Trova affermazioni nel testo che non trovano riscontro nelle fonti"
13 / 25

---

Rischi e limitazioni da considerare
âš 
  Qualità delle fonti
Il workflow amplifica la qualità delle fonti: fonti errate â†’ output errati. Verifica sempre autorevolezza e data.
âš 
  Allucinazioni residue
NotebookLM e Gemini riducono ma non eliminano le allucinazioni. La verifica umana finale è essenziale.
âš 
  Limiti di lunghezza
PDF troppo lunghi o rumorosi possono degradare la qualità dell'indicizzazione. Pulisci i file prima.
âš 
  Privacy e GDPR
Non caricare dati personali o sensibili su piattaforme cloud senza verificare le condizioni di trattamento.
âš 
  Dipendenza da piattaforme
Perplexity, NotebookLM e Gemini possono cambiare funzionalità o costi. Mantieni sempre copie locali.
14 / 25

---

Strumenti alternativi e complementari
Il workflow è modulare: ogni fase può usare strumenti diversi secondo le esigenze
Ricerca Consensus (paper scientifici) · Elicit · Semantic Scholar · Google Scholar
Gestione PDF Zotero · Mendeley · PDF Guru · DEVONthink (Mac)
Analisi doc. Claude (Anthropic) · ChatGPT + file upload · Copilot for Microsoft 365
Produzione Notion AI · Jasper · Copy.ai · Writer (enterprise)
Formattazione Google Docs · Microsoft Word · Canva · Gamma (slide AI-native)
15 / 25

---

Checklist operativa
âœ“ Fase 1 Ricerca completata su Perplexity con citazioni salvate
âœ“ Fase 2 PDF scaricati, rinominati e organizzati in cartelle tematiche
âœ“ Fase 2 PDF puliti e annotati prima del caricamento
âœ“ Fase 3 PDF caricati su Google NotebookLM
âœ“ Fase 4 Gem configurati con istruzioni e fonti collegate
âœ“ Fase 5 Verifica incrociata effettuata (NotebookLM + Perplexity)
âœ“ Output Output finali formattati e versionati
16 / 25

---

Formattazione e distribuzione degli output
Google Docs
Testi lunghi, report, documenti condivisibili e commentabili
in tempo reale
Canva / Gamma
Presentazioni, infografiche, slide con design professionale e
template AI
Notion
Archivio, wiki interno, dashboard consultazione per team o
uso personale
Microsoft 365
Compatibilità enterprise: Word per testi, PowerPoint per
slide, Excel per dati
17 / 25

---

Prossimi passi e sviluppi del workflow
1 Pilota su un progetto reale
Applica il workflow a un tema specifico entro 1 settimana e misura il tempo risparmiato
2 Costruisci la libreria di prompt
Dopo ogni sessione, salva i prompt efficaci in un doc condiviso con categoria e contesto d'uso
3 Crea 2-3 Gem specializzati
Inizia con Gem_SintesiDidattiche e Gem_AnalisiNormativa: sono i più immediatamente utili
4 Automatizza la tassonomia
Imposta una cartella template riutilizzabile da copiare a inizio progetto
5 Formazione del team
Condividi il workflow con colleghi e definisci uno standard operativo condiviso
18 / 25

---

Un workflow modulare,
scalabile e verificabile
Perplexity · NotebookLM · Gemini
Tre strumenti distinti, una sola logica:
fonte â†’ archivio â†’ analisi â†’ produzione â†’ verifica
Contenuti affidabili Riutilizzabili Didattici e professionali
19 / 25

---

Esercizio - Pt.1
Ricerca con Perplexity
Fare una ricerca su:
1. Storia della lingua sarda
2. Varianti principali
3. Politiche linguistiche e tutela
Per ogni area tematica:
• 3â€“5 fonti affidabili
• link ai PDF (tesi, articoli, report, studi universitari)
• breve descrizione del contenuto
• indicazione del livello di affidabilità (accademica / istituzionale / divulgativa)
20 / 25

---

Esercizio - Pt.2
Download e organizzazione dei PDF
Scarica i PDF trovati e organizza le cartelle così:
01_storia_lingua_sarda
02_varianti_e_dialetti
03_politiche_linguistiche
Rinomina i file in modo chiaro, ad esempio:
• StoriaLinguaSarda_UniversitaSassari_2018.pdf
• VariantiSarde_LogudoreseCampidanese_Analisi_2020.pdf
• PoliticheLinguisticheSardegna_Regione_2019.pdf
Extra (opzionale ma consigliato)
• Rimuovi pagine inutili
• Aggiungi annotazioni se utili
• Estrai eventuali tabelle in CSV
21/ 25

---

Esercizio - Pt.3
Caricamento su Google Notebook LM
Compito:
Carica tutti i PDF su Google LM e chiedi:
• "Genera un riassunto per ogni documento."
• "Crea una mappa concettuale della storia della lingua sarda."
• "Confronta le varianti logudorese e campidanese."
• "Individua le principali politiche linguistiche degli ultimi 30 anni."
• "Elenca i concetti chiave ricorrenti nei documenti."
Output richiesto:
• 3 mappe concettuali
• 1 confronto tra varianti
• 1 timeline delle politiche linguistiche
• 1 elenco dei concetti chiave
22/ 25

---

Esercizio - Pt.4
Creazione dei Gem collegati a Google Notebook LM
Obiettivo: produrre contenuti intelligenti basati sulle fonti.
Compito: Crea due Gem:
Gem 1 â€” "Sintesi Culturale Sardegna" - Istruzioni permanenti:
• Linguaggio chiaro e didattico
• Output in forma di schede sintetiche
• Basarsi solo sulle fonti caricate in Google Notebook LM
• Evidenziare concetti chiave e definizioni
Gem 2 â€” "Analisi Antropologica Sardegna" - Istruzioni permanenti:
• Stile più tecnico
• Collegamenti tra storia, varianti e politiche linguistiche
• Evidenziare cause, evoluzioni, influenze romanze
• Struttura argomentativa
 Output richiesto: Chiedi a entrambi i Gem:
"Produci una sintesi strutturata della lingua sarda integrando storia, varianti e politiche linguistiche."
Confronta i due risultati.
23/ 25

---

Esercizio - Pt.5
Unire i documenti prodotti dai Gem
Obiettivo: produrre un unico documento.
Compito:
Dopo aver creato i due Gem, esportali su Google Documenti, fornendo un nome diverso ad ognuno, es. il
primo sintesi e il secondo analisi.
Dopo aver esportato i pdf, uscire dai Gem e avviare una chat normale in modalità ragionamento.
Caricare i due pdf e chiedere di unire i due documenti seguendo un indice predefinito.
Per esempio, il prompt potrebbe essere:
integra in un unico documento le fonti caricate, e utilizzando esclusivamente queste, seguendo questo
indice:
• Introduzione
• Storia della lingua sarda
• Varianti principali
• Politiche linguistiche
• Stato attuale e prospettive
• Glossario
• Bibliografia
24/ 25

---

Esercizio - Pt.6
Verifica incrociata e produzione finale
Compito
Prendi il PDF definitivo, caricalo su Google Notebook LM, e selezionalo (deve essere l'unico
selezionato)
Chiedi  "Analizza il pdf selezionato e verifica se ogni affermazione è supportata dalle altre fonti
caricate. Correggi eventuali errori o parti non supportate."
Analizzare il risultato, apportare eventuali modifiche e sottoporre nuovamente il documento per
l'analisi.
Il risultato sarà un'elaborazione verificata delle fonti selezionate.
25 / 25




