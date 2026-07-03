# AI per la cultura

AI per la cultura
---

Introduzione all'Intelligenza Artificiale (AI)
L'intelligenza artificiale (AI) è una tecnologia che si basa sull'elaborazione automatica di dati e sulla creazione di algoritmi di
apprendimento automatico.
E' nata negli anni '50 del secolo scorso
I propositi degli scienziati che hanno avviato questi studi sono sintetizzati nel manifesto dell' AI, frutto del lavoro del
workshop tenutosi nell'estate del 1956 al Dartmouth College:
A PROPOSAL FOR THE DARTMOUTH SUMMER RESEARCH PROJECT ON ARTIFICIAL INTELLIGENCE
L' AI ha provato a sviluppare vari sistemi:
• Logica simbolica (è una branca della logica che si occupa di formalizzare il ragionamento umano attraverso l'uso di
simboli e regole precise)
• Sistemi esperti (sono programmi informatici progettati per imitare il ragionamento di un esperto umano in un
determinato dominio)
L' AI si divide in
• AI debole: sistemi che risolvono problemi specifici (es. assistenti vocali di Google, Samsung o Apple)
• AI forte: sistemi che risolvono  problemi generali con capacità cognitive simili a quelle umane

---

Alcuni studiosi che partecipano al workshop
Alcuni dei principali partecipanti al workshop del 1956:
• John McCarthy: Informatico, considerato il padre dell'IA e inventore del termine "intelligenza
artificiale" e del LISP
• Marvin Minsky: Scienziato cognitivo, pioniere nel campo dell'IA e fondatore del MIT Artificial
Intelligence Laboratory.
• Nathaniel Rochester: Informatico presso IBM, coinvolto nello sviluppo dei primi computer
• Claude Shannon: Matematico e ingegnere, noto per i suoi contributi alla teoria dell'informazione.
• Herbert A. Simon: Scienziato politico e informatico, premio Nobel per l'economia, pioniere dell'IA
• e altri
È importante ricordare in questo contesto:
• Alan Turing: Sebbene non presente a Dartmouth, il suo lavoro e il suo "Test di Turing" hanno avuto
un'influenza enorme sull'IA.
• Warren McCulloch e Walter Pitts: i loro lavori negli anni 40 posero le basi teoriche per le reti
neurali.

---

Il test di Turing
Il test di Turing nacque nel 1950 tramite il manifesto "Computer Machinery and Intelligence" dove Alan Turing propose un
gioco così strutturato:
ci sono almeno tre partecipanti:
• un essere umano (il giudice)
• un altro essere umano
• una macchina
Tutti comunicano tramite messaggi scritti (oggi diremmo chat)
Il giudice deve capire, dai loro messaggi, chi è l'essere umano e quale è la macchina
Se l'intervistatore non riesce a distinguere qual è la macchina e chi è l'umano, la macchina supera il test
Oggi più che mai il test di Turing è importante:
• capire se chi utilizza un sistema è una macchina (un bot): es. capctha - è un test di Touring inverso
• riconoscere immagini reali a immagini manipolate tramite l' AI
• nel kwc o nel riconoscimento documenti
Esercizio 1: dati due testi, verificare quella contraffatta tramite AI (es. GptZero oppure ZeroGpt)
Esercizio 2: date due immagini, verificare quella contraffatta tramite AI (es. AI or Not)

---

Il Machine Learning
Il Machine Learning (ML), o apprendimento automatico, è un ramo dell'Intelligenza Artificiale che
studia come le macchine possano imparare dai dati senza essere esplicitamente programmate.
Si basa su algoritmi che migliorano le proprie prestazioni attraverso l'esperienza, ovvero
l'addestramento su grandi dataset. In questo contesto, l'intervento umano è limitato alla fase
iniziale di programmazione: una volta avviato, il sistema è in grado di auto-ottimizzarsi e
riprogrammarsi autonomamente grazie all'apprendimento automatico.
Il ML si occupa di fare previsioni.
L'Intelligenza Artificiale fa uso delle capacità previsionale del ML per decidere l'azione migliore da
intraprendere

---

Il paradigma del Machine Learning - Pt.1
Dati
Dati
Machine
Learning
Output
Algoritmo
Output
Programmazione
Classica
Algoritmo

---

Il paradigma del Machine Learning - Pt.2
Nel paradigma tradizionale della programmazione:
Dati in Input >> Funzione (algoritmo >> regole) >> Output
y = f(x) Fornendo il valore di x mi viene calcolato il valore di y
Nel paradigma del Machine Learning:
Sulla base dei dati in Input e Output l'algoritmo ricava la funzione f
(Modello)
Es.
Dati in Input: 1, 2, 3, 4 e dati in Output: 1, 4, 9, 16, … di che funzione si tratta?

