# 📄 Report — Progetto: Adotta un Cane (OOP)

**Data report:** 25 giugno 2026
**Tipologia:** Applicazione web PHP — Paradigma OOP
**Stato:** 🟡 In sviluppo / Funzionante con refactoring parziale
**Ultima modifica:** 15 marzo 2026

---

## 1. Descrizione del Progetto

Applicazione web in PHP per la gestione e visualizzazione di cani disponibili all'adozione. L'utente può sfogliare le schede dei cani, filtrarle per età, taglia e compatibilità con i gatti, e accedere a una pagina di dettaglio per ogni animale.

Il progetto è in fase di **migrazione da approccio procedurale ad OOP**: sono visibili nel codice i vecchi accessi all'array associativo commentati e sostituiti con i metodi della classe `Cane`.

---

## 2. File del Progetto

| File | Tipo | Descrizione |
|---|---|---|
| `cane.class.php` | PHP | Classe `Cane` con attributi, getter, setter e metodi statici |
| `data.php` | PHP | Database simulato (array PHP) + require della classe |
| `index.php` | PHP + HTML | Pagina principale: filtri + lista card dei cani |
| `detail.php` | PHP + HTML | Pagina di dettaglio del singolo cane |
| `images/` | Cartella | 10 immagini JPG dei cani (`cane1.jpg` → `cane10.jpg`) |

**Totale file:** 16 (4 PHP + 1 cartella + 10 immagini JPG + 1 cartella root)
**Peso archivio:** ~217 KB

---

## 3. Flusso di Esecuzione — Passo per Passo

Questa sezione descrive nel dettaglio cosa succede dall'apertura della pagina fino alla visualizzazione del dettaglio di un cane.

### Passo 1 — L'utente apre `index.php`

Il browser richiede la pagina al server PHP. La prima istruzione eseguita è:

```php
require_once("data.php");
```

Questo include il file `data.php`, che svolge due compiti: definisce l'array `$cani` con i 10 cani e popola la variabile globale `$database["cani"]`, poi include a sua volta `cane.class.php` rendendo disponibile la classe `Cane` per il resto della pagina.

### Passo 2 — Lettura dei filtri dalla URL (GET)

PHP legge i parametri passati nella URL tramite `$_GET`. Se l'utente non ha ancora usato il form, i parametri non esistono e vengono impostati a stringa vuota come valore di default:

```php
$eta_min        = isset($_GET["eta_min"])     ? $_GET["eta_min"]     : "";
$eta_max        = isset($_GET["eta_max"])     ? $_GET["eta_max"]     : "";
$filter_taglia  = isset($_GET["taglia"])      ? $_GET["taglia"]      : "";
$filter_gatti   = isset($_GET["gatti"])       ? $_GET["gatti"]       : "";
```

Questo garantisce che il codice successivo non vada in errore se la URL non contiene filtri (ad es. alla prima visita).

### Passo 3 — Caricamento di tutti i cani tramite OOP

Viene chiamato il metodo statico `Cane::getAll()`, che scorre il database e restituisce un array di oggetti `Cane`, uno per ogni cane:

```php
$dogs = Cane::getAll();
```

Internamente, `getAll()` itera su `$database["cani"]` e per ogni voce chiama `self::get($ID_cane)`, che a sua volta istanzia un nuovo oggetto `Cane` tramite il costruttore `__construct($ID_cane)`. Il costruttore legge i dati del cane dall'array globale e li assegna agli attributi dell'oggetto.

Il risultato è un array `$dogs` dove ogni elemento è un oggetto con i propri dati già caricati e accessibili tramite i getter.

### Passo 4 — Applicazione dei filtri

Viene iterato l'array `$dogs` e per ogni cane vengono controllate 4 condizioni. Solo i cani che superano tutti i controlli attivi vengono aggiunti a `$filtered_dogs`:

```php
foreach($dogs as $cane) {

    // Età minima: valida se il filtro è vuoto OPPURE l'età del cane è >= al filtro
    if($eta_min == "" || $cane->getEta() >= $eta_min) $valid_eta_min = true;

    // Età massima: valida se il filtro è vuoto OPPURE l'età del cane è <= al filtro
    if($eta_max == "" || $cane->getEta() <= $eta_max) $valid_eta_max = true;

    // Taglia: valida se il filtro è vuoto OPPURE la taglia corrisponde
    if($filter_taglia == "" || $cane->getTaglia() == $filter_taglia) $valid_taglia = true;

    // Gatti: valida se la checkbox NON è selezionata OPPURE il cane è compatibile
    if(($filter_gatti == "on" && $cane->getGatti()) || $filter_gatti == "") $valid_gatti = true;

    // Il cane entra nel risultato solo se passa TUTTI i filtri
    if($valid_eta_min && $valid_eta_max && $valid_taglia && $valid_gatti)
        $filtered_dogs[$cane->getID()] = $cane;
}
```

