# 📄 Report — Progetto: Audioguide

**Data report:** 25 giugno 2026
**Tipologia:** Applicazione web PHP + MySQL — Backend OOP + Frontend AJAX
**Stato:** 🟡 In sviluppo / Funzionante con sezioni incomplete
**Ultima modifica:** 15 maggio 2026

---

## 1. Descrizione del Progetto

Pannello di amministrazione web per la gestione di audioguide, utenti e classi. L'interfaccia è dinamica: le tabelle si aggiornano senza ricaricare la pagina grazie a chiamate AJAX (Fetch API), che comunicano con un endpoint PHP centrale (`api_controller.php`). Il backend è costruito con PHP OOP e MySQL tramite PDO.

Il progetto presenta tre aree principali:
- **Gestione guide** (`admin.php`) — CRUD delle audioguide
- **Gestione utenti** (`index.php`) — CRUD degli utenti con valutazioni e assegnazione a classi
- **Gestione classi** (`classi.php`) — CRUD delle classi con capacità e conteggio utenti

> ⚠️ Il progetto è chiaramente in fase di sviluppo: `admin.php` contiene codice copiato da `index.php` non ancora adattato, e la struttura SQL è parziale (solo la tabella `guides` è inclusa nel dump).

---

## 2. File del Progetto

| File | Tipo | Descrizione |
|---|---|---|
| `system/config.php` | PHP | Costanti di configurazione database (host, db, user, password, charset) |
| `system/bootstrap.php` | PHP | Entry point: include config, DBM, classi, funzioni helper |
| `system/dbm.class.php` | PHP | Classe `DBM` — gestione connessione PDO al database |
| `class/guide.class.php` | PHP | Classe `Guide` — modello OOP per le audioguide |
| `class/utente.class.php` | PHP | Classe `Utente` — modello OOP per gli utenti |
| `ajax/api_controller.php` | PHP | Controller AJAX — riceve le richieste JSON e chiama le funzioni |
| `ajax/api_functions.php` | PHP | Funzioni API per le guide (getGuides, getGuide, saveGuide, deleteGuide) |
| `index.php` | PHP + HTML + JS | Pagina gestione utenti — tabella + modali AJAX |
| `classi.php` | PHP + HTML + JS | Pagina gestione classi — tabella + modali AJAX |
| `admin.php` | PHP + HTML + JS | Pagina gestione guide — tabella + modali AJAX (incompleta) |
| `template/html_helpers.php` | PHP | Funzioni helper HTML: `menu()` e `loader()` |
| `template/functions.js` | JS | Funzioni JS globali: `loaderShow()` e `loaderHide()` |
| `template/style.css` | CSS | Foglio di stile condiviso |
| `audioguide.sql` | SQL | Dump parziale del database (solo tabella `guides`) |

**Totale file:** 14 (escluse cartelle)
**Peso archivio:** ~72 KB

---

## 3. Architettura del Sistema

Il progetto segue un'architettura a **tre livelli** chiaramente separati:

```
[Browser / Frontend]
    │  Fetch API (JSON POST)
    ▼
[ajax/api_controller.php]  ← unico endpoint HTTP
    │  call_user_func_array($function, $data)
    ▼
[ajax/api_functions.php]   ← funzioni PHP per ogni azione
    │  Guide::get() / Guide::create() / etc.
    ▼
[class/*.class.php]        ← classi OOP che parlano con il DB
    │  PDO prepared statements
    ▼
[MySQL Database]
```

Tutti i dati viaggiano in **JSON**: il frontend invia un oggetto con `action` e `data`, il backend risponde con un oggetto o array JSON.

---

## 4. Struttura delle Classi OOP

### 4.1 Classe `DBM` (`system/dbm.class.php`)

Classe di utilità statica per la gestione della connessione al database. Non viene istanziata: si usa sempre `DBM::getDB()` per ottenere un oggetto PDO pronto all'uso.

**Configurazione PDO:**

