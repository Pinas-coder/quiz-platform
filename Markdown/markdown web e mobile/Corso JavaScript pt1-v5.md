# Corso JavaScript pt1-v5.pdf

## PAGE 1

Corso JavaScript

pt.1

---

## PAGE 2

Cos'è il JavaScript

JavaScript (spesso abbreviato in JS) è un linguaggio di programmazione leggero,

interpretato e orientato agli oggetti. È principalmente noto come il linguaggio di scripting per

le pagine web, ma oggi viene utilizzato in tantissimi altri ambienti.

In una pagina web:

● l'HTML definisce la struttura di una pagina

● CSS ne cura l'estetica

● JavaScript ne gestisce il comportamento. È ciò che permette di creare mappe

interattive, animazioni 2D/3D, menu a comparsa o aggiornamenti di contenuti in tempo

reale senza dover ricaricare la pagina.

---

## PAGE 3

La storia di JavaScript

La storia:

● 1995: Viene creato da Brendan Eich in soli 10 giorni mentre lavorava presso Netscape

Communications. Inizialmente si chiamava Mocha, poi LiveScript e infine JavaScript

(una mossa di marketing per cavalcare il successo di Java, anche se i due linguaggi

sono molto diversi).

● 1997: Diventa uno standard ufficiale tramite l'ECMAScript (da qui il nome delle versioni

moderne come ES6).

● 2009: Con la nascita di Node.js, JavaScript esce dai confini del browser per approdare

sui server, diventando un linguaggio "universale".

ECMAScript (ES) è lo standard di specifica del linguaggio di scripting su cui si basa

JavaScript. Le versioni principali ES:

● ES5 (2009): Ampia adozione, ancora supportata ovunque

● ES6/ES2015: Rivoluzione con classi, moduli, arrow functions, let/const

● ES2016-ES2023: Aggiornamenti annuali con nuove funzionalità

---

## PAGE 4

Le funzionalità chiave introdotte nel tempo

Nuove funzionalità introdotte negli anni:

● Template Literals: `Testo ${variabile}`

● Arrow functions: () => {}

● Classi: sintassi orientata agli oggetti

● Moduli: import/export

● Promise: programmazione asincrona

● Async/await: sintassi più pulita per asincrono

● Destrutturazione: const {x, y} = obj

---

## PAGE 5

Come funziona: Client Side vs Server Side

Tradizionalmente, JS è un linguaggio Client-Side, ovvero il codice viene eseguito

direttamente sul computer dell'utente (il browser).

Oggi il JS si può utilizzare come:

● Client-side: Quando clicchi su un pulsante e appare un messaggio di avviso, è il tuo

computer che elabora quel comando, quindi il codice è eseguito dal browser.

● Server-side: Grazie a Node.js, JS può gestire database o inviare email direttamente da

un server, competendo con linguaggi come Python o PHP. Il server esegue il codice e il

client vede solo il risultato.

---

## PAGE 6

Inserimento del codice nell’html e commenti

Il JavaScript può essere inserito in modo:

● inline: codice dentro il tag html:

<p onclick="alert(‘Hello World!’);">Player 1: Chris</p>

● interno: usando il tag script:

<script>

console.log("Hello World!");

</script>

● esterno:  crea un file js e caricalo con <script src=”file.js”></script>

Il posizionamento del tag è libero, ma è consigliato nel body se si deve interagire con l’html

I commenti si possono inserire nei seguenti modi:

● monolinea: //

● plurilinea: /* … */

---

## PAGE 7

Primo programma: stampa a video tramite console

Per stampare a video qualcosa, dobbiamo dare il seguente comando:

console.log("Hello World!");

Esercizio:

1. Aprire console (F12)

2. Scrivere la prima espressione nella console

---

## PAGE 8

Variabili, Costanti e Scope pt.1

Dichiarazione: informare l’applicazione che esisterà una variabile con un determinato nome.

Inizializzazione: assegnare un valore iniziale alla variabile (costante).

let a;          // Dichiarazione valida (valore: undefined)

a = 10;        // Inizializzazione

a = 20;       // Ri-inizializzazione (cambio valore)

let b = 5;     // Dichiarazione + inizializzazione insieme

const c = 100; // Dichiarazione + inizializzazione OBBLIGATORIE per le costanti

