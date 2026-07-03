# 📄 Report — Progetto: Prenotazione Gommone

**Data report:** 25 giugno 2026
**Tipologia:** Applicazione web PHP procedurale — Form di prenotazione
**Stato:** 🟡 Funzionante / Prototipo con problemi critici
**Ultima modifica:** 23 febbraio 2026

---

## 1. Descrizione del Progetto

Applicazione web PHP per la prenotazione di gommoni. L'utente compila un form con i propri dati (nome, cognome, telefono, email), sceglie il gommone, il numero di passeggeri e le date di inizio e fine noleggio. Alla conferma, viene mostrata una pagina di riepilogo con il costo totale calcolato automaticamente.

Il progetto è **procedurale** (nessuna classe OOP), piccolo e autocontenuto: 4 file PHP per ~200 righe totali di codice. Si tratta verosimilmente di un esercizio didattico o di un prototipo iniziale.

---

## 2. File del Progetto

| File | Tipo | Dimensione | Descrizione |
|---|---|---|---|
| `data.php` | PHP | 271 B | Array dei gommoni disponibili e relativi prezzi |
| `functions.php` | PHP | 99 B | Funzione helper `euro()` per la formattazione dei prezzi |
| `index.php` | PHP + HTML | 3.3 KB | Form di prenotazione lato utente |
| `reservation.php` | PHP + HTML | 1.5 KB | Pagina di conferma e riepilogo prenotazione |

**Totale file:** 4 PHP
**Peso archivio:** ~5 KB

---

## 3. Struttura dei Dati (`data.php`)

Il "database" del progetto è un semplice array PHP con due mappe indicizzate dallo stesso ID numerico (1→5).

**Catalogo gommoni:**

| ID | Nome | Prezzo al giorno |
|---|---|---|
| 1 | Gommone 6 posti | 100 € |
| 2 | Gommone 8 posti | 150 € |
| 3 | Gommone 10 posti | 175 € |
| 4 | Gommone 14 posti | 220 € |
| 5 | Gommone 18 posti | 270 € |

I prezzi sono espressi in euro come interi (senza decimali). La funzione `euro()` in `functions.php` li formatta come stringa leggibile:

```php
function euro($amount) {
    return number_format($amount, 2, ",", ".") . " €";
    // es. 1.050,00 €
}
```

`number_format` usa la virgola come separatore decimale e il punto come separatore delle migliaia — corretto per il formato italiano.

---

## 4. Flusso di Esecuzione — Passo per Passo

### Passo 1 — L'utente apre `index.php`

La pagina include `data.php` per avere l'array `$boats` disponibile:

```php
require_once("data.php");
```

Viene renderizzato un form HTML con metodo `POST` che punta a `reservation.php`. I campi del form sono:

| Campo | Tipo input | Attributo `name` | Obbligatorio |
|---|---|---|---|
| Nome | `text` | `name` | No (manca `required`) |
| Cognome | `text` | `surname` | No |
| Telefono | `text` | `phone` | No |
| Email | `email` | `email` | No |
| Passeggeri | `number` | `passengers` | No |
| Gommone | `select` | `ID_boat` | — (ha sempre un valore) |
| Data inizio | `date` | `dateStart` | No |
| Data fine | `date` | `dateEnd` | No |

La select del gommone viene generata dinamicamente da PHP, iterando l'array `$boats`:

```php
foreach($boats as $key => $boat) {
    echo "<option value='$key'>$boat</option>";
}
```

Il `value` di ogni opzione è la chiave numerica dell'array (1–5), che verrà usata in `reservation.php` per recuperare il prezzo corrispondente.

### Passo 2 — L'utente invia il form → `reservation.php`

Il browser invia una richiesta HTTP `POST` a `reservation.php` con tutti i campi del form nel corpo della richiesta. PHP li rende disponibili nell'array superglobale `$_POST`.

Prima di tutto vengono inclusi i file necessari:

```php
require_once("data.php");     // per $boats e $prices
require_once("functions.php"); // per euro()
```

### Passo 3 — Lettura dei dati dal POST

Ogni campo del form viene letto da `$_POST` e assegnato a una variabile:

```php
$name       = $_POST["name"];
$surname    = $_POST["surname"];
$email      = $_POST["email"];
$passengers = $_POST["passengers"];
$dateStart  = $_POST["dateStart"];
$dateEnd    = $_POST["dateEnd"];
$ID_boat    = $_POST["ID_boat"];
```

> ⚠️ Nessun campo viene validato né sanitizzato prima dell'uso. Se l'utente invia il form con campi vuoti o con valori non validi, il codice successivo andrà in errore.

### Passo 4 — Calcolo delle date e dei giorni