| Opzione | Valore | Effetto |
|---|---|---|
| `ATTR_ERRMODE` | `ERRMODE_EXCEPTION` | Gli errori SQL lanciano eccezioni PHP invece di fallire silenziosamente |
| `ATTR_DEFAULT_FETCH_MODE` | `FETCH_ASSOC` | I risultati delle query sono array associativi (non numerici) |
| `ATTR_EMULATE_PREPARES` | `false` | Usa i prepared statements reali del driver MySQL (più sicuri) |

**Metodi:**

| Metodo | Tipo | Descrizione |
|---|---|---|
| `getDSN()` | Static | Costruisce la stringa DSN per la connessione PDO |
| `getDB()` | Static | Crea e restituisce un oggetto PDO; in caso di errore stampa il messaggio e termina |

### 4.2 Classe `Guide` (`class/guide.class.php`)

Modello OOP per la gestione delle audioguide. Ogni istanza rappresenta una riga nella tabella `guides` del database.

**Attributi:**

| Attributo | Visibilità | Tipo | Descrizione |
|---|---|---|---|
| `$ID_guide` | `public` | int | Chiave primaria |
| `$name` | `public` | string | Nome della guida |
| `$description` | `public` | string\|null | Descrizione testuale |
| `$audio` | `public` | string\|null | Path/URL del file audio |
| `$image` | `public` | string\|null | Path/URL dell'immagine |

**Metodi:**

| Metodo | Tipo | Descrizione |
|---|---|---|
| `__construct($ID_guide)` | Costruttore | Carica i dati dal DB con `SELECT * FROM guides WHERE ID_guide = ?` |
| `get($ID_guide)` | Static | Factory method — restituisce una nuova istanza |
| `check($ID_guide)` | Static | Verifica se esiste una guida con quell'ID nel DB |
| `create($name)` | Static | Inserisce una nuova guida nel DB e restituisce l'oggetto creato |
| `save()` | Istanza | Aggiorna tutti i campi della guida nel DB tramite UPDATE |
| `delete()` | Istanza | Elimina la guida dal DB tramite DELETE |
| `getAll()` | Static | Restituisce array di tutti gli oggetti `Guide` |
| `getID/getName/getDescription/getAudio/getImage()` | Getter | Lettura attributi |
| `setName/setDescription/setAudio/setImage()` | Setter | Scrittura attributi |

### 4.3 Classe `Utente` (`class/utente.class.php`)

Modello OOP per gli utenti. Più complessa di `Guide`: carica anche la classe di appartenenza e calcola la media delle valutazioni al momento della costruzione.

**Attributi:**

| Attributo | Visibilità | Tipo | Descrizione |
|---|---|---|---|
| `$ID_utente` | `public` | int | Chiave primaria |
| `$name` | `public` | string | Nome |
| `$surname` | `public` | string | Cognome |
| `$email` | `public` | string\|null | Email |
| `$phone` | `public` | string\|null | Telefono |
| `$evaluations` | `public` | array | Lista valutazioni (vuota di default) |
| `$ID_classe` | `public` | int\|null | FK verso la tabella classi |
| `$classe` | `public` | Classe\|null | Oggetto `Classe` associato |
| `$average_evaluations` | `public` | float\|null | Media valutazioni (calcolata nel costruttore) |

**Metodi principali:**

| Metodo | Tipo | Descrizione |
|---|---|---|
| `__construct($ID_utente)` | Costruttore | Carica dati, classe associata e media valutazioni |
| `calcAverageEvaluations()` | Istanza | Esegue `SELECT AVG(value)` sulla tabella `evaluations` per quell'utente |
| `getClasse()` | Istanza | Restituisce `Classe::get($ID_classe)` se presente, altrimenti `null` |
| `create($name, $surname)` | Static | Inserisce nuovo utente nel DB |
| `save()` | Istanza | UPDATE su tutti i campi |
| `delete()` | Istanza | DELETE a cascata: prima elimina le `evaluations`, poi l'utente |
| `getAll()` | Static | Restituisce array di tutti gli oggetti `Utente` |

> ℹ️ **Nota sul delete a cascata:** La classe gestisce manualmente la cancellazione delle valutazioni associate prima di eliminare l'utente. Questo è necessario perché non c'è un vincolo `ON DELETE CASCADE` definito nel SQL fornito.

