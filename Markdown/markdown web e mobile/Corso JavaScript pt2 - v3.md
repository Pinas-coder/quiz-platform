# Corso JavaScript pt2 - v3.pdf

## PAGE 1

Corso javascript

pt.2

---

## PAGE 2

Le funzioni - Pt.1

Funzione: In JavaScript, una funzione è fondamentalmente un blocco di codice progettato per eseguire

un compito specifico. Immaginala come una "ricetta" o un piccolo sotto-programma che puoi riutilizzare

ogni volta che ne hai bisogno, invece di riscrivere le stesse istruzioni più volte.

Esempio: preparare la pasta: prendere la pentola, mettere l’acqua, far bollire l’acqua, buttare la pasta

nell’acqua

La struttura di base

Una funzione viene definita (dichiarata) e poi richiamata (eseguita)

● Dichiarazione: Usi la parola chiave function, seguita da un nome, delle parentesi tonde () per i

parametri e delle parentesi graffe {} che contengono il codice

● Invocazione: Per farla partire, scrivi il suo nome seguito dalle tonde.

function saluta() {

console.log("Ciao! Benvenuto nel mondo JS.");

}

saluta(); // Esegue la funzione

---

## PAGE 3

Le funzioni - Pt.2

Input e Output: Parametri e Return

Le funzioni diventano davvero potenti quando scambiano dati:

● Parametri (Input): Sono variabili temporanee che la funzione riceve per lavorare.

● Return (Output): È il risultato che la funzione "sforna" e restituisce al resto del programma. Una

volta incontrato return, la funzione si ferma.

function somma(a, b) {

return a + b; // Restituisce la somma

}

let risultato = somma(5, 10); // risultato sarà 15

---

## PAGE 4

Le funzioni - Pt.3

Functional Programming

In JavaScript, le funzioni sono trattate come "oggetti di prima classe". Significa che possono essere

passate come argomenti ad altre funzioni o salvarle dentro delle variabili.

const faiSomma = function somma(a, b) {

return a + b; // Restituisce la somma nella costante

}

Arrow Function

Con una notazione più snella si può scrivere:

const faiSomma = (a, b) =>{ a + b}

---

## PAGE 5

Esercizi

Esercizio 1:

Creare una funzione chiamata suonaSveglia. Quando viene richiamata, deve stampare in console il

messaggio: "Drin drin! È ora di alzarsi!".

Esercizio 2:

Scrivi una funzione chiamata salutaOspite. Deve accettare un parametro chiamato nome. La

funzione deve stampare in console: "Benvenuto nel nostro sito, [nome]!".

Esercizio 3:

Scrivi una funzione chiamata areaTriangolo che accetta due parametri: base e altezza. La funzione

deve restituire (usando return) il valore dell'area calcolato con la consueta formula:

---

## PAGE 6

Cos'è il DOM

È  la  rappresentazione  strutturata  di  una  pagina

web, organizzata come un albero di nodi.

Ogni elemento HTML (tag, testo, attributo,

commento) diventa un nodo che può essere letto

e manipolato con JavaScript.

Il CSS utilizza i selettori che fanno riferimento alla

struttura del DOM.

---

## PAGE 7

Il DOM

Nel DOM, tutti gli elementi HTML sono definiti come oggetti.

Come tutti gli oggetti, gli elementi hanno metodi e proprietà:

● I metodi HTML DOM sono azioni che si possono eseguire (sugli elementi HTML).

● Le proprietà HTML DOM sono valori (degli elementi HTML) che si possono impostare o

modificare.

---

## PAGE 8

Interagire con il  DOM - metodo tradizionale

Recuperare o inserire valori nell’html

Metodo Descrizione

document.getElementById(id) Trova l’elemento per id

document.getElementsByTagName(nomeTag) Trova l’elemento per tag name

document.getElementsByClassName(nomeClasse) Trova l’elemento per class name

---

## PAGE 9

Interagire con il  DOM - metodo CSS

Recuperare o inserire valori nell’html

Metodo Descrizione

document.querySelector('#id') Trova l’elemento per id

document.querySelector('nomeTag') Trova l’elemento per tag name

document.querySelector('.nomeClasse') Trova l’elemento per class name