La logica del filtro gatti merita attenzione: la checkbox HTML invia il valore `"on"` quando selezionata, e non invia nulla quando deselezionata. Per questo il controllo è `$filter_gatti == "on"` e non un semplice booleano.

### Passo 5 — Rendering del form filtri

L'HTML della pagina mostra il form con i campi di filtro. I valori attuali dei filtri vengono reinseriti nei campi così l'utente vede le proprie scelte anche dopo aver cliccato "Filtra":

```php
<input type="number" name="eta_min" value="<?= $eta_min; ?>">
```

La select della taglia viene costruita dinamicamente iterando l'array `$taglie`, e l'opzione correntemente selezionata viene marcata con `selected`:

```php
foreach($taglie as $ID_taglia => $taglia) {
    $selected = ($ID_taglia == $filter_taglia) ? "selected" : "";
    echo "<option value='$ID_taglia' $selected>$taglia</option>";
}
```

### Passo 6 — Rendering delle card dei cani

Viene iterato `$filtered_dogs` e per ogni cane viene generata una card HTML usando i getter della classe `Cane`:

```php
foreach($filtered_dogs as $ID_cane => $cane) {
    echo $cane->getNome();
    echo $cane->getFoto();
    echo $taglie[$cane->getTaglia()];   // decodifica int → stringa
    echo $cane->getEta() . " anni";
    echo $cane->getGatti() ? "SI" : "NO";
}
```

Il pulsante "VAI A CONOSCERLO" costruisce il link passando l'ID del cane come parametro GET:

```php
<a href="detail.php?ID_cane=<?= $cane->getID(); ?>">
```

### Passo 7 — L'utente clicca su un cane → `detail.php`

Il browser apre `detail.php?ID_cane=3` (ad esempio). La pagina include `data.php` per avere l'array `$cani` e `$taglie` disponibili, poi legge l'ID dalla URL:

```php
$ID_cane = $_GET["ID_cane"];
$cane = $cani[$ID_cane];   // ⚠️ accesso diretto all'array, non OOP
```

Qui il progetto **non è ancora stato migrato**: invece di usare `Cane::get($ID_cane)` e i getter, si accede direttamente all'array associativo. La pagina mostra nome, età, taglia e foto con accesso diretto tipo `$cane["nome"]`.

---

## 4. Architettura e Struttura OOP

### 4.1 Classe `Cane` (`cane.class.php`)

La classe rappresenta il modello del singolo cane e centralizza tutta la logica di accesso ai dati.

**Attributi:**

| Attributo | Visibilità | Tipo atteso | Note |
|---|---|---|---|
| `$ID_cane` | `private` | int | Unico attributo privato — non modificabile dall'esterno |
| `$nome` | `public` | string | Dovrebbe essere `private` |
| `$taglia` | `public` | int | 1=piccola, 2=media, 3=grande |
| `$eta` | `public` | int | Anni |
| `$gatti` | `public` | bool | Compatibilità con i gatti |
| `$foto` | `public` | string | Path relativo all'immagine |
| `$descrizione` | `public` | string | Testo descrittivo |

**Metodi:**

| Metodo | Tipo | Descrizione |
|---|---|---|
| `__construct($ID_cane)` | Costruttore | Carica i dati dal `$database` globale |
| `getID()` | Getter | Restituisce l'ID privato |
| `get($ID_cane)` | Static | Factory method — crea e restituisce un'istanza |
| `getAll()` | Static | Restituisce array di tutti gli oggetti `Cane` |
| `getNome()` / `setNome()` | Getter/Setter | Gestione nome |
| `getTaglia()` / `setTaglia()` | Getter/Setter | Gestione taglia |
| `getEta()` / `setEta()` | Getter/Setter | Gestione età |
| `getGatti()` / `setGatti()` | Getter/Setter | Gestione compatibilità gatti |
| `getFoto()` / `setFoto()` | Getter/Setter | Gestione path foto |
| `getDescrizione()` / `setDescrizione()` | Getter/Setter | Gestione descrizione |

**Perché il metodo `get()` è statico?**
Perché viene chiamato prima che esista un'istanza della classe: `Cane::get(3)` crea e restituisce un nuovo oggetto senza bisogno di scrivere `new Cane(3)`. È un pattern chiamato **Factory Method** — utile per rendere la creazione degli oggetti più leggibile.