---

Funzioni del ML
Funzione predittiva: apprendere dati storici per fornire risultati e
previsioni oppure identificare e classificare dati
Esempio: Le aziende possono capire quale cliente sarà più propenso
ad acquistare un certo prodotto
Funzione generativa: viene utilizzata per creare dati nuovi ma
comunque simili a quelli su cui sono addestrati (vedi più avanti)
Esempio: creare testi, email, immagini, video, musica, programmi
software…

---

Diversi tipi di addestramento
Esistono tre tipi principali di addestramento:
• Supervisionato: questi algoritmi usano un dataset di addestramento in cui i dati sono
taggati. Gli algoritmi  possono essere di regressione (dati continui) o classificazione (dati
categorici)
• Non Supervisionato: questi algoritmi usano un dataset in cui non sono presenti le risposte
disponibili ma l'algoritmo stesso trova le relazioni tra i dati e le possibili risposte. Questi
algoritmi  sono detti di clustering
• Apprendimento per rinforzo: questo modello non ha un dataset a disposizione, quindi cerca
di raggiungere il risultato attraverso ricompense o penalizzazioni. Es. se deve imparare a
giocare a scacchi, otterrà un premio in caso di mossa giusta e una penalizzazione in caso di
risposta sbagliata

---

Diversi tipi di addestramento
Esempi dei tre tipi principali di addestramento:
• Supervisionato: Esempio:
• AI che classifica le email come spam: il modello viene addestrato su email già etichettate
• AI che riconosce immagini
• Classificazione dello stile architettonico delle immagini
• Classificazione delle opere sulla base dello stile
• Non Supervisionato: Esempio:
• Analisi di sentiment nei commenti: analisi dei commenti di una chat per rilevare opinioni
simili
• Raggruppamento di opere d'arte per stile e colore dominante
• Apprendimento per rinforzo: Esempio:
• insegnare all' AI a giocare a scacchi (o ad un altro gioco): se la mossa è giusta c'è una
ricompensa, altrimenti una penalizzazione
• guida virtuale che ottimizza il percorso di visita

---

Verifica dell'apprendimento Pt.1
Per verificare un modello di ML si utilizza la funzione di costo:
La funzione di costo serve a quantificare quanto bene un modello di
machine learning si adatta ai dati di addestramento, tramite la differenza
tra i valori stimati e i valori reali
Possiamo avere tre situazioni:
• Underfit (alto costo): il modello è troppo semplice per catturare la
complessità dei dati e commette molti errori
• Just right (medio costo): il modello ha la giusta complessità per
catturare i modelli nei dati senza essere troppo specifico
• Overfit (basso costo): il modello è troppo complesso e si adatta troppo
strettamente ai dati di addestramento ma non sa generalizzare

---

Verifica dell'apprendimento Pt.2
Strategia:
Dividere i dati in due parti:
• Training set: dati di addestramento (es. 70%)
• Test set: dati di verifica (es. 30%)
Lo scopo è interrogare il modello sulla parte in cui noi conosciamo le
risposte, ma lui no!

---

Le fasi del Machine Learning
Fasi del progetto:
• Fase di Inserimento e analisi dei dati (creazione Dataset)
• Dividere i dati in Training set e Test set
• Scegliere un algoritmo
• Regressione
• Classificazione
• Altri
• Fase di apprendimento: addestrare il modello
• Fase di valutazione: valutazione del modello
• Effettuare le previsioni

---