Dichiarazione multipla (senza inizializzazione)

let x, y, z;

x = 1;  // Inizializzo x

y = 2;  // Inizializzo y

// z rimane undefine

Dichiarazione multipla (con inizializzazione)

let a = 1, b = 2, c = 3;

---

## PAGE 9

Variabili, Costanti e Scope pt.2

Dichiarazioni:

var vecchio = "evitare";  // Vecchio stile

let variabile = "modificabile";

const COSTANTE = "fissa";

Naming Convention:

● camelCase: nomeStudente

● UPPER_SNAKE_CASE: NOME_STUDENTE

● Nomi significativi (es. contatore), non a , b , x

Scope:

● Globale: Accessibile da qualsiasi parte del codice

● Locale: Accessibile solo dentro al suo scope (ambito)

---

## PAGE 10

Primo programma: stampa tramite html

Per stampare direttamente nella pagina html:

<body>

<p id="messaggio"></p>

<script>

// 1. Troviamo il paragrafo nell'HTML usando il suo ID

const paragrafo = document.getElementById("messaggio");

// 2. Cambiamo il testo interno del paragrafo

paragrafo.textContent = "Hello World!";

// Puoi anche usare innerHTML se vuoi inserire HTML, ad esempio:

// paragrafo.innerHTML = "<b>Hello World!</b>";

</script>

</body>

Esercizio: stampare delle frasi nel browser tramite html

---

## PAGE 11

Il prompt

La funzione prompt() è uno dei metodi più vecchi e semplici di JavaScript per interagire con l'utente.

Apre una finestra di dialogo nel browser che contiene un messaggio, un campo di testo per l'input e

due pulsanti: "OK" e "Annulla".

È lo strumento perfetto per fare i primi esperimenti perché ti permette di acquisire dati senza dover

creare complessi form HTML.

let nome = prompt("Come ti chiami?");

console.log("Ciao " + nome);

Attenzione:

● Ritorna sempre una stringa, anche se inserisci dei numeri

● Se clicchi "Annulla", ritorna null

● Per evitare problemi è consigliato usare Number() oppure parseInt() oppure parseFloat()

● È consigliato l’uso solo per la didattica

---

## PAGE 12

Tipi di dati pt.1

La tipizzazione:

In JavaScript la tipizzazione è dinamica a differenza di altri linguaggi di programmazione. Ciò significa

che non è necessario specificare il tipo di dato (stringa, numero, ecc.) al momento della dichiarazione

e il tipo può cambiare durante l'esecuzione del programma.

Questo metodo è comodo ma pericoloso (infatti tanti utenti utilizzano TypeScript che aggiunge a

JavaScript la tipizzazione).

Per esempio:

let eta = 25; // Inizialmente è un numero

eta = "venticinque"; // Nessun errore, ora è una stringa

Massima attenzione nell’utilizzo delle variabili in casi come quello appena riportato, perchè potrebbe

creare bug difficili da trovare!

---

## PAGE 13

Tipi di dati pt.2

In JavaScript i tipi di dati ammessi sono i seguenti:

Numeri: Interi o decimali (chiamati float, definiti usando il punto e non la virgola)

let anni = 25; // Intero

let prezzo = 19.99; // Decimale (floating point)

let infinito = Infinity; // Valore speciale, es. 10/0

let nonUnNumero = NaN; // "Not a Number", es. risultato di "ciao" / 2

Stringhe: Testo semplice, che deve essere sempre racchiuso tra apici singoli o doppi.

let nome = "Mario";

let saluto = 'Ciao';

Attenzione: spesso confusi alcuni termini che hanno significati diversi:

Undefined: La variabile è stata dichiarata ma non le è ancora stato assegnato un valore.

Null: Un valore di "vuoto" intenzionale assegnato dal programmatore.

---

## PAGE 14

Tipi di dati pt.3

Booleani: Valori che possono essere solo true (vero) o false (falso), utili per gestire stati come

"online/offline".

let isOnline = true;

let haPagato = false;

Array: Collezioni di dati ordinati in una lista, definiti tra parentesi quadre []. Gli elementi iniziano a

essere contati da indice 0.

let colori = ["Rosso", "Verde", "Blu"];

let misto = [10, "Test", true]; // Legale in JS