Le due date vengono convertite da stringa (formato `YYYY-MM-DD` restituito dall'input `type="date"`) a oggetti `DateTime` di PHP:

```php
$dateStartObj = new DateTime($dateStart);
$dateEndObj   = new DateTime($dateEnd);
```

Le date vengono poi riformattate nel formato italiano `d-m-Y` per la visualizzazione:

```php
$dateStartStr = $dateStartObj->format("d-m-Y");  // es. "15-07-2026"
$dateEndStr   = $dateEndObj->format("d-m-Y");    // es. "20-07-2026"
```

Il numero di giorni si calcola con il metodo `diff()` di `DateTime`, che restituisce un oggetto `DateInterval`:

```php
$dateInterval = $dateStartObj->diff($dateEndObj);
$days = $dateInterval->days + 1;
```

Il `+1` è fondamentale: `diff()` calcola la differenza in giorni tra le due date (es. dal 15 al 20 = 5 giorni di differenza), ma il noleggio include anche il giorno di inizio, quindi i giorni effettivi sono 6. Senza il `+1` il calcolo del prezzo sarebbe sbagliato.

### Passo 5 — Calcolo del costo totale

Il costo si ottiene moltiplicando il numero di giorni per il prezzo giornaliero del gommone scelto, recuperato dall'array `$prices` tramite l'ID:

```php
$amount = $days * $prices[$ID_boat];
```

Per esempio: 6 giorni × 175 € (gommone 10 posti) = **1.050 €**, che `euro()` formatterà come `"1.050,00 €"`.

### Passo 6 — Rendering del riepilogo

La pagina mostra un blocco di conferma con tutti i dati della prenotazione:

```php
echo "Grazie " . $name . " " . $surname . " per la tua prenotazione";
echo "Hai prenotato dal " . $dateStartStr . " al " . $dateEndStr;
echo "Per un totale di " . $days . " giorni";
echo "Il numero di passeggeri è " . $passengers;
echo "Hai scelto il gommone " . $boats[$ID_boat];
echo "Hai pagato " . euro($amount);
echo "Abbiamo inoltrato una mail di conferma all'indirizzo " . $email;
```

> ⚠️ La mail di conferma **non viene realmente inviata**. La frase è solo testo statico — non c'è nessuna chiamata a `mail()` o a un servizio di invio email nel codice.

---

## 5. Problemi Rilevati

| # | File | Problema | Severità | Note |
|---|---|---|---|---|
| 1 | `reservation.php` | Nessuna validazione dei campi POST | 🔴 Alta | Se un campo è vuoto o mancante, PHP genera un errore fatale (es. `new DateTime("")` con data vuota) |
| 2 | `reservation.php` | Nessuna sanitizzazione dell'output | 🔴 Alta | `echo $name` direttamente può portare a XSS — usare `htmlspecialchars()` |
| 3 | `reservation.php` | La mail di conferma non viene inviata | 🟠 Media | Il testo lo promette ma non c'è nessuna funzione `mail()` nel codice |
| 4 | `reservation.php` | `<pre>` aperto in cima alla pagina | 🟠 Media | Il tag `<pre>` è aperto ma il suo contenuto (`euro($amount)`) non viene stampato con `echo` — produce output nullo e formattazione HTML errata |
| 5 | `reservation.php` | `euro($amount)` chiamato senza `echo` | 🟡 Bassa | La funzione viene chiamata ma il risultato non viene stampato né usato |
| 6 | `index.php` | Nessun attributo `required` sui campi del form | 🟡 Bassa | L'utente può inviare il form completamente vuoto |
| 7 | `index.php` | Il campo telefono non ha validazione lato client | 🟡 Bassa | `type="text"` invece di `type="tel"` |
| 8 | `reservation.php` | `$dateInterval->days` restituisce il valore assoluto | 🟡 Bassa | Se l'utente inserisce data fine < data inizio, `days` è comunque positivo ma il calcolo è semanticamente sbagliato — manca un controllo |
| 9 | Progetto | Nessun file CSS esterno | 🔵 Info | Tutti gli stili sono inline o in tag `<style>` nelle singole pagine |
| 10 | Progetto | Nessuna persistenza dei dati | 🔵 Info | Le prenotazioni non vengono salvate da nessuna parte — ogni invio è perso |
| 11 | `reservation.php` | Codice di debug commentato visibile | 🔵 Info | `// var_dump($_POST);` e `// die();` rimasti nel codice |

---

## 6. Analisi del Calcolo Prezzi

Esempio concreto con valori reali per verificare la correttezza del calcolo:

| Parametro | Valore |
|---|---|
| Gommone scelto | Gommone 10 posti (ID 3) |
| Prezzo giornaliero | 175 € |
| Data inizio | 15 luglio 2026 |
| Data fine | 20 luglio 2026 |
| `diff()->days` | 5 |
| `$days` (con +1) | 6 |
| **Totale** | **6 × 175 = 1.050,00 €** |

Il calcolo è corretto a patto che entrambe le date siano valide e che `dateEnd >= dateStart`.

---

## 7. Suggerimenti di Miglioramento

- **Validare i campi prima dell'elaborazione:** controllare che nessun campo sia vuoto, che le date siano valide e che `dateEnd >= dateStart`
- **Sanitizzare l'output HTML:** usare `htmlspecialchars($name)` prima di stampare qualsiasi dato proveniente dall'utente
- **Correggere il tag `<pre>`:** rimuoverlo o aggiungere `echo` prima di `euro($amount)` per stampare effettivamente il risultato
- **Implementare l'invio email:** usare `mail()` oppure una libreria come PHPMailer per inviare realmente la conferma
- **Aggiungere `required` ai campi del form:** prevenire l'invio con campi vuoti già lato client
- **Salvare le prenotazioni:** introdurre un database MySQL (o anche solo un file CSV/JSON) per non perdere i dati
- **Aggiungere un controllo sulla capienza:** verificare che il numero di passeggeri non superi la capienza del gommone scelto

---

## 8. Stato Avanzamento

| Area | Completamento |
|---|---|
| Form di prenotazione (UI) | ✅ Completato |
| Calcolo giorni e importo | ✅ Corretto |
| Formattazione prezzi | ✅ Completata |
| Pagina di riepilogo | 🟡 Funzionante ma con bug (`<pre>`, `euro()` senza `echo`) |
| Validazione input | ❌ Da implementare |
| Sanitizzazione output (XSS) | ❌ Da implementare |
| Invio email di conferma | ❌ Non implementato |
| Persistenza dati (DB) | ❌ Non implementata |
| Responsività / CSS esterno | ❌ Da fare |

---

*Report generato automaticamente — Report Manager v1.0*
