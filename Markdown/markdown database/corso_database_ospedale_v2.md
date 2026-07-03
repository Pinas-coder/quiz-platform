# Database e query SQL

---

## Modello E/R

Il modello Entità/Relazione (E/R) è composto da tre elementi fondamentali:

| Elemento | Descrizione | Corrisponde a |
|---|---|---|
| **Entità** | Un oggetto del mondo reale (es. medico, paziente, stanza) | Tabella |
| **Relazione** | Un legame tra entità (es. opera, visita, ospita) | 1:1 → chiave esterna o stessa tabella; 1:N → chiave esterna; N:M → tabella ponte |
| **Attributi** | Le proprietà di entità e relazioni | Colonne |

---

## Database relazionale

- **Tabella:** ogni tabella contiene righe e colonne.
- **Chiave primaria:** identifica un record in modo univoco.
- **Chiave esterna:** collega due tabelle e mantiene coerenza.
- **1:1** → un record corrisponde a uno solo.
- **1:N** → un record può collegarsi a molti altri.
- **N:M** → è la relazione N:N; serve una tabella intermedia.

---

## SQL: i comandi principali

L'SQL è un linguaggio standard per lavorare con i database. Con l'SQL è possibile:
- creare una tabella;
- modificare una tabella già esistente;
- inserire nuovi record;
- aggiornare i dati;
- eliminare righe;
- cercare informazioni con criteri precisi;
- collegare tabelle diverse con i join.

**Comandi principali:**
`CREATE`, `ALTER TABLE`, `INSERT INTO`, `UPDATE`, `DELETE`, `SELECT`, `JOIN`, `WHERE`, `ORDER BY`, `GROUP BY`

---

## SQL: gli operatori

| Operatore | Categoria | Cosa fa |
|---|---|---|
| AND, OR, NOT | Logici | Combinano condizioni |
| BETWEEN | Di intervallo | Valori in un range |
| IN | Di appartenenza | Valori in un insieme |
| LIKE | Pattern matching | Confronto con pattern: inizia con R: `'R%'`; finisce con i: `'%i'`; contengono ss: `'%ss%'`; parole di 5 lettere che iniziano con M e finiscono con o: `'M___o'` |
| IS NULL / IS NOT NULL | Di controllo NULL | Verifica valori nulli |

---

## Caso di studio: reparto chirurgia

### Descrizione del problema

I pazienti di un reparto di chirurgia sono ricoverati in stanze singole con differenti dotazioni (telefono, televisore, aria condizionata). I pazienti vengono operati da un chirurgo. Si devono registrare anche data, ora e sala operatoria nella quale il paziente viene operato. Bisogna inoltre tenere conto delle date di inizio e fine del ricovero.

Per semplicità si ipotizzi che un paziente possa essere ricoverato una sola volta nel periodo di tempo considerato e che durante il ricovero non cambi la stanza.

### Entità e vincoli

**Entità:** Paziente, Ricovero, Stanza, Operazione, Chirurgo e Sala operatoria. Il testo distingue persone, luoghi ed eventi clinici.

**Vincoli:** un paziente ha un solo ricovero nel periodo osservato, non cambia stanza durante il ricovero e ogni operazione ha data, ora e sala.

---

## Schema relazionale

| Tabella | Campi | Funzione |
|---|---|---|
| PAZIENTE | ID, Cognome, Nome, Indirizzo, Citta_ID, Telefono | Anagrafica del paziente |
| RICOVERO | ID, Paziente_ID, Stanza_ID, InizioRicovero, FineRicovero | Evento di ricovero |
| OPERAZIONE | ID, Paziente_ID, Chirurgo_ID, DataIntervento, OraIntervento, SalaOperatoria | Evento chirurgico |
| CHIRURGO | ID, Cognome, Nome, Specialita | Medico che opera |
| STANZA | ID, Piano, Numero, Telefono, TV, Wifi, AriaCondizionata | Camera con dotazioni |
| CITTA | ID, Nome, CAP, Provincia, ISTAT | Città di riferimento |

---

## Creazione del database con MySQL

### Creazione del database

```sql
CREATE DATABASE IF NOT EXISTS ospedale;
USE ospedale;
```

### Tabella Città

```sql
CREATE TABLE Citta (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Nome VARCHAR(100) NOT NULL,
  CAP VARCHAR(10),
  Provincia VARCHAR(50),
  ISTAT VARCHAR(20)
) ENGINE=InnoDB;
```