Oggetti: Rappresentazioni programmatiche di oggetti reali (es. una persona) che raggruppano diverse

proprietà tra parentesi graffe {}. Si accede alle loro proprietà usando la notazione con il punto o dot

notation (es. persona.nome) oppure con la notazione chiamata bracket notation (es. persona[“nome”]

let utente = {

nome: "Luca",

eta: 30,

isAbbonato: true };

---

## PAGE 15

Esercizio

Esercizio 1:

creare un programma per calcolare l’area e il perimetro del rettangolo, usando le variabili e il

prompt.

fare la domanda e la risposta deve essere:

la base è…

l’altezza è…

l’area è…

il perimetro è…

Esercizio 2:

creare un programma per calcolare l’area del cerchio, sul modello precedente

---

## PAGE 16

Le stringhe pt.1

Le stringhe di testo si creano utilizzando i singoli ‘ ’ o i doppi apici “ “.

Generalmente si utilizzano i doppi apici, perchè le parole con l’apostrofo potrebbero rompere la

stringa.

Per risolvere questo problema si può utilizzare il carattere di escape ovvero il back slash \ oppure

usare i doppi apici.

La concatenazione delle stringhe si effettua tramite il segno +

let nome = "Luca";

let eta = "30";

console.log("Ciao, mi chiamo "+ nome + " e ho " + eta + " anni");

---

## PAGE 17

Le stringhe pt.2

I template literals (chiamati anche template strings) sono una funzionalità introdotta con ES6

(ECMAScript 2015) che rivoluziona il modo di lavorare con le stringhe in JavaScript.

Utilizzano anzichè gli apici i back tick (`) e il placeholder per l’interpolazione ${}

Per avere i back tick usare:

alt + 96 (dal tastierino numerico)

altgr + ?

Esempio:

let nome = "Luca";

let eta = "30";

console.log("Ciao, mi chiamo "+ nome + " e ho " + eta + " anni"); // vecchio metodo

console.log(`Ciao, mi chiamo ${nome}, e ho ${eta} anni`;       // nuovo metodo

---

## PAGE 18

Le stringhe pt.3

I vantaggi dei template literals riguardano soprattutto la possibilità di usare l’interpolazione e stringhe

multilinea:

const nome1 = "Mario", eta2 = 30, prezzo = 19.99, iva = 0.22;

// Con variabili

console.log(`Ciao

${nome1}`); // Ciao Mario ; c’è il ritorno a capo

// Con espressioni matematiche

console.log(`Totale: €${prezzo * (1 + iva)}`); // "Totale: €24.39"

// Con chiamate a funzione

function maiuscolo(str) {

return str.toUpperCase();

}

console.log(`Nome: ${maiuscolo(nome)}`); // "Nome: MARIO"

---

## PAGE 19

Esercizio

Esercizio 1:

modificare i due esercizi precedenti usando i template literals

Esercizio 2:

creare un programma per calcolare l’area del trapezio, usando le variabili e il prompt. Usare

console.log e template literals.

---

## PAGE 20

Le stringhe pt.3

Le stringhe sono oggetti e pertanto hanno una serie di metodi associati:

.length : lunghezza della stringa

.charAt(posizione) : carattere in posizione specifica

.indexOf(sottostringa) : posizione di una sottostringa

.replace(vecchio, nuovo) : sostituzione di sottostringa

.toUpperCase() : conversione in maiuscolo

.toLowerCase() : conversione in minuscolo

.substring(dal carattere, al carattere) : estrazione di una sottostringa

.slice(0, 10) : estrazione di sottostringa (supporta i numeri negativi)

.includes(carattere) : verifica se nella stringa è presente un determinato carattere

---

## PAGE 21

Conversioni di tipo pt.1

Verifica del tipo di variabile: typeof();

let miaVariabile = 2.22;

console.log(typeof(miaVariabile));

Conversione delle stringhe in numeri: Number();

let miaVariabile = "2";

miaVariabile = Number(miaVariabile);

console.log(miaVariabile + " is " + typeof(miaVariabile));

Conversione dei numeri in stringhe: String();

let miaVariabile = 2;

miaVariabile = String(miaVariabile);

console.log(miaVariabile + " is " + typeof(miaVariabile));

---

## PAGE 22

Conversioni di tipo pt.2

Conversione di una stringa in un intero: parseInt():

let miaVariabile = "2 euro";

miaVariabile = parseInt(miaVariabile);

console.log(miaVariabile + " is " + typeof(miaVariabile));

Conversione di una stringa in un intero: parseFloat():

let miaVariabile = "2.20 euro";

miaVariabile = parseFloat(miaVariabile);

console.log(miaVariabile + " is " + typeof(miaVariabile));

Gestione dei decimali: si usa toFixed():

let miaVariabile = 2.50;

miaVariabile = miaVariabile.toFixed(2); // esempio: 2 decimali, ATTENZIONE: restituisce una stringa

---

## PAGE 23

Esercizio

Esercizio 1:

modificare i due esercizi precedenti usando il valore int, il valore float e arrotondando a 2 decimali

Esercizio 2:

creare un programma per calcolare l’area di due trapezi, secondo i modelli precedenti, inserendo

alla fine la somma delle aree e dei perimetri delle due figure.

---

## PAGE 24

Operatori aritmetici e di incremento

Operatori aritmetici:

10 + 3  // 13 (addizione)

10 - 3  // 7 (sottrazione)

10 * 3  // 30 (moltiplicazione)

10 / 3  // 3.33... (divisione)

10 % 3  // 1 (resto)

10 ** 3  // 1000 (potenza)

Operatori di incremento:

a += 5;  // a = a + 5

a++;  // a = a + 1

a--; // a = a - 1

---

## PAGE 25

Esercizio

Esercizio 1:

dichiarare e inizializzare due variabili con dei numeri

verificare il formato (con typeof)

sommare le variabili

trasformare le variabili in stringhe

verificare il formato

sommare le variabili

ritrasformare le variabili tramite Number()

verificare il formato

---

## PAGE 26

Operatori di confronto

Operatori di confronto:

> // maggiore

>= // maggiore uguale

<  // minore

<= // minore uguale

==  // confronta solo i valori ma non i tipi (i tipi possono essere diversi)

es. 5 == ‘5’ è vero)

=== // confronta i valori e i tipi

es. 5===5 true e   ma  5 === ‘5’ false)

!= // verifica se i valori sono diversi

!== // verifica se i valori non sono identici

---

## PAGE 27

Operatori logici

Operatori logici:

&& // And - La condizione è vera solo se tutte le parti sono vere.

|| // Or - La condizione è vera se almeno una delle parti è vera.

! // Not - Questo operatore inverte il valore booleano (la negazione); trasforma il vero in falso e

viceversa.

Esempi:

eta >= 18 && patente  // AND - Se hai più di 18 anni e hai la patente guidi

abbonamento == True || biglietto == True  // OR - Se hai l’abbonamento o il biglietto per l’autobus,

viaggi

!note // NOT - Se non ha avuto nessuna nota durante l’anno verrai promosso

---

## PAGE 28

Le condizioni pt.1

Le condizioni sono il "cervello" del codice: permettono al programma di prendere decisioni in base a

determinate condizioni. I principali costrutti condizionali in JavaScript sono: if - else if - if…else -

switch

IF: permette di verificare una condizione singola

let temperatura = 32;

if (temperatura > 30) {

console.log("Accendi il condizionatore!");

}

IF…ELSE: permette di verificare una condizione binaria (condizione e alternativa)

let passwordInserita = "12345";

const PASSWORD_CORRETTA = "Segreta!";

if (passwordInserita === PASSWORD_CORRETTA) {

console.log("Accesso consentito.");

} else { console.log("Password errata. Riprova."); }

---

## PAGE 29

Le condizioni pt.2

IF..ELSE IF … ELSE : permette di verificare condizioni multiple

let voto = 25;

if (voto === 30) {

console.log("Eccellente!");

} else if (voto >= 24) {

console.log("Molto bene.");

} else if (voto >= 18) {

console.log("Sufficiente.");

} else {

console.log("Esame non superato.");

}

---

## PAGE 30

Le condizioni pt.3

LE CONDIZIONI CON SWITCH : permette di verificare condizioni multiple in maniera più pulita di

else…if

let giorno = prompt("Che giorno è oggi?").toLowerCase();

switch (giorno) {

case "lunedì":  // verifica la condizione

case "mercoledì":  // verifica la condizione

case "venerdì":  // verifica la condizione

console.log("Oggi il museo è aperto: 08:00 - 22:00"); // esegue il comando

break; // esce da switch

case "martedì": // verifica la condizione

case "giovedì": // verifica la condizione

console.log("Oggi il museo è aperto: 8:00 - 13:00"); // esegue il comando

break; // esce da switch

default: // condizione paracadute

console.log("Oggi il museo è chiuso."); // esegue il comando

break; // esce da switch

}

---

## PAGE 31

Le condizioni pt.4

LE CONDIZIONI CON L’OPERATORE LOGICO AND

let eta = 20;

let haAbbonamento = true;

if (eta >= 18 && haAbbonamento === true) {

console.log("Puoi entrare al cinema!");

} else if (eta < 18 && haAbbonamento === true) {

console.log("Puoi entrare, ma solo nella sala per minorenni.");

} else {

console.log("Accesso negato: serve un abbonamento.");

}

---

## PAGE 32

Le condizioni pt.5

L’OPERATORE TERNARIO : È una forma abbreviata dell' if...else scritta su una sola riga. Usa i simboli

? e :

Sintassi: condizione ? valore_se_vero : valore_se_falso

let eta = 18;

let messaggio = (eta >= 18) ? "Puoi votare" : "Troppo giovane";

console.log(messaggio);

Esempio con i template literals

let genere = prompt ("M/F ?");

console.log(`${(genere=='M')?'Benvenuto':'Benvenuta'} nel mio sito`);

---

## PAGE 33

Esercizio

Esercizio 1:

Modificare l’esercizio del calcolo dell’area del trapezio usando le condizioni (la base maggiore

dev’essere maggiore della base minore, valori maggiori di 0, ecc.)

Esercizio 2:

Tramite prompt richiedere: cognome, nome, username, password, email e telefono.

Inoltre:

● convertire nome e cognome in maiuscolo

● controllare con if che la mail includa “@” , “.” e abbia una lunghezza di almeno 5 caratteri

● controllare con un switch che il numero di telefono non sia minore di 6 caratteri, sia maggiore

di 16 caratteri e non sia nullo

● se i controlli vanno a buon fine stampare il dato richiesto, altrimenti stampare l’errore

commesso

---

## PAGE 34

I cicli pt.1

I cicli o loop sono strumenti che permettono di eseguire la stessa azione ripetutamente finché una

determinata condizione rimane vera. Questo evita di dover scrivere codice ripetitivo manualmente,

operazione che risulterebbe impossibile con una quantità di dati incognita o molto grande.

Le strutture più importanti sono:

● ciclo while

● ciclo do…while

● ciclo for

● forEach

---

## PAGE 35

I cicli pt.2

Il ciclo while esegue il blocco finché la condizione è vera, controllandola all’inizio di ogni iterazione.

let i = 0;

while (i < 3) {

console.log(i);

i++;       // se ti dimentichi questo, il ciclo diventa infinito

}

Il ciclo do…while esegue il blocco finché la condizione è vera, controllandola alla fine di ogni

iterazione.

let i = 0;

do {

console.log(i);

i++;

} while (i < 3);

---

## PAGE 36

I cicli pt.3

Il ciclo for è il più usato per ripetere codice un numero noto di volte, perché integra in una sola riga

inizializzazione, condizione e aggiornamento. La struttura tipica è for (inizializzazione; condizione;

aggiornamento)

for (let i = 0; i < 5; i++) {

console.log(i);

}

break: Interrompe immediatamente il ciclo e ne esce, ad esempio quando viene trovato un valore

specifico cercato.

continue: Non interrompe tutto il ciclo, ma salta solo l'iterazione corrente per passare direttamente

alla successiva. È utile se si vuole, ad esempio, evitare di stampare un particolare valore o saltare i

numeri pari.

---

## PAGE 37

Esercizi

Esercizio 1:

Creare una calcolatrice usando il prompt per chiedere due numeri e l’operatore; tramite switch

eseguire i controlli e stampare tramite console.log

Esercizio 2:

Chiede la username tramite prompt e stampare la parola inserita carattere per carattere, insieme

alla sua posizione nella stringa

Esercizio 3:

Calcolare il fattoriale di un numero usando il ciclo while e il ciclo for

Esercizio 4:

Tramite prompt richiedere: cognome, nome, username, password, email e telefono.

Inoltre fare in modo che non si possa andare avanti finchè non si inserisce la risposta giusta:

● convertire nome e cognome in maiuscolo

● controllare con if che la mail includa “@” , “.” e abbia una lunghezza di almeno 5 caratteri

● controllare con un switch che il numero di telefono non sia minore di 6 caratteri, sia maggiore

di 16 caratteri e non sia nullo

● se i controlli vanno a buon fine stampare il dato richiesto, altrimenti stampare l’errore

commesso

---

## PAGE 38

Esercizi

Esercizio 5:

Creare un ciclo for che conti da 0 a 20; stampare tutti i valori e se si trova il valore 10 uscire dal ciclo

Esercizio 6:

Creare un ciclo for che conti da 0 a 20; stampare tutti i valori e se si trova il valore 10 saltare la

stampa

---

## PAGE 39

Gli array pt.1 - definizione

In JavaScript un array è una struttura dati che rappresenta una lista ordinata di valori, accessibili

tramite un indice numerico che parte da 0. Gli array possono contenere elementi di qualsiasi tipo

(numeri, stringhe, oggetti, altri array) anche mescolati tra loro, e possono crescere o ridursi

dinamicamente aggiungendo o rimuovendo elementi. Gli array vengono visti come oggetti.

Il modo più comune per creare un array è usare le letterali di array (array literals) con le parentesi

quadre []

let array = [1, 2, 3, 4, 5];

console.log("Array originale: " + array);

Tipi di array

const vuoto = []; // Array vuoto

const numeri = [1, 2, 3, 4]; // Array di numeri

const colori = ["rosso", "verde", "blu"]; // Array di stringhe

const misto = [1, "ciao", true, { nome: "Luca" }]; // Array misto

---

## PAGE 40

const colori = [“giallo”,”rosso”,”blu”,”verde”];

Per accedere a un elemento specifico, si usa la sintassi colori[indice]

console.log(colori[1]); // Output: "giallo";

Per verificare la lunghezza dell’array si usa colori.length

console.log(colori.length);

Per ciclare gli elementi si può usare il ciclo for

for (i=0; i<colori.length; i++) {

console.log(`Indice: ${i}, Valore: ${colori[i]}`);

}

Gli array pt.2 - accesso agli elementi tramite for

---

## PAGE 41

Esercizi

Esercizio 1:

Creare un array con 6 alunni di una classe, indicando cognome e nome. Stampare l’elenco degli

alunni utilizzando il ciclo for

Esercizio 2:

Completare l’esercizio precedente inserendo un altro array con i voti degli alunni. Stampare l’elenco

degli alunni, con voti utilizzando il ciclo for

---

## PAGE 42

Gli array pt.3 - accesso tramite for each

Per ciclare gli elementi si può usare anche il forEach; stile funzionale ma non si può usare break e

continue.

il forEach utilizza le funzioni anonime con massimo tre parametri:

● elemento

● indice

● array intero

Esempio 1:

const numeri = [1, 2, 3, 4];

numeri.forEach(function (valore) {

console.log(valore * 2);

})

Esempio2:

let portafoglio = [100, 250, 500];

portafoglio.forEach(function(valore, posizione) {

console.log("Posizione " + posizione + ": hai " + valore + " €");

})

---

## PAGE 43

Gli array pt.4 - accesso tramite for of

Per ciclare gli elementi si può usare anche un’ulteriore  sistema:  il for…of

il for of è molto semplice da utilizzare, e prevede anche l’uso di break e continue.

Esempio:

const numeri = [1, 2, 3, 4];

for (const x of numeri) {

console.log(x);

}

---

## PAGE 44

Esercizi

Esercizio 1:

Creare un array con 6 città italiane. Stampare le città utilizzando il ciclo forEach

Esercizio 2:

Creare un array con 10 località dell’oristanese. Stampare le città utilizzando il ciclo for…of

---

## PAGE 45

Gli array pt.5 - proprietà e metodi degli array

Proprietà che funziona sia con array che con stringhe:

.length lunghezza di una stringa

Metodi degli array

.split() converte una stringa in un array

.join() converte un array in una stringa

.push() aggiunge un elemento alla fine dell’array

.pop() rimuove l'ultimo elemento dell’array

.unshift() aggiunge un elemento all'inizio dell’array

.shift() rimuove il primo elemento dell’array

---

## PAGE 46

Gli array pt.6 - proprietà e metodi degli array

Split: converte una stringa in un array

let listaSpesa = "Pane,Latte,Uova"; // stringa

let arraySpesa = listaSpesa.split(","); // Taglia dove vede la virgola

console.log(arraySpesa); // ["Pane", "Latte", "Uova"]

console.log(arraySpesa[0]); // "Pane"

Join: converte un array in una stringa

let parole = ["JavaScript", "è", "fantastico"];

let frase = parole.join(" "); // Unisce mettendo uno spazio tra le parole

console.log(frase); // "JavaScript è fantastico"

---

## PAGE 47

Gli array pt.7 - proprietà e metodi degli array

Push: aggiunge elementi in coda

let utenti = ["Anna", "Luca"];

utenti.push("Marco");

// Risultato: ["Anna", "Luca", "Marco"]

Pop: rimuove elementi dalla coda

let ultimiArrivati = ["Anna", "Luca", "Marco"];

let rimosso = ultimiArrivati.pop();

console.log(rimosso); // "Marco"

console.log(ultimiArrivati); // ["Anna", "Luca"]

---

## PAGE 48

Gli array pt.8 - proprietà e metodi degli array

Unshift: aggiunge elementi all’inizio

let compiti = ["Studiare JS", "Fare sport"];

compiti.unshift("Comprare il pane");

// Risultato: ["Comprare il pane", "Studiare JS", "Fare sport"]

Shift: rimuove elementi dall’inizio

let fila = ["Primo", "Secondo", "Terzo"];

fila.shift();

console.log(fila); // ["Secondo", "Terzo"]

---

## PAGE 49

Esercizi

Esercizio 1:

Creare tramite prompt un sistema di registrazione dati tramite prompt. Richiedere prima il numero di

elementi e poi registrare cognome e nome in due array distinti (suggerimento: usa push). Alla fine

stampare dall’array cognome e nome

---

## PAGE 50

Gli array pt.9 - proprietà e metodi degli array

Gli array multidimensionali, hanno più dimensioni.

Esempio di un array bidimensionale:

let registro = [

["Mario", 8, 7, 9],    // Indice 0

["Anna", 10, 9, 10],   // Indice 1

["Luca", 6, 5, 7]      // Indice 2

];

// 1. Accedere a un'intera riga

console.log(registro[1]); // Output: ["Anna", 10, 9, 10]

// 2. Accedere a un singolo dato (Coordinate: [dimensione1][dimensione2])

// Prendiamo il voto '7' di Mario (dimensione1: 0, dimensione2: 2)

let votoMario = registro[0][2];

console.log("Voto di Mario in Geografia: " + votoMario);

---

## PAGE 51

Esercizi

Esercizio 1:

Creare un array bidimensionale scolastico registrando cognome, nome e classe dell’alunno

Stampare i valori usando il ciclo for annidato

---

## PAGE 52

Gli array pt.10 - proprietà e metodi degli array

Gli array hanno ulteriori metodi avanzati:

.slice()      // Estrae una parte dell'array

.indexOf()     // Trova la posizione di un elemento

.includes()   // Verifica se un elemento esiste

.sort()        // Ordina gli elementi

.reverse()   // Inverte l'ordine

.filter()      // Seleziona elementi che soddisfano una condizione

.map()         // Trasforma ogni elemento

---

## PAGE 53

Gli array pt.11 - proprietà e metodi degli array

Esempio di un array monodimensionale di punteggi:

const punteggi = [150, 450, 100, 300, 800, 250];

slice: Estrae una parte dell'array

// .slice(): Prendi solo il "Podio" (i primi 3 punteggi della lista invertita)

const podio = punteggi.slice(0, 3);

console.log("Podio: ", podio); // [150, 450, 100]

indexOf: Trova la posizione di un elemento

// .indexOf(): Trova dove si trova il primo punteggio 300

const posizione = punteggi.indexOf(300);

console.log("Posizione del 300:", posizione); // Output: 3

includes: Verifica se un elemento esiste

// .includes(): Controlla se qualcuno ha fatto esattamente 500 punti (true o false)

const esisteCinquecento = punteggi.includes(500);

console.log("Esiste il 500?:", esisteCinquecento); // Output: false

---

## PAGE 54

Gli array pt.12 - proprietà e metodi degli array

Esempio di un array monodimensionale di punteggi:

const punteggi = [150, 450, 100, 300, 800, 250];

sort: Ordina l'array (e modifica l’originale) in senso crescente (o decrescente)

// Nota: Passiamo una funzione (a, b) => a - b perché il sort di base tratta i numeri come stringhe!

punteggi.sort((a, b) => a - b);

console.log("Ordinati crescente:", punteggi); // [100, 150, 250, 300, 450, 800]

per ordinare in senso decrescente (dal più alto al più basso) con sort invertiamo a e b nella funzione

// Nota: Ora passiamo una funzione (a, b) => b - a

punteggi.sort((a, b) => b - a);

console.log("Ordinati decrescente:", punteggi); // [800, 450, 300, 250, 150, 100]

sort modifica l’array, per non modificare l’array originale usare toSorded()

---

## PAGE 55

Gli array pt.13 - proprietà e metodi degli array

Esempio di un array monodimensionale di punteggi:

const punteggi = [150, 450, 100, 300, 800, 250];

reverse: Inverte l'ordine dell’array (e modifica l’originale)

// .reverse(): Inverte l'ordine (dal più alto al più basso)

punteggi.reverse();

console.log("Invertiti:", punteggi); // [800, 450, 300, 250, 150, 100]

per non modificare l’array originale usare toReversed()

---

## PAGE 56

Gli array pt.14 - proprietà e metodi degli array

Esempio di un array monodimensionale di punteggi:

const punteggi = [150, 450, 100, 300, 800, 250];

filter: Filtra l’array sulla base delle condizioni imposte

// .filter(): Prendi solo i punteggi "Pro" (maggiori di 200)

const punteggiAlti = punteggi.filter(punt => punt > 200);

console.log("Punteggi > 200:", punteggiAlti); // [450, 300, 800, 250]

map: Trasforma ogni elemento dell’array

// .map(): Converti i punteggi in "punti esperienza" (diviso 10)

const xp = punteggi.map(p => p / 10);

console.log("Punti XP:", xp); // [15, 45, 10, 30, 80, 25]

---

## PAGE 57

Le mappe pt.1 - definizione

In JavaScript, una Map è una struttura dati che rappresenta una collezione di coppie chiave-valore, dove le

chiavi possono essere di qualsiasi tipo. A differenza degli array, non si accede ai dati tramite un indice

numerico, ma tramite la propria chiave univoca. Le Map mantengono l'ordine di inserimento degli elementi

e, come gli array, possono crescere o ridursi dinamicamente. Le Map sono oggetti specializzati della libreria

standard. Il modo più comune per creare una Map è usare il costruttore new Map() passando opzionalmente

un array di coppie:

let mappa = new Map([ ["id", 1], ["stato", "attivo"] ]);

console.log("Mappa originale: ", mappa);

Tipi di Map

const vuota = new Map(); // Map vuota

const numeriSemplici = new Map([   [1, 1],   [2, 2],   [3, 3],   [4, 4] ]); // Map di numeri

const coloriMap = new Map([  ["colore1", "rosso"],   ["colore2", "verde"],   ["colore3", "blu"] ]); // stringhe

---

## PAGE 58

Le mappe pt.2 - accesso alle Maps

Principali parole chiave delle Maps:

● get: accede all’elemento

● set: aggiunge una voce

● has: verifica se esiste un elemento

● size: conta gli elementi

Esempio:

const coloriMap = new Map([   ["colore1", "rosso"],   ["colore2", "verde"],   ["colore3", "blu"] ]);

console.log(coloriMap.get("colore1")); // Output: "rosso";

console.log("grandezza map: " + coloriMap.size);

for (const [chiave, valore] of coloriMap) {

console.log(`Chiave: ${chiave}, Valore: ${valore}`);

}

---

## PAGE 59

Esercizi

Esercizio 1:

Creare una map di 10 città italiane e stampare i valori tramite il for…ot

---

## PAGE 60

Corso JavaScript

pt.1

FINE

---

