# Database e archiviazione digitale

---

## Archivi elettronici di dati (database)

- **Informazioni strutturate:** organizzate secondo schemi logici e coerenti.
- **Ricercabili (indicizzate):** accessibili tramite motori di ricerca o query.
- **Aggiornate periodicamente:** i dati vengono revisionati e pubblicati in versioni successive.
- **Con riferimenti incrociati (collegamenti ipertestuali):** collegamenti tra elementi correlati per facilitare la navigazione.
- **Strumenti associati (software):** inclusi strumenti per:
  - Accesso e interrogazione del database
  - Aggiornamento dei dati
  - Inserimento di nuove informazioni
  - Eliminazione di dati obsoleti

---

## Definizione di database

- Un database è un insieme organizzato di dati.
- Permette di archiviare e recuperare informazioni in modo efficiente.

**Esempio:** catalogo digitale di un museo con schede per ogni opera.

---

## Tipologie di gestione dati

### Database

1. **Relazionale (RDBMS):** organizza i dati in tabelle con relazioni tra loro.
2. **Object oriented (OODBMS):** i dati sono rappresentati come oggetti.
3. **Documentali (NoSQL):** gestisce dati semi-strutturati → es. MongoDB, Cassandra.
4. **Di serie temporali:** specializzato in dati con riferimento temporale → es. InfluxDB.

> Attualmente, i primi due tipi sono fusi e alle basi-dati relazionali è stata aggiunta la gestione oggetti → MySQL, SQLite, Oracle, PostgreSQL.

### Altri tipi di gestione dati

5. **File flat** (file semplici strutturati)
6. **Grafici:** rappresenta i dati come nodi e connessioni → es. Neo4j.
7. **Di ricerca:** ottimizzato per ricerche testuali → es. Elasticsearch.
8. **In-memory:** archivia i dati direttamente nella memoria RAM → es. Redis.

---

## Timeline storica