- `ID` è la chiave primaria: identifica in modo univoco ogni città.
- `AUTO_INCREMENT` fa crescere automaticamente l'ID.
- `Nome` è obbligatorio.
- `CAP`, `Provincia` e `ISTAT` sono opzionali.

### Tabella Paziente

```sql
CREATE TABLE Paziente (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Cognome VARCHAR(100) NOT NULL,
  Nome VARCHAR(100) NOT NULL,
  Indirizzo VARCHAR(150),
  Citta_ID INT NULL,
  Telefono VARCHAR(30),
  CONSTRAINT fk_paziente_citta
    FOREIGN KEY (Citta_ID) REFERENCES Citta(ID)
    ON UPDATE CASCADE
    ON DELETE SET NULL
) ENGINE=InnoDB;
```

Le regole della chiave esterna significano che:
- se l'ID della città cambia, anche il valore collegato nel paziente si aggiorna (`ON UPDATE CASCADE`);
- se una città viene eliminata, il campo `Citta_ID` del paziente diventa NULL invece di cancellare il paziente (`ON DELETE SET NULL`).

### Tabella Chirurgo

```sql
CREATE TABLE Chirurgo (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Cognome VARCHAR(100) NOT NULL,
  Nome VARCHAR(100) NOT NULL,
  Specialita VARCHAR(100)
) ENGINE=InnoDB;
```

### Tabella Stanza

```sql
CREATE TABLE Stanza (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Piano VARCHAR(20) NOT NULL,
  Numero VARCHAR(20) NOT NULL,
  Telefono VARCHAR(30),
  TV BOOLEAN NOT NULL DEFAULT FALSE,
  Wifi BOOLEAN NOT NULL DEFAULT FALSE,
  Aria_Condizionata BOOLEAN NOT NULL DEFAULT FALSE
) ENGINE=InnoDB;
```

### Tabella Ricovero

```sql
CREATE TABLE Ricovero (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Paziente_ID INT NOT NULL,
  Stanza_ID INT NOT NULL,
  InizioRicovero DATE NOT NULL,
  FineRicovero DATE,
  CONSTRAINT fk_ricovero_paziente
    FOREIGN KEY (Paziente_ID) REFERENCES Paziente(ID)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT fk_ricovero_stanza
    FOREIGN KEY (Stanza_ID) REFERENCES Stanza(ID)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE=InnoDB;
```

- se cancelli un paziente, si cancellano anche i suoi ricoveri (`ON DELETE CASCADE`);
- se cancelli una stanza usata in un ricovero, MySQL lo impedisce (`ON DELETE RESTRICT`).

### Tabella Operazione

```sql
CREATE TABLE Operazione (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Paziente_ID INT NOT NULL,
  Chirurgo_ID INT NOT NULL,
  DataIntervento DATE NOT NULL,
  OraIntervento TIME NOT NULL,
  SalaOperatoria VARCHAR(50) NOT NULL,
  CONSTRAINT fk_operazione_paziente
    FOREIGN KEY (Paziente_ID) REFERENCES Paziente(ID)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT fk_operazione_chirurgo
    FOREIGN KEY (Chirurgo_ID) REFERENCES Chirurgo(ID)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE=InnoDB;
```

- se cancelli un paziente, si cancellano anche le sue operazioni (`ON DELETE CASCADE`);
- se cancelli un chirurgo associato a un'operazione, MySQL lo impedisce (`ON DELETE RESTRICT`).

---

## Interrogazioni SQL

### Selezioni semplici

```sql
-- Query semplice
SELECT *
FROM Chirurgo;

-- Valori univoci e uso di AS
SELECT DISTINCT Paziente.Cognome
AS "Cognome del paziente"
FROM Paziente;

-- Selezione con WHERE
SELECT Chirurgo.ID,
Chirurgo.Cognome, Chirurgo.Nome,
Chirurgo.Specialita
FROM Chirurgo
WHERE Specialita = 'Ortopedia';

-- Proiezione, limite di righe e ordinamento
SELECT Chirurgo.Cognome,
Chirurgo.Nome,
Chirurgo.Specialita
FROM Chirurgo
ORDER BY Chirurgo.Cognome ASC,
Chirurgo.nome ASC
LIMIT 4;
```

### Filtro, alias e date