---

## 5. Flusso di Esecuzione — Passo per Passo

### Passo 1 — Il browser carica la pagina (es. `index.php`)

La prima riga PHP esegue:

```php
require_once("system/bootstrap.php");
```

`bootstrap.php` funziona come un **punto di avvio centralizzato**: include in sequenza `config.php` (le costanti del DB), `dbm.class.php` (la classe di connessione), `guide.class.php` (il modello Guide), `api_functions.php` (le funzioni AJAX) e `html_helpers.php` (le funzioni per il menu e il loader). Dopo questo `require_once`, tutto ciò che serve è disponibile.

Vengono poi caricate le dipendenze frontend nel `<head>`:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="stylesheet" href="template/style.css">
<script src="template/functions.js"></script>
```

Font Awesome è usato per le icone (cestino, matita, stella, ecc.). `functions.js` espone `loaderShow()` e `loaderHide()` globalmente.

### Passo 2 — Il DOM è pronto: primo caricamento dati

Appena la pagina è pronta, JavaScript esegue automaticamente:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    getUtenti(); // o getClassi(), o getGuides() a seconda della pagina
});
```

Questo avvia la prima chiamata AJAX per popolare la tabella.

### Passo 3 — La chiamata AJAX al controller

Ogni operazione (caricare lista, salvare, eliminare) segue sempre lo stesso schema. Viene costruito un oggetto JSON con due campi:

```javascript
let data = {
    action: "usersGet",   // nome della funzione PHP da chiamare
    data: {}              // parametri da passare alla funzione
};

fetch('ajax/api_controller.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

Il frontend non sa cosa fa il server — sa solo che deve mandare `action` + `data` e aspettarsi un JSON in risposta.

### Passo 4 — `api_controller.php` riceve e smista la richiesta

Il controller legge il corpo della richiesta HTTP (che è JSON puro, non un form):

```php
$get = json_decode(file_get_contents("php://input"), true);

$function = isset($get['action']) ? $get['action'] : null;
$data     = isset($get['data'])   ? $get['data']   : null;
```

Poi chiama dinamicamente la funzione PHP il cui nome corrisponde al valore di `action`:

```php
$response = call_user_func_array($function, array($data));
echo json_encode($response);
```

`call_user_func_array("usersGet", [$data])` equivale a chiamare `usersGet($data)`. La risposta viene sempre serializzata in JSON e inviata al browser.

> ⚠️ **Rischio sicurezza:** `call_user_func_array($function, ...)` con `$function` proveniente dall'input utente consente in teoria di chiamare qualsiasi funzione PHP disponibile. Andrebbe validato con una whitelist delle azioni permesse.

### Passo 5 — La funzione API esegue la logica

In `api_functions.php` si trovano le funzioni per le guide. Per esempio `getGuides()`:

```php
function getGuides($get) {
    $guides = Guide::getAll();
    return $guides;   // array di oggetti Guide, serializzato in JSON
}
```

`saveGuide()` usa il pattern **upsert** (create o update): controlla se l'ID esiste già con `Guide::check($ID_guide)`, e di conseguenza chiama `Guide::get()` (per modificare) oppure `Guide::create()` (per creare). Poi aggiorna i campi tramite i setter e chiama `save()`:

```php
if(Guide::check($ID_guide)) {
    $guide = Guide::get($ID_guide);
    $guide->setName($name);
} else {
    $guide = Guide::create($name);
}