- **1957** — Installazione primo computer commerciale.
- **1961** — Primo DBMS (Bachmann - GE's IDS).
- **1970** — Modello relazionale - Ted Codd, IBM.
- **Anni '70:**
  - Crescita dei DB, sviluppo teorico (matematica).
  - DBMS commerciale personalizzato (Digital, Honeywell, Burroughs).
- **1976** — Modello ER introdotto da Chen.
- **Anni '80:**
  - Comparsa dei RDBMS commerciali: Oracle, DB2, Ingres, Sybase, Informix.
  - PC DBMS: DBASE, PARADOX.
- **1985** — Prime bozze di SQL standard.
- **Anni '90:**
  - Estensione dell'utilizzo di RDBMS per nuovi tipi di dati: dati n-dimensionali spaziali e temporali, multimedia.
  - OODBMS - ORDBMS.
  - Aumento delle performance; macchine parallele.
  - SQL standard.

---

## Perché usare un (R)DBMS?

- **Indipendenza dei dati:** capacità di modificare la struttura dei dati senza dover cambiare le applicazioni che li utilizzano.
- **Maggiore coerenza:** uniformità dei dati in tutto il sistema, evitando conflitti o discrepanze tra diverse fonti.
- **Integrità dei dati:** accuratezza e affidabilità dei dati, garantendo che non vengano alterati in modo non autorizzato.
- **Sicurezza dei dati:** protezione dei dati da accessi non autorizzati, perdite o attacchi informatici.
- **Amministrazione uniforme dei dati:** gestione centralizzata e coerente dei dati in tutto il sistema o l'organizzazione.
- **Accesso concorrente:** possibilità per più utenti o processi di accedere e utilizzare i dati contemporaneamente, senza conflitti.
- **Controllo della ridondanza:** riduzione o eliminazione della duplicazione inutile dei dati per migliorare l'efficienza e la coerenza.

---

## Caratteristiche principali di un RDBMS

- **Tabelle relazionali:** i dati sono organizzati in tabelle (dette anche relazioni), composte da righe (record) e colonne (attributi).
- **Chiavi primarie e secondarie:** ogni tabella ha una chiave primaria che identifica univocamente ogni riga, e può avere chiavi secondarie per collegarsi ad altre tabelle.
- **SQL (Structured Query Language):** è il linguaggio standard per interagire con un RDBMS (es. per inserire, aggiornare, cancellare o interrogare dati).
- **Integrità referenziale:** garantisce la coerenza dei dati tra tabelle collegate.
- **Controllo degli accessi:** gestisce chi può leggere o modificare i dati.

---

## Terminologia

| Linguaggio matematico | Linguaggio normale |
|---|---|
| relazione (relation) | tabella |
| tupla (tuple) | riga o record |
| cardinalità (cardinality) | numero di righe |
| attributo (attribute) | colonna o campo |
| grado (degree) | numero di colonne |
| dominio (domain) | insieme di valori validi |
| chiave primaria (primary key) | identificativo unico |

---

## Esempi di database

### Database di un museo

- **Tabella Autori:** AutoreID, Nome, Epoca
- **Tabella Musei:** MuseoID, Nome, Città
- **Tabella Opere:** OperaID, Titolo, AutoreID, Data, MuseoID

### Database per una biblioteca

- **Tabella Autori:** AutoreID, Nome, Cognome
- **Tabella Libri:** LibroID, Titolo, AutoreID

Si può usare una JOIN per sapere quali libri ha scritto un certo autore. Le tabelle sono collegate da chiavi primarie e chiavi secondarie.

---

## Modello relazionale

### 1. Struttura di una tabella

Una tabella è composta da:
- **Righe (tuple)** → ogni riga rappresenta un singolo elemento o record (es. un singolo studente).
- **Colonne (attributi)** → ogni colonna rappresenta una caratteristica di quell'elemento (es. nome, età, matricola).

| Matricola | Nome | Età | Corso |
|---|---|---|---|
| 101 | Anna | 22 | Ingegneria |
| 102 | Luca | 21 | Economia |
| 103 | Sara | 23 | Informatica |

### 2. Chiavi

Per distinguere ogni riga in modo univoco si usa una **chiave primaria (primary key)**, per esempio la colonna Matricola nella tabella degli studenti.

Le tabelle possono anche essere collegate tra loro attraverso le **chiavi secondarie (foreign key)**.

**Esempio:** una tabella Esami può contenere una colonna Matricola che fa riferimento alla chiave primaria della tabella Studenti.

### 3. Relazioni tra tabelle

Il nome "relazionale" deriva proprio da queste relazioni tra le tabelle, che possono essere:
- **Uno a uno (1:1)** → un record corrisponde a uno solo in un'altra tabella.
- **Uno a molti (1:N)** → un record può essere collegato a molti altri.
- **Molti a molti (N:M)** → molti record possono essere collegati a molti altri (gestiti con tabelle intermedie).

### 4. Linguaggio di interrogazione (SQL)

Per lavorare con i dati (inserire, modificare, cercare, cancellare) si usa **SQL (Structured Query Language)**.

**Esempio:**
```sql
SELECT Nome, Corso
FROM Studenti
WHERE Età > 21;
```
→ Mostra i nomi e i corsi degli studenti con età maggiore di 21 anni.

### 5. Esempio: Tabella Studenti e Tabella Esami

**Tabella Studenti** — Chiave primaria (PK): Matricola

| Matricola (PK) | Nome | Corso di Laurea |
|---|---|---|
| 101 | Anna Rossi | Ingegneria |
| 102 | Luca Bianchi | Economia |
| 103 | Sara Verdi | Informatica |

**Tabella Esami** — Chiave primaria (PK): ID Esame

| ID Esame (PK) | Materia |
|---|---|
| 1 | Matematica |
| 2 | Statistica |
| 3 | Fisica |
| 4 | Programmazione |

**Tabella Voti** — Chiave primaria (PK): ID Voto

| ID Voto (PK) | Matricola | IDEsami | Voti |
|---|---|---|---|
| 1 | 101 | 1 | 27 |
| 2 | 102 | 1 | 30 |
| 3 | 103 | 1 | 18 |
| 4 | 103 | 2 | 25 |

---

## Vincoli del modello relazionale

Sono regole che garantiscono l'integrità e la coerenza dei dati all'interno di un database relazionale.

### 1. Vincolo di integrità dell'entità (PRIMARY KEY)

Serve a identificare in modo univoco ogni riga di una tabella.
- Ogni tabella deve avere una chiave primaria (primary key).
- Nessun valore della chiave primaria può essere **duplicato** o **nullo**.

**Esempio:** nella tabella Studenti, la colonna Matricola è la chiave primaria → non possono esserci due studenti con la stessa matricola.

### 2. Vincolo di integrità referenziale (FOREIGN KEY)

Serve a mantenere la coerenza tra tabelle collegate.
- Una **chiave secondaria (foreign key)** in una tabella deve sempre fare riferimento a una chiave primaria valida in un'altra tabella.

**Esempio:** nella tabella Voti, la colonna Matricola è una chiave secondaria che deve sempre corrispondere a una Matricola esistente nella tabella Studenti. Non puoi registrare un voto per un esame e/o uno studente che non esiste.

### 3. Vincolo di dominio (CHECK, tipo di dato)

Definisce quali valori sono ammessi in una colonna.
- Si può specificare il tipo di dato (es. numero, testo, data) o un intervallo di valori.
- Si possono anche impostare regole logiche con CHECK.

**Esempio:**
```sql
Età INT CHECK (Età >= 18)
```
→ Accetta solo età maggiori o uguali a 18.

### 4. Vincolo di unicità (UNIQUE)

Assicura che i valori di una colonna (o combinazione di colonne) siano unici, ma non per forza chiavi primarie.

**Esempio:** in una tabella Studenti, una colonna Email può avere il vincolo UNIQUE, così ogni email è usata una sola volta.

### 5. Vincolo di non nullità (NOT NULL)

Impedisce che una colonna rimanga vuota (NULL). Serve quando un'informazione è sempre obbligatoria.

**Esempio:**
```sql
Nome VARCHAR(50) NOT NULL
```

---

## SQL: Structured Query Language

- SQL permette di accedere a un database.
- SQL esegue interrogazioni su un database.
- I comandi SQL **non fanno distinzione tra maiuscole e minuscole** (SELECT = select).
- I nomi delle colonne e/o dei dati possono essere distinti tra maiuscole e minuscole a seconda della configurazione del sistema.
- I comandi SQL prendono il nome da parole inglesi: create, select, insert, update…

---

## Disegno di un database

La costruzione di un database segue alcuni passaggi fondamentali:

1. **Analisi dei dati:** capire quali informazioni devono essere archiviate.
2. **Progettazione:** creare lo schema (tabelle, relazioni, tipi di dati).
3. **Implementazione:** usare un software DBMS per creare il database.
4. **Popolamento:** inserire i dati iniziali.
5. **Gestione:** mantenere, aggiornare e proteggere i dati nel tempo.

---

## Digitalizzazione e conservazione

Digitalizzare significa trasformare oggetti fisici in file digitali.

**Formati consigliati:**
- Immagini: TIFF, JPEG
- Documenti: PDF/A
- Dati: XML, CSV

**Conservazione digitale:** mantenere l'accesso ai file nel tempo.

---

## Database in ambito culturale e turistico

- **SIGECweb:** gestito da ICCD – Istituto Centrale per il Catalogo e la Documentazione.
- **Europeana:** gestito da Commissione Europea – Europeana Foundation.
- **Catalogo SBN:** gestito da ICCU – Istituto Centrale per il Catalogo Unico delle biblioteche italiane.
- **Museo Nazionale Romano – Catalogo digitale:** gestito da Ministero della Cultura – Direzione Musei Statali di Roma.
- **Open Data Turismo Italia:** gestito da ENIT – Agenzia Nazionale del Turismo, Ministero del Turismo.
- **Italia.it (Banca Dati Nazionale del Turismo):** gestito da Ministero del Turismo.
- **UNESCO World Heritage List:** gestito da UNESCO.
- **Geoportali regionali** (es. SardegnaTurismo, VisitTuscany): gestiti a livello regionale.

---

## Dato, informazione, conoscenza

- **Dato:** un elemento grezzo (es. '1534').
- **Informazione:** il dato con significato (es. 'Anno di creazione dell'opera: 1534').
- **Conoscenza:** interpretazione dell'informazione (es. 'L'opera è rinascimentale').

---

## Sicurezza e versioning

- **Sicurezza dei dati:** controlli di accesso e autenticazione.
- **Backup e archiviazione:** backup per recupero rapido, archiviazione per conservazione a lungo termine.
- **Integrità e ridondanza:** mantenere copie multiple dei dati su supporti e sedi differenti.
- **Regola 3‑2‑1:** 3 copie, 2 supporti diversi, 1 copia off‑site.
- **Versioning e audit trail:** registrare le modifiche, mantenere versioni precedenti, applicare politiche di retention.