```sql
-- Selezione con le date
SELECT *
FROM `Ricovero`
WHERE Ricovero.InizioRicovero > '2026/04/01';

-- Selezione con BETWEEN sulle date e formattazione
SELECT Ricovero.Paziente_ID,
Ricovero.Stanza_ID,
DATE_FORMAT(Ricovero.InizioRicovero, '%d/%m/%Y') AS 'Inizio Ricovero',
DATE_FORMAT(Ricovero.FineRicovero, '%d/%m/%Y') AS 'Fine Ricovero'
FROM `Ricovero`
WHERE Ricovero.InizioRicovero
BETWEEN '2026/04/01' AND '2026/06/01';

-- Utilizzo di IN
SELECT *
FROM Paziente
WHERE ID IN (1, 3, 5);

-- Valori nulli
SELECT *
FROM Paziente
WHERE Telefono IS NULL;
```

### Unione tra tabelle: i Join

```sql
-- Pazienti con città (LEFT JOIN)
SELECT Paziente.ID,
Paziente.Cognome, Paziente.Nome,
Citta.Nome AS Citta,
Paziente.Telefono
FROM Paziente
LEFT JOIN Citta ON
Paziente.Citta_ID = Citta.ID;

-- Solo pazienti di Cagliari
SELECT Paziente.ID,
Paziente.Cognome, Paziente.Nome,
Citta.Nome AS Citta
FROM Paziente
LEFT JOIN Citta ON
Paziente.Citta_ID = Citta.ID
WHERE Citta.Nome = 'Cagliari';

-- Operazioni con dati chirurgo (INNER JOIN)
SELECT Operazione.ID,
Chirurgo.Cognome, Chirurgo.Nome,
Operazione.DataIntervento,
Operazione.SalaOperatoria
FROM Operazione
INNER JOIN Chirurgo ON
Operazione.Chirurgo_ID = Chirurgo.ID;

-- Cross join: usare con cautela
SELECT Paziente.Cognome,
Paziente.Nome, Stanza.Numero
FROM Paziente
CROSS JOIN Stanza;
```

### Aggiornamento dei dati

```sql
-- Aggiornamento record paziente
UPDATE Paziente
SET Cognome = 'Rossi'
WHERE ID = 5;

-- Aggiunta colonna con default
ALTER TABLE Operazione
ADD InfermieriSupporto INT(20) DEFAULT 3;

-- Cancellazione record paziente
DELETE FROM Paziente
WHERE ID = 10;

-- Eliminazione colonna
ALTER TABLE Operazione
DROP NumInfermieriPresenti;
```

### Conteggi e raggruppamenti

```sql
-- Conteggio dei pazienti
SELECT COUNT(*)
FROM Paziente;

-- Conteggio con cognome univoco
SELECT COUNT(DISTINCT Cognome) AS "Pazienti Cognome univoco"
FROM Paziente;

-- Conteggio con raggruppamento
SELECT Operazione.Chirurgo_ID,
Chirurgo.Nome, Chirurgo.Cognome,
COUNT(*) AS pazienti_operati
FROM Operazione
INNER JOIN Chirurgo ON
Operazione.Chirurgo_ID = Chirurgo.ID
GROUP BY Operazione.Chirurgo_ID;

-- Condizioni con HAVING
SELECT Operazione.Chirurgo_ID,
Chirurgo.Cognome, Chirurgo.Nome,
COUNT(*) AS pazienti_operati
FROM Operazione
INNER JOIN Chirurgo ON
Operazione.Chirurgo_ID = Chirurgo.ID
GROUP BY Operazione.Chirurgo_ID
HAVING COUNT(*) > 1;
```

### Funzioni di aggregazione

```sql
-- Somma
SELECT SUM(InfermieriSupporto) AS totale_infermieri
FROM Operazione;

-- Media
SELECT AVG(InfermieriSupporto) AS media_infermieri
FROM Operazione;

-- Valore minimo
SELECT MIN(InfermieriSupporto) AS minimo
FROM Operazione;

-- Valore massimo
SELECT MAX(InfermieriSupporto) AS massimo
FROM Operazione;
```

### Query nidificata

La query cerca il nome e il CAP delle città dei pazienti operati dal chirurgo Verdi Alessandro, combinando sottoquery e join.

```sql
SELECT Citta.nome, Citta.cap
FROM `Citta`
WHERE Citta.ID IN
  (SELECT Paziente.Citta_ID
   FROM `Paziente`
   WHERE Paziente.ID IN
     (SELECT Operazione.Paziente_ID
      FROM Operazione
      LEFT JOIN Chirurgo ON Operazione.Chirurgo_ID = Chirurgo.ID
      WHERE Chirurgo.Cognome = 'Verdi' AND Chirurgo.Nome = 'Alessandro'));
```