$guide->setDescription($description);
$guide->setAudio($audio);
$guide->setImage($image);
$guide->save();
```

### Passo 6 — La classe OOP esegue la query

`Guide::getAll()` interroga il database e costruisce gli oggetti:

```php
static public function getAll() {
    $pdo = DBM::getDB();
    $stmt = $pdo->prepare("SELECT * FROM guides");
    $stmt->execute();

    $guides = [];
    while ($row = $stmt->fetch()) {
        $guides[] = self::get($row["ID_guide"]);
        // self::get() chiama __construct(), che fa un altro SELECT per ID
    }
    return $guides;
}
```

> ℹ️ **Nota tecnica (N+1 query):** `getAll()` esegue prima `SELECT *`, poi per ogni riga chiama `self::get()` che fa un ulteriore `SELECT WHERE ID = ?`. Con 100 guide significa 101 query invece di 1. Una soluzione più efficiente sarebbe mappare i dati direttamente nel ciclo `while` senza il secondo `SELECT`.

### Passo 7 — Il JSON torna al browser e aggiorna la tabella

La risposta JSON arriva al secondo `.then()` della fetch:

```javascript
.then(function(result) {
    let html_table = "";
    result.forEach(function(guide) {
        html_table += `
            <tr>
                <td>${guide.ID_guide}</td>
                <td>${guide.name}</td>
                <td>${guide.description}</td>
                ...
            </tr>
        `;
    });
    table.querySelector("tbody").innerHTML = html_table;
    loaderHide();
});
```

Il template literal JS costruisce le righe HTML dinamicamente e le inserisce nel `<tbody>` della tabella, sostituendo il contenuto precedente. Il loader viene nascosto al termine.

### Passo 8 — L'utente apre un modal (creazione o modifica)

Per **creare** un nuovo elemento: il pulsante "Aggiungi" chiama `showGuideModal()` che imposta `display: block` sul div modale. Il modal è vuoto, senza ID salvato.

Per **modificare** un elemento esistente: si clicca l'icona matita, che chiama `getGuide(ID)`. Questa fa una nuova chiamata AJAX per caricare i dati aggiornati dal server, li inserisce nei campi del form, poi apre il modal. L'ID viene salvato come attributo HTML sul div del modal:

```javascript
document.getElementById("guide-modal").setAttribute("ID_guide", result.ID_guide);
```

Questo trucco permette a `saveGuide()` di sapere se si sta creando o modificando: se l'attributo `ID_guide` esiste, è una modifica; altrimenti è una creazione.

### Passo 9 — Chiusura del modal

`hideGuideModal()` nasconde il div, rimuove l'attributo ID e svuota i campi del form per evitare che i dati precedenti rimangano visibili alla prossima apertura:

```javascript
function hideGuideModal() {
    document.getElementById("guide-modal").style.display = "none";
    document.getElementById("guide-modal").removeAttribute("ID_guide");
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("audio").value = "";
    document.getElementById("image").value = "";
}
```

I modal si chiudono anche cliccando fuori dal contenuto, grazie al listener sul `DOMContentLoaded` che controlla se `e.target === modal`.

---

## 6. Database

### Schema tabella `guides` (da `audioguide.sql`)

```sql
CREATE TABLE guides (
    ID_guide  INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name      VARCHAR(64) NOT NULL,
    description TEXT DEFAULT NULL,
    audio     VARCHAR(128) DEFAULT NULL,
    image     VARCHAR(128) DEFAULT NULL,
    PRIMARY KEY (ID_guide)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

> ⚠️ Il dump SQL include **solo** la tabella `guides`. Le tabelle `utenti`, `classi` ed `evaluations` (usate nel codice) non sono presenti nel file SQL fornito. Il progetto non è quindi ripristinabile completamente dal solo file `.sql`.

---

## 7. Problemi Rilevati

| # | File | Problema | Severità | Note |
|---|---|---|---|---|
| 1 | `api_controller.php` | `call_user_func_array` con input utente non validato | 🔴 Alta | Consente di chiamare qualsiasi funzione PHP disponibile — serve una whitelist |
| 2 | `admin.php` | Codice copiato da `index.php` non adattato alle guide | 🔴 Alta | Funzioni come `saveUtente()`, `deleteUtente()`, `getUtente()` sono rimaste invariate — il salvataggio guide non funziona |
| 3 | `admin.php` | `menu()` commentato — la navigazione non appare | 🟠 Media | `<?php //menu(); ?>` — probabilmente dimenticato durante lo sviluppo |
| 4 | `admin.php` | Il pulsante "Salva" chiama `saveUtente()` invece di `saveGuide()` | 🔴 Alta | Bug diretto: il salvataggio delle guide invierà dati utente al server |
| 5 | `class/guide.class.php` | `getAll()` usa N+1 query (1 SELECT + 1 per ogni guida) | 🟠 Media | Inefficiente con molte guide — meglio mappare i dati direttamente nel `while` |
| 6 | `class/utente.class.php` | Stesso problema N+1 in `getAll()` | 🟠 Media | Stessa causa, stesso fix |
| 7 | `index.php` / `classi.php` | `response.json()` non è await-ato correttamente | 🟠 Media | Il `console.log(json)` logga una Promise, non i dati — funziona ma è confusionario |
| 8 | `audioguide.sql` | Mancano le tabelle `utenti`, `classi`, `evaluations` | 🟠 Media | Il progetto non è riproducibile completamente dal solo file SQL |
| 9 | Tutte le classi | Attributi `public` invece di `private` | 🟡 Bassa | I dati sono accessibili direttamente senza passare dai setter |
| 10 | `system/config.php` | Credenziali DB in chiaro nel codice sorgente | 🟡 Bassa | In produzione vanno in variabili d'ambiente o file `.env` fuori dalla webroot |
| 11 | `admin.php` | Input `type="file"` per audio e immagine senza gestione upload lato server | 🔵 Info | Il file viene selezionato ma non c'è logica PHP per salvarlo sul disco |

---

## 8. Funzioni API disponibili

### Guide (`ajax/api_functions.php`)

| Funzione PHP | Action JS | Operazione |
|---|---|---|
| `getGuides($get)` | `"getGuides"` | Restituisce tutte le guide |
| `getGuide($get)` | `"getGuide"` | Restituisce una guida per ID |
| `saveGuide($get)` | `"saveGuide"` | Crea o aggiorna una guida (upsert) |
| `deleteGuide($get)` | `"deleteGuide"` | Elimina una guida per ID |

### Utenti e Classi
Le funzioni per utenti e classi (`usersGet`, `userSave`, `userDelete`, `classesGet`, `classSave`, `classDelete`, `evaluationsGet`, `evaluationSave`, `evaluationDelete`) sono **richiamate nel frontend** ma **non presenti in `api_functions.php`** nel codice fornito. Probabilmente si trovano in file non inclusi nel pacchetto, oppure sono ancora da scrivere.

---

## 9. Suggerimenti di Miglioramento

- **Whitelist delle action in `api_controller.php`:** definire un array delle azioni permesse e verificare che `$function` sia tra quelle prima di chiamarla
- **Completare `admin.php`:** sostituire tutte le funzioni JS copiate da `index.php` con le versioni specifiche per le guide (`saveGuide`, `deleteGuide`, `getGuide`, `hideGuideModal`)
- **Implementare l'upload dei file** audio e immagine sul server (con validazione del tipo MIME e dimensione)
- **Correggere il problema N+1** in `getAll()`: mappare i dati direttamente nel `while` invece di fare una seconda query per ogni riga
- **Completare il dump SQL:** aggiungere le tabelle mancanti (`utenti`, `classi`, `evaluations`) al file `.sql`
- **Spostare le credenziali** in un file `.env` o in variabili d'ambiente del server

---

## 10. Stato Avanzamento

| Area | Completamento |
|---|---|
| Struttura sistema (bootstrap, config, DBM) | ✅ Completata |
| Classe `Guide` (CRUD completo) | ✅ Completata |
| Classe `Utente` (CRUD + valutazioni) | ✅ Completata |
| API Controller (routing AJAX) | ✅ Funzionante (con rischi sicurezza) |
| Funzioni API per guide | ✅ Completate |
| Funzioni API per utenti/classi | ❓ Non nel pacchetto fornito |
| Pagina `index.php` (utenti) | 🟡 Funzionante lato UI, API esterne al pacchetto |
| Pagina `classi.php` (classi) | 🟡 Funzionante lato UI, API esterne al pacchetto |
| Pagina `admin.php` (guide) | 🔴 Incompleta — codice non adattato |
| Upload file audio/immagine | ❌ Non implementato |
| Database SQL completo | 🟡 Parziale (solo tabella `guides`) |
| Sicurezza input | ❌ Da implementare |

---

*Report generato automaticamente — Report Manager v1.0*