Esempio di Machine Learning
Dataset di esempio scelto: California Housing Dataset
modello didattico di addestramento supervisionato con algoritmo di regressione
Supponiamo di voler comprare una casa in California
Il modello di Machine Learning simula un esperto agente immobiliare
Fornisco in input alcune variabili (features) degli esempi di casa (Reddito medio dei residenti del
quartiere, Età media delle case del quartiere, Numero medio di stanze e di camere da letto per
abitazione, Popolazione del quartiere, Numero medio di occupanti per abitazione, Numero medio di
occupanti per abitazione, Latitudine e Longitudine geografica del quartiere
Fornisco in output (variabile target) il prezzo medio delle case
Dopo l'addestramento il sistema impara a generalizzare dai dati forniti
Durante l'interrogazione, inserisco in input parametri della casa e in output ottengo una stima il
prezzo

---

Esempi di Machine Learning
AI for Oceans
Un'attività educativa e interattiva creata da Code.org per insegnare i concetti fondamentali del
Machine Learning (Apprendimento Automatico) e dell'Etica dell'Intelligenza Artificiale in modo
accessibile e coinvolgente. Gli studenti "addestrano" un modello di intelligenza artificiale
virtuale per classificare oggetti nel mare come "pesci" o "non pesci" (spazzatura), e poi per
distinguere tra pesci sani e pesci malati. Il sito insegna le fasi del ML: training, test e
classificazione, bias e limiti.
Machine Learning for kids
Una piattaforma educativa gratuita che permette a bambini e ragazzi di creare modelli di
intelligenza artificiale usando esempi semplici e visivi. Si integra con Scratch e Python per
costruire giochi, storie e progetti interattivi.
T eacheable machine
Uno strumento gratuito di Google che consente di addestrare modelli di IA in modo visuale e
intuitivo, senza scrivere codice. Si basa su tre tipi di input: immagini, suoni e pose.

---

Il Deep Learning
Il Deep Learning, o apprendimento profondo, è un ramo del Machine Learning
Quando il ML non riesce a ottenere i risultati desiderati si possono cercare di ottenere risultati più precisi
utilizzando reti neurali profonde e facendo uso di una grossa mole di dati
Il Deep Learning si distingue per la sua capacità di affrontare problemi complessi che tradizionalmente
richiederebbero l'intervento dell'intelligenza umana, come la descrizione di immagini, la traduzione di
testi o la trascrizione di contenuti audio
Il Deep Learning, facendo leva su architetture più complesse, necessita di volumi di dati notevolmente
superiori rispetto al Machine Learning tradizionale, il che si traduce in un fabbisogno di potenza di calcolo
considerevolmente maggiore
Sul Deep Learning si costruisce la Gen AI ovvero l'Intelligenza Artificiale Generativa che include gli LLM o
Large Language Models

---

AI Generativa (GenAI)
AI Generativa (GenAI) è un ramo dell'intelligenza artificiale che crea nuovi contenuti, a partire da dati di
addestramento.
L'AI generativa si basa su modelli di apprendimento automatico, in particolare reti neurali, che vengono
addestrati su grandi quantità di dati. Durante l'addestramento, il modello impara a riconoscere schemi e
relazioni nei dati, che poi utilizza per generare nuovi contenuti simili
Esempi di contenuti generati dalla GenAI:
• Testo: ChatGpt, Gemini, Claude, Copilot, Llama, Perplexity, Grok
• Immagini: DALL-E, Nano Banana, Midjourney, Dream Studio, Adobe Firefly, Ideogram, Canva
• Text to Speach: Otter.ai, Notta, Narakeet
• Codice: GitHub Copilot, Codex (OpenAI)

---

LLM
Gli LLM, o Large Language Models (Modelli di Linguaggio di Grandi Dimensioni), sono modelli di intelligenza artificiale progettati per
comprendere, generare e interagire con il linguaggio umano in modo naturale. Questi modelli sono stati sviluppati utilizzando tecniche
avanzate di machine learning e deep learning e sono addestrati su enormi quantità di dati testuali. Ecco una panoramica su cosa sono e
come funzionano
Gli LLM più importanti:
• ChatGPT (OpenAI): Considerato il pioniere e il più noto, è basato sul modello linguistico GPT-5. Ha guadagnato una popolarità
enorme per la sua capacità di generare testo, scrivere codice, riassumere testi complessi e sostenere conversazioni in modo
fluido e contestualizzato. È disponibile in versioni gratuite e a pagamento (Plus e Pro) che offrono funzionalità e prestazioni
avanzate.
• Gemini (Google): Precedentemente noto come Google Bard, Gemini è la risposta di Google a ChatGPT. Utilizza il modello LLM
proprietario di Google e si integra con l'ecosistema di servizi di Google. È particolarmente apprezzato per la sua capacità di
accesso alle informazioni in tempo reale e per le sue funzionalità multimodali, che consentono di elaborare anche immagini e
audio.
• Claude (Anthropic): Sviluppato da Anthropic, Claude è un altro attore importante. I suoi modelli (come Claude Opus 4.1 e
Sonnet 4.5) sono noti per la loro sicurezza, affidabilità e capacità di elaborare grandi quantità di testo. È spesso scelto in
contesti aziendali per la sua robustezza e per la gestione di documenti complessi.
• Copilot (Microsoft): Integrato in diversi prodotti Microsoft (come Windows e Microsoft 365), Copilot è basato sui modelli di
OpenAI. Funziona come un assistente AI che aiuta gli utenti in compiti come la scrittura di email, la generazione di codice, la
creazione di presentazioni e l'organizzazione di dati.
• MetaAI / Llama (Meta): Sviluppato da Meta, si basa su un modello LLM open-source. Questo modello rappresenta un'opzione
molto interessante per gli sviluppatori e le aziende che desiderano costruire e personalizzare i propri chatbot senza i vincoli dei
modelli proprietari.

---

FINE
GRAZIE PER L 'ATTENZIONE!!!




