# Le pagine Web - html form.pdf

## PAGE 1

Fondamenti di Html,

Css e Javascript

---

## PAGE 2

I form: cosa sono e a cosa servono

I form HTML sono moduli interattivi che permettono agli utenti di inserire e inviare dati a un sito web. Sono

fondamentali per funzionalità come registrazioni, login, ricerche e invii di messaggi.

I form HTML sono utilizzati per:

● Registrazioni e login

● Ricerche interne

● Sondaggi e questionari

● Contatti e richieste

● Acquisti online

---

## PAGE 3

I form: come è strutturato il tag

Il tag <form> include due attributi chiave:

● action: specifica l'URL del server a cui inviare i dati

● method: indica il metodo HTTP da usare (GET o POST)

Il tag <input> include, tra gli altri, l’attributo name che

rappresenta la chiave che il server userà per

recuperare il valore inviato.

<form action="https://esempio.com/invia" method="POST">

<label for="username"></label>

<input type="text" name="username" id=”username”>

<input type="submit" value="Invia">

</form>

---

## PAGE 4

I form: i valori del parametro method

Il parametro method può assumere diversi valori:

● get: con questo metodo i dati del form vengono accodati all'URL sotto forma di "query string" (es.

pagina.php?nome=Mario&email=mario@esempio.it). Questo metodo non garantisce nessuna

sicurezza, quindi è sconsigliato per trasmettere password o informazioni personali, e ha dei limiti di

lunghezza

● post: con questo metodo i dati del form vengono inviati nel corpo (body) della richiesta HTTP, non

nell'URL, quindi i dati spediti non sono visibili e se il protocollo è https, i dati saranno crittografati.

Questo sistema quindi è sicuro e non ha limiti di lunghezza

---

## PAGE 5

I form: label, ﬁeldset e legend

La label: serve a dare un’etichetta all’elemento e a fornire un collegamento logico con gli elementi. Infatti il suo elemento for va

collegato all’id dell’elemento

Il fieldset e le sue funzioni:

● Raggruppa logicamente campi di un form che hanno uno scopo comune

● Migliora l'accessibilità per screen reader e utenti con disabilità

● Migliora l'usabilità organizzando visivamente i campi correlati

L’elemento legend fornisce una didascalia per il fieldset:

<form>

<fieldset>

<legend>Informazioni personali</legend>

<label for="nome">Nome:</label>

<input type="text" id="nome" name="nome">

<label for="email">Email:</label>

<input type="email" id="email" name="email">

</fieldset>

</form>

---

## PAGE 6

I form: esercizio

Esercizio 1:

Realizzare un semplice form per richiedere: Username e Password

Esercizio 2:

Realizzare un semplice form per richiedere: Cognome, Nome e Codice Fiscale

---

## PAGE 7

I form: l’elemento text

Il tag <input> può assumere diversi tipi, i più comuni sono:

● text: breve campo di testo

● password: nasconde i caratteri digitati con punti o asterischi.

● email: verifica automaticamente se il formato assomiglia a un indirizzo email valido

● url: verifica automaticamente se il formato assomiglia a un URL

● tel: non valida il formato, ma ottimizza la tastiera sui dispositivi mobili per la composizione numerica

● checkbox: elemento di selezione di più opzioni contemporaneamente

● radio: elemento di selezione di più opzioni, dove una esclude l’altra

● option

● textarea

● submit / reset / button

---

## PAGE 8

I form: label e input type text

Il tag input text è uno dei campi più comuni nei moduli HTML, utilizzato per raccogliere un breve testo da parte dell'utente.

Alcuni dei suoi parametri possono essere:

● il type del tag input è text

● l’id serve a collegare il campo di testo alla label, che avrà l’attributo “for” uguale all’”id”; serve inoltre come identificativo

unico per l’interazione con il CSS e il Javascript

● name: è la chiave che identifica il dato quando viene trasmesso al server

● size: è la larghezza visibile del campo di testo

● required: obbliga l’utente a compilare il campo

● disabled: disabilita il campo

● maxlength e minlength: sono la lunghezza massima e minima del testo da inserire

● value: è il valore precompilato che appare al caricamento della pagina

● placeholder: è un segnaposto per indicare un esempio di compilazione

● autocomplete: aiuta l’utente a compilare i dati sulla base di precedenti compilazioni; può essere “on” oppure “off”

<label for="nome">Nome:</label>

<input type="text" id="nome" name="nome" size="50" maxlength="50" required placeholder="Inserisci il nome

- es. Marco">

---

## PAGE 9

I form: l’input type checkbox