querySelectorAll('nomeTag) Trova tutti i tag (array)

window.getComputedStyle(nome variabile o

costante).[stile]

Legge lo stile applicato a un

elemento

---

## PAGE 10

Gli eventi - Pt.1 - generale

Un evento è qualcosa che succede nel browser: un click, un tasto premuto, una pagina caricata, un

form inviato, il mouse che si muove, ecc.

Quando un evento accade, il browser crea un oggetto Event e lo passa alla tua funzione. Quindi event è

l’oggetto che rappresenta l’evento che è appena accaduto. L’evento poi viene passato alla funzione.

Esempi di eventi comuni (per addEventListener):

● click / dblclick → l’utente clicca un elemento una volta o due volte

● mouseenter / mouseleave (mouseover / mouseout) → il mouse entra o esce dall’area

dell’elemento, la prima coppia non ha bubbling, la seconda ha il bubbling quindi si propaga

● keydown / keyup → un tasto viene premuto o rilasciato

● submit → un form viene inviato

● change → cambia il valore di un input (es. checkbox o select)

● input → cambia il valore di un campo di testo

● load / DOMContentLoaded → la pagina o il DOM ha finito di caricarsi

● resize → la finestra del browser viene ridimensionata

● scroll → l’utente scorre la pagina

Per gli eventi Event Handler aggiungere on davanti all’evento, es. click → onclick

---

## PAGE 11

Gli eventi - Pt.2 - panoramica

Tre modi per utilizzare gli eventi in JavaScript:

1. Inline Event Handler

Esempio: <input onfocus="saluta()">

○ Inserisce il codice JavaScript direttamente nell’attributo HTML.

○ Fortemente sconsigliato: mescola struttura (HTML) e comportamento (JS), rende il codice difficile

da mantenere.

2. Event Handler tramite proprietà (Event Handler “classico”):

Esempio: elemento.onclick = function () { ... };

○ Si assegna una funzione alla proprietà dell’evento (es. onclick, onchange, onmouseover).

○ Limite importante: puoi assegnare solo un gestore per tipo di evento; una nuova assegnazione

sovrascrive la precedente.

3. addEventListener (metodo moderno e consigliato):

Esempio: costante.addEventListener('evento', () => { ... });

○ Accetta due parametri obbligatori:

i. il tipo di evento (stringa)

ii. la funzione da eseguire (anonima o nominata)

---

## PAGE 12

Gli eventi - Pt.3 - Inline Event Handler

Inline Event Handler

<input type="text" name="cognome" id="cognome" onfocus="focusCognome() // inline richiama la

funzione focusCognome">

---

## PAGE 13

Gli eventi - Pt.4 - Event Handler Standard

Event Handler Standard

myNome.onfocus = function(){ // event handler standard

console.log("focus su nome");

}

oppure:

myNome.ondblclick = () => { // event handler standard con arrow function

console.log("hai fatto doppio click su nome");

}

dove: myNome è l’ID di un elemento del form

---

## PAGE 14

Gli eventi - Pt.5 - addEventListener

addEventListener

myCitta.addEventListener('focus',function(){ // addEventListener con function anonima

console.log("focus su città");

})

oppure:

myCitta.addEventListener('focus',()=>{ // addEventListener con arrow function anonima

console.log("focus su città");

})

dove: myCitta è l’ID di un elemento del form

È il metodo preferito perché:

● permette più listener sullo stesso evento

● separa HTML e JavaScript

● offre opzioni avanzate (capture, once, passive)

---

## PAGE 15

Gli eventi - Pt.6 - prevent.Default

prevent.Default

È un metodo che appartiene all’oggetto Event e che puoi chiamare dentro un gestore di eventi per

bloccarne il comportamento predefinito.

Cosa significa “comportamento predefinito”?

Molti elementi HTML hanno un’azione automatica quando scatta un evento:

● Un link <a> naviga verso un’altra pagina quando cliccato

● Un form <form> invia i dati e ricarica la pagina

● Un tasto destro apre il menu contestuale

● Un tasto in un input può attivare funzioni del browser

preventDefault() dice al browser:

“Non fare quello che faresti normalmente, ci penso io a gestire l’evento”.

---

## PAGE 16

Gli eventi - Pt.7 - prevent.Default

Bloccare l’invio di un form:

form.addEventListener("submit", function(event) {

event.preventDefault(); // blocca l’invio del form

console.log("Form bloccato, gestisco io i dati");

});

Bloccare il comportamento di un link:

document.querySelector("a").addEventListener("click", function(event) {

event.preventDefault();

console.log("Il link non naviga, faccio altro");

});

---

## PAGE 17

Gli attributi di tipo -data

Gli attributi data-* sono attributi HTML personalizzati che iniziano con data- e servono per

memorizzare informazioni private dell’applicazione.

Javascript può accedere a questi elementi in due modi:

Esempio:

<div id="car" data-index-number="123" data-type="electric"></div>

<script>

const car = document.getElementById("car");

console.log(car.dataset.indexNumber); // "123"

console.log(car.dataset.type);        // "electric"

</script>

---

## PAGE 18

Richieste Asincrone: che cos'è fetch()?

In breve

`fetch()` è una funzione JavaScript

che invia una richiesta HTTP a un

server, per esempio a una pagina

PHP o a un'API.

Cosa restituisce

Non restituisce subito i dati:

restituisce una Promise, cioè un

risultato che arriverà più avanti.

esegue JavaScript → manda la richiesta → risponde con dati

---

## PAGE 19

Richieste Asincrone: a cosa serve then()?

Arriva la risposta

`then()` esegue del codice quando la Promise è stata risolta.

Leggo il contenuto

Con un primo `then()` ottengo l'oggetto `response` del server.

Converto i dati

Con un secondo `then()` posso leggere i dati, per esempio con `response.json()`.

---

## PAGE 20

Richieste Asincrone: la struttura più comune

fetch("server.php")

.then(response => response.json())

.then(data => {

console.log(data);

})

.catch(error => {

console.error(error);

});

Invia la richiesta al server.

Gestisce la risposta quando

arriva. Intercetta eventuali errori.

---

## PAGE 21

Richieste Asincrone - come leggere il codice riga per riga

fetch("server.php")

.then(response => response.json())

.then(data => {

document.getElementById("output").textContent =

data.messaggio;

});

1. `fetch("server.php")` contatta il server.

2. Il primo `then()` riceve la risposta HTTP.

3. `response.json()` trasforma il JSON in

oggetto JavaScript.

4. Il secondo `then()` usa i dati ricevuti.

---

## PAGE 22

Richieste Asincrone -

Esempio completo: leggere dati da PHP con get

fetch("server.php")

.then(response => response.json())

.then(data => {

risultato.textContent =

data.messaggio;

});

header('Content-Type:

application/json');

echo json_encode([

"messaggio" => "Ciao dal server"

]);

Client HTML / JavaScript Server PHP

Risultato: il browser chiama `server.php`, riceve un JSON e mostra il messaggio nella pagina.

---

## PAGE 23

Richieste Asincrone -

Esempio completo: leggere dati da PHP con post

fetch("server.php", {

method: "POST",

headers: {

"Content-Type": "application/json"

},

body: JSON.stringify({ nome: "Luca"

})

})

.then(response => response.json())

.then(data => console.log(data));

$input = json_decode(

file_get_contents("php://input"), true

);

$nome = $input["nome"] ?? "utente";

echo json_encode([

"risposta" => "Ciao " . $nome

]);

Client HTML / JavaScript Server PHP

Risultato: il browser chiama `server.php`, riceve un JSON e mostra il messaggio nella pagina.

---

## PAGE 24

Richieste Asincrone - La sequenza da ricordare

fetch("server.php")

.then(response => response.json())

.then(data => {

// uso i dati ricevuti

})

.catch(error => {

// gestisco l'errore

});

1

Chiamo fetch()

2

Aspetto con

then()

3

Leggo i dati

4

Li uso nella

pagina

---

## PAGE 25

Richieste Asincrone - Cose da non confondere

Cose da non confondere

Corretto

• `fetch()` avvia la richiesta.

• `then()` aspetta il risultato.

• `response.json()` legge il contenuto

JSON.

• `catch()` gestisce gli errori.

Da evitare

• Pensare che `fetch()` dia subito i dati.

• Dimenticare `response.json()`.

• Usare `then()` senza controllare gli errori.

• Aprire solo l'HTML senza server locale.

---

## PAGE 26

Corso javascript

pt.2

FINE

---