**Perché il costruttore usa `global $database`?**
Perché PHP non condivide le variabili tra scope automaticamente. La variabile `$database` viene definita in `data.php` nello scope globale, e per accedervi dentro un metodo di classe serve dichiarare `global $database`. È un approccio funzionante ma con accoppiamento forte (vedi sezione problemi).

### 4.2 Database simulato (`data.php`)

Array PHP associativo `$cani` con 10 voci (ID 1→10), caricato nella variabile globale `$database["cani"]`. Mappa separata `$taglie` per la decodifica.

**Dataset cani:**

| ID | Nome | Taglia | Età | Gatti |
|---|---|---|---|---|
| 1 | Zelda | media | 2 | ✅ |
| 2 | Rex | piccola | 5 | ❌ |
| 3 | Lilly | grande | 8 | ✅ |
| 4 | Lupo | grande | 4 | ❌ |
| 5 | Briciola | media | 1 | ✅ |
| 6 | Thor | piccola | 3 | ❌ |
| 7 | Maya | media | 6 | ✅ |
| 8 | Pippo | media | 10 | ✅ |
| 9 | Luna | piccola | 4 | ❌ |
| 10 | Rocky | grande | 7 | ❌ |

---

## 5. Problemi Rilevati

| # | File | Problema | Severità | Note |
|---|---|---|---|---|
| 1 | `detail.php` | Accede ancora all'array `$cani` direttamente invece di usare `Cane::get()` | 🔴 Alta | Non migrato a OOP; non usa i getter |
| 2 | `detail.php` | `$_GET["ID_cane"]` senza validazione né sanitizzazione | 🔴 Alta | Crash se il parametro è assente o non valido |
| 3 | `index.php` | Debug attivo: `print "<pre></pre>"` lasciato nel codice | 🟠 Media | Da rimuovere prima della produzione |
| 4 | `cane.class.php` | Attributi `public` invece di `private` | 🟡 Bassa | Bypassano i setter — meno controllo sui dati |
| 5 | `cane.class.php` | Uso di `global $database` nel costruttore | 🟡 Bassa | Accoppiamento forte con lo scope globale |
| 6 | `index.php` | CSS scritto in `<style>` dentro il `<body>` | 🟡 Bassa | Manutenibilità ridotta |
| 7 | `index.php` | Tag di chiusura `<body>` errato (scritto come tag di apertura) | 🟡 Bassa | Errore di sintassi HTML |
| 8 | Progetto | Nessun foglio di stile CSS esterno | 🔵 Info | Tutto lo stile è inline o nel tag `<style>` |
| 9 | Progetto | Nessuna gestione degli errori / pagina 404 | 🔵 Info | Un ID non valido in `detail.php` genera un crash |

---

## 6. Stato Migrazione OOP

Il progetto è chiaramente in transizione da array associativi a OOP. Il codice commentato lo testimonia.

| Componente | Stato migrazione |
|---|---|
| `index.php` — logica filtri | ✅ Migrato a OOP |
| `index.php` — rendering card | ✅ Migrato a OOP |
| `detail.php` | ❌ Non ancora migrato |
| `cane.class.php` — visibilità attributi | 🟡 Parziale (public invece di private) |

---

## 7. Suggerimenti di Miglioramento

- **Completare la migrazione OOP in `detail.php`:** sostituire l'accesso diretto a `$cani[$ID_cane]` con `Cane::get($ID_cane)` e usare i getter
- **Validare i parametri GET:** aggiungere controlli su `ID_cane`, `eta_min`, `eta_max` prima di usarli
- **Rendere privati gli attributi della classe `Cane`:** usare esclusivamente i getter/setter già presenti
- **Separare il CSS** in un file `style.css` esterno
- **Rimuovere il codice di debug** (`print "<pre></pre>"`) da `index.php`
- **Futura evoluzione:** sostituire il database array con MySQL e PDO, mantenendo l'interfaccia della classe invariata

---

## 8. Stato Avanzamento

| Area | Completamento |
|---|---|
| Modello OOP (`Cane`) | ✅ Completato |
| Database simulato | ✅ Completato |
| Pagina lista con filtri | ✅ Completata |
| Pagina dettaglio | 🟡 Funzionante ma da refactoring |
| Separazione CSS | ❌ Da fare |
| Validazione input | ❌ Da fare |
| Migrazione OOP completa | 🟡 ~80% |

---

*Report generato automaticamente — Report Manager v1.0*