Il checkbox (o "casella di spunta" o "casella di controllo") è un elemento grafico interattivo che permette all'utente di selezionare zero,  una o più opzioni da

un elenco predefinito, oppure di accettare/rifiutare una singola condizione. Le opzioni possono essere selezionate tutte insieme

Ricorda: il type del tag input è checkbox

<fieldset><legend>Sport praticato</legend>

<label>

<input type="checkbox" name="sport" value="calcio" />

Calcio

</label><br />

<label>

<input type="checkbox" name="sport" value="basket" />

Basket

</label><br />

<label>

<input type="checkbox" name="sport" value="altro" />

Altro

</label>

</fieldset>

---

## PAGE 10

I form: l’input type radio

Il radio button (o "pulsante di opzione") è un elemento di input HTML che permette all'utente di selezionare una sola opzione all'interno di un gruppo di

scelte che si escludono a vicenda

Ricorda:

● il type del tag input è radio

● per fare in modo che si escludano a vicenda il parametro “name” deve essere uguale per tutti

<fieldset><legend>Nazionalità</legend>

<label>

<input type="radio" name="nazionalità" value="italiana" required />

Italiana

</label><br />

<label>

<input type="radio" name="nazionalità" value="ue" />

UE

</label><br />

<label>

<input type="radio" name="nazionalità" value="extra ue" />

Extra Ue

</label><br />

</fieldset>

---

## PAGE 11

I form: i tag select e option

I tag <select> e <option> servono per creare menù a tendina o una lista di selezione. Infatti select crea il box e al suo interno viene collocato il tab option che

rappresenta una delle voci tra cui l'utente può scegliere.

Ricorda:

● il tag select serve a creare il contenitore per i tag option

● in ogni tag option viene inserita una voce di menù

● l’attributo “selected” significa che la voce è quella di default

● l’attributo “size” permette di stabilire quanti valori mostrare

<label for="gustoGelato">Scegli il tuo gusto di gelato preferito:</label>

<select id="gustoGelato" name="gelato_scelto">

<option value="">-- Seleziona un gusto --</option>

<option value="cioccolato">Cioccolato</option>

<option value="pistacchio">Pistacchio</option>

<option value="limone" selected>Limone</option>

</select>

</label>

---

## PAGE 12

I form: il tag textarea

Il tag <textarea>  è un elemento che crea un campo di input a più righe per il testo. A differenza del tag

<input type="text">, che accetta solo una singola riga di testo, il <textarea> è specificamente progettato per

raccogliere contenuti più lunghi come messaggi, commenti, descrizioni dettagliate o feedback estesi.

Ricorda rows = “numero righe”: permette di inserire il numero di righe che dovrà contenere la casella

<label for="commenti">Commenti *<br />

<!-- <textarea> serve per testi lunghi -->

<!-- required lo rende obbligatorio -->

<textarea id="commenti" name="commenti" required rows="6"

placeholder="Scrivi qui la tua segnalazione o commento..."></textarea>

</label>

---

## PAGE 13

I form: l’input type: submit / reset / button

L’input type può avere tre ulteriori type:

● submit: permette di inviare il modulo compilato

● reset: permette di resettare il modulo cancellando i dati

● button: non ha nessuna azione di default, ma può essere collegato con il javascript per eseguire delle

azioni previste nel codice

Esempio di submit e reset:

<input type="submit" value="Invia segnalazione">

<input type="reset" value="Pulisci">

Esempio di button:

<input type="button"      value="Calcola Totale"      onclick="calcolaSomma()">

---

## PAGE 14

Il tag button

Il tag button è più moderno e più potente del <input type="button"> i vantaggi sono:

● può essere utilizzato come pulsante di submit, reset o button generico di attivazione javascript:

<button type="submit"> Invia il modulo </button>

<button type="reset">  Annulla e Ricomincia </button>

<button type="button" onclick="mostraAvviso()">  Clicca per un Pop-up </button>

● può essere utilizzato per utilizzare immagini o icone come pulsanti:

<button type="submit">

<img src="icona-invio.png" alt="Icona freccia">

**Registrati Ora**

</button>

● è considerato più robusto in termini di accessibilità

● poichè il testo del pulsante è il contenuto del tat e non è un attributo, è considerato più chiaro e leggibile

---

## PAGE 15

I form: esercizio

Esercizio 2:

Realizzare un form completo per richiedere:

● Cognome e Nome (text box)

● Indirizzo, città, provincia e cap (text box)

● Nazionalità (radio button)

● Codice Fiscale (text box)

● Sport praticato (checkbox)

● Tipo di documento (menù a tendina)

● Numero documento (text box)

● Commenti (Text Area)

---

