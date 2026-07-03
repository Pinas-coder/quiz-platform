# Corso CSS Completo v3.pdf

## PAGE 1

Corso CSS Completo

pt.1

---

## PAGE 2

Cos'è il CSS

CSS = Cascading Style Sheets

∙ Linguaggio per stilizzare le pagine HTML

∙ Controlla colori, font, spaziatura e layout

∙ Separa il design dal contenuto

In origine, HTML non fu concepito per gestire sia il contenuto che la formattazione. Tuttavia, in passato veniva

utilizzato anche per definire lo stile delle pagine web.

Con l'avvento del CSS, si è finalmente raggiunta la separazione degli intenti:

● HTML: Definisce la struttura e i contenuti della pagina (ad esempio, titoli, paragrafi, immagini).

● CSS: Descrive la presentazione e la formattazione (ad esempio, colori, caratteri, layout e posizionamento).

Questa separazione rende il codice più pulito, gestibile e accessibile.

Il CSS inoltre fa risparmiare tanto tempo perchè ha centralizzato la formattazione delle pagine in un unico punto.

---

## PAGE 3

Cos'è il DOM

È  la  rappresentazione  strutturata  di  una  pagina

web, organizzata come un albero di nodi.

Ogni elemento HTML (tag, testo, attributo,

commento) diventa un nodo che può essere letto

e manipolato con JavaScript.

Il CSS utilizza i selettori che fanno riferimento alla

struttura del DOM.

---

## PAGE 4

Cos'è il Box Model

Il  Box  Model  in  CSS  è  un  concetto  fondamentale  che  descrive  come

sono  strutturati  e  dimensionati  gli  elementi  HTML.  Ogni  elemento  è

considerato come una "scatola" composta da diverse parti:

● Content: Il contenuto effettivo dell'elemento (testo, immagini, ecc.)

○ Dimensioni controllate da width e height

● Padding (Spaziatura interna): Spazio tra il contenuto e il bordo

○ Controllato da padding, padding-top, padding-right, ecc.

● Border (Bordo): Linea che circonda padding e content

○ Controllato da border, border-width, border-style, ecc.

● Margin (Spaziatura esterna): Spazio tra il bordo e gli elementi vicini

○

Controllato da margin, margin-top, margin-right, ecc.

---

## PAGE 5

Tre Modi di Usare CSS

1. Inline

Direttamente nell'elemento HTML

<p style="color:blue;text-align:center;">Il mio paragrafo formattato </p>

2. Interno

Dentro il tag <style>

<style> p { color:blue; text-align:center; } </style>

3. Esterno (✓ Consigliato)

Collegamento a file .css

<link rel="stylesheet" href="mystyle.css">

---

## PAGE 6

Sintassi CSS di Base

p {

color: blue;

font-size: 16px;

margin: 10px;

}

Selettore  { Proprietà  :   Valore;  }

---

## PAGE 7

Proprietà Colori

Colore del testo

Colore di sfondo

Colore del bordo

Formati: nomi (red), esadecimale (#FF0000), RGB (rgb(255,0,0))

color: blue;

background-color: #ffeb3b; /* Giallo brillante */

border-color: rgb(243, 4,4);

---

## PAGE 8

Selettori CSS pt.1

∙ Selettore elemento: seleziona tutti gli elementi con un particolare tag - es. tutti i paragrafi

p {  text-align: center;  color: red; }

∙ Selettore classe: seleziona tutti gli elementi con l'attributo  della classe - es.

class="ClasseContenitore" -  .ClasseContenitore {  text-align: center;  color: red; }

∙ Selettore ID: seleziona tutti gli elementi con l'attributo  dell’ID (univoco per la pagina) - es.

id=”IdMio” - #IdMio1 {   text-align: center;   color: red; }

∙ Selettore universale: seleziona tutti gli elementi della pagina

* {   text-align: center;   color: blue; }

---

## PAGE 9

Font e Testo - Proprietà Base

∙ Tipo di font (Arial, Times, Verdana, Font Family): font-family

∙ Dimensione del font (px, em, rem): font-size

∙ Stile del font (italic, oblique): font-style

∙ Spessore del font (normal, bold (grassetto), 400-900): font-weight

∙ Sottolineatura del font (underline, overline, line through): text-decoration

∙ Allineamento (left, center, right): text-align

∙ Interlinea: line-height

---

## PAGE 10

Esercizio

Esercizio 1:

creare una nuova pagina chiamata gotico-aragonese.html

assegnare il titolo (title e h1) e i paragrafi

aprire il file Il gotico aragonese in Sardegna - versione 1.odt

creare uno stile interno per la pagina con le seguenti caratteristiche:

● per tutta la pagina: carattere arial (e relativa famiglia), dimensione 16px, sfondo chiaro,

altezza linea 1.6

● per i paragrafi: colore carattere: nero, font-size rem 0.5

● per il titolo h1:  colore blu, font-size rem 2, testo centrato

● per il titolo h2:  colore grigio, font-size rem 1.1

---

## PAGE 11

Selettori CSS pt.2

Selettore di pseudo-classi:

∙ :link a:link {   color: #FF0000; } /* link non visitato */

∙ :visited a:visited {   color: #00FF00; }  /* link visitato */

∙ :hover a:hover {   color: #FF00FF; } /* mouse over link */

∙ :active a:active { color: #0000FF; } /* link selezionato */

Selettore di pseudo-classi strutturali:

∙ :first-child li:first-child /* primo elemento di una lista */

∙ :last-child li:last-child /* ultimo elemento di una lista */

∙ :nth-child(n) tr:nth-child(3) /* terzo elemento di una tabella */

∙ :nth-child(odd) tr:nth-child(odd) /* elementi dispari di una tabella */

∙ :nth-child(even) tr:nth-child(even) /* elementi pari di una tabella */

Selettore di pseudo-elementi:

∙ ::first-line p::first-line {color: red;} /* prima linea del paragrafo */

∙ ::first-letter p::first-letter {color: red;} /* prima lettera della parola */

∙ ::selection ::selection {color: red;   background: yellow;} /*sulla selezione */

---

## PAGE 12

Link

Per gestire lo stile dei link tramite CSS si usano le pseudo-classi:

a:link – stile del link non ancora visitato    a:link { color: #01376d; }

a:visited – stile del link dopo la visita   a:visited { color: #800000 }

a:hover – stile del link quando il puntatore è sopra il link  a:hover { text-decoration: underline; }

a:active – stile del link durante il click  a:active { color: #ff0000; }

---

## PAGE 13

Esercizio

Esercizio 1:

aprire la pagina chiamata gotico-aragonese.html

aprire il file Il gotico aragonese in Sardegna - versione 2.odt

inserire i link nelle parole indicate e inserire gli stili per i link della pagina, per i link visitati, per i link

attivi e per puntatore sopra i link

---

## PAGE 14

Il tag Div

Il tag <div> è uno degli elementi fondamentali in HTML e viene utilizzato per raggruppare contenuti e organizzare la struttura di

una pagina web.

Di base il tag <div> è neutro:

<div>

<h2>Benvenuto!</h2>

<p>Questa è una sezione della pagina.</p>

</div>

ma può essere usato per:

● aiutare a organizzare il layout della pagina (es. intestazione, corpo, piè di pagina)

● permettere di applicare stili e script a gruppi di elementi

● creare framework moderni (come React, Vue, Angular) per costruire componenti

<div style="background-color: lightblue; ">

<p>Contenuto con sfondo colorato</p>

</div>

---

## PAGE 15

Esempio di div

CSS

<style>

.box {

padding: 20px;

border: dashed 10px #ff0000;

margin: 200px;

height: 200px;

width: 200px;

background-color: #fffee0;

}

</style>

HTML

<div class="box">

Ciao,  Sono un div con il box model applicato!

</div>

---

## PAGE 16

Il tag Span

Il tag <span> è simile al <div> e serve per raggruppare contenuti, ma a differenza del <div> viene usato su porzioni di testo più

piccole rispetto al div, e soprattutto per inserire formattazione differente all’interno di altri tag.

Di base il tag <span> è neutro:

<p><span style="color”: red; font-weight: bold;>Benvenuto!</span>nella mia pagina</p>

Nell’esempio riportato, il paragrafo avrà un aspetto conforme a quanto previsto dal CSS del tag <p>, ma la parola “Benvenuto”

avrà una personalizzazione nello stile: sarà rosso e in grassetto.

---

## PAGE 17

Esercizio

Esercizio 1:

aprire la pagina chiamata gotico-aragonese.html

aprire il file Il gotico aragonese in Sardegna - versione 3.odt

creare le classi per l’uso del grassetto e del corsivo

Applicare, tramite il tag span, il grassetto e corsivo nei punti indicati

---

## PAGE 18

I bordi

Stile del bordo:

border-style:

hidden, none, solid, dashed, dotted, double…

Spessore del bordo:

border-width: 1px;

colore:

border-color: black;

arrotondamento:

border-radius: 15px;

shorthand:

border: 2px solid #000;

bordi in dettaglio:

border-top border-bottom   border-right   border-left

---

## PAGE 19

Le liste

Le liste possono essere personalizzate in CSS tramite diverse regole, le più importanti sono:

● list-style-type

● list-style-position

● list-style-image

● display

Display:

Serve a personalizzare la visualizzazione della lista; i valori più utilizzati sono:

●    list-item - visualizzazione predefinita in verticale

●    flex - visualizzazione in orizzontale

Posizione e distanza:

list-style-position:    inside/outside

gap:  distanza tra gli elementi

Stili per ul:

list-style-type:   none, square, disc, circle…

list-style-image: list-style-image: url("icone/freccia.png");

Stili per ol:

list-style-type:   none, decimal, lower-alpha, lower-latin, upper-alpha, upper-latin…

style

---

## PAGE 20

Le liste: creazione di una barra di navigazione

CSS

.nav {

list-style: none;

display: flex;

gap: 24px;

}

.nav a {

font-size: 2rem;

text-decoration: none;

color: #333;

background-color: antiquewhite;

border: #785a02 1px solid;

border-radius: 100px;

padding: 8px 16px;

}

HTML

<nav>

<ul class="nav">

<li><a href="#">Home</a></li>

<li><a href="#">Prodotti</a></li>

<li><a href="#">Contatti</a></li>

</ul>

</nav>

---

## PAGE 21

Esercizio

Esercizio 1:

aprire la pagina chiamata gotico-aragonese.html

inserire in cima alla pagina una barra di navigazione composta da quattro voci:

● Home

● Romanico

● Gotico-Aragonese

● Barocco e Rococò

● Bizantino

Riportare i menù anche sulle altre pagine del sito

---

## PAGE 22

Le tabelle

Le tabelle possono essere personalizzate in CSS tramite diverse regole, le più importanti sono:

● border-collapse

○ collapse: unisce i bordi adiacenti

○ separate: separa i bordi adiacenti

● table-layout: definisce il tipo di tabella

○ auto: (default) adatta le colonne al contenuto più largo

○ fixed: fissa le larghezze basate sulla prima riga o proprietà width

● width: larghezza della tabella (es. in px o %)

● personalizzazione della larghezza delle celle:

○ uniforme*:

thead th{  width: 25%;     }

○ differenziata*:

thead th:nth-child(1){  width: 30%;    }

thead th:nth-child(2){   width: 30%;   }

thead th:nth-child(3){   width: 25%;   }

thead th:nth-child(4){    width: 25%;  }

● zebra-striping:

tbody tr:nth-child(odd) {

background-color: #eeeeee;

}

*supponendo una tabella con quattro colonne

style

---

## PAGE 23

Le tabelle

Esempio:

<style>

table {

border-collapse: collapse;  /* Unisce i bordi adiacenti */

width: 100%;               /* Occupa tutto lo spazio disponibile */

table-layout: fixed;       /* Layout fisso per colonne uniformi */

font-family: Arial, sans-serif;

}

th, td {

border: 1px solid #ddd;    /* Bordo sottile grigio */

padding: 12px;             /* Spazio interno per leggibilità */

text-align: left;         /* Allineamento orizzontale */

vertical-align: top;      /* Allineamento verticale */

}

th {

background-color: #f2f2f2; /* Sfondo per intestazioni */

font-weight: bold;

}

</style>

style

---

## PAGE 24

Esercizio

Esercizio 1:

aprire la pagina elenco_chiese.html (dove è riportata una tabella)

personalizzare la tabella con uno stile css

---

## PAGE 25

I form pt.1

I form possono essere personalizzati in CSS tramite diverse regole, le più importanti sono:

● max-width: 600px; /* Larghezza massima del form */

● margin: 150px auto; /* Centra il form orizzontalmente */

● padding: 20px; /* Spaziatura interna */

● border:   1px solid #ccc; /* Bordo grigio chiaro */

Personalizzazione delle label:

● display: block; /* Ogni label su una nuova riga */

● margin-bottom: 8px; /* Spaziatura sotto ogni label */

● font-weight: bold; /* Testo in grassetto per le etichette */

Personalizzazione di input, select e textarea:

● width: 100%; /* Larghezza completa degli elementi di input */

● padding: 8px; /* Spaziatura interna */

● margin-bottom: 16px; /* Spaziatura sotto ogni elemento */

● border: 1px solid #ccc; /* Bordo grigio chiaro */

● border-radius: 4px; /* Angoli arrotondati */

● box-sizing: border-box; /* Include padding e bordo nella larghezza totale */

style

---

## PAGE 26

I form pt.2

I checkboxes, radio buttons si possono personalizzare con:

● margin-bottom: 16px; /* Spaziatura sotto ogni gruppo */

Personalizzazione dei button:

● background-color: #4CAF50; /* Colore di sfondo verde */

● color: white; /* Testo bianco */

● padding: 10px 20px; /* Spaziatura interna */

● border: none; /* Nessun bordo */

● border-radius: 4px; /* Angoli arrotondati */

● cursor: pointer; /* Cambia il cursore al passaggio del mouse */

style

---

## PAGE 27

I CDN

Un Content Delivery Network (CDN) è una rete distribuita di

server (chiamati PoP - Point of Presence) posizionati in

diverse aree geografiche.

● Scopo: Consegnare i contenuti web (immagini, video,

CSS, JavaScript) agli utenti in modo rapido, affidabile e

sicuro.

● Principio Base: L'utente riceve il contenuto dal server

CDN geograficamente più vicino a lui.

● Risultato: Riduzione della latenza (ritardo) e aumento

della velocità di caricamento del sito.

Esempio di CDN: Google Fonts è una vasta libreria di caratteri tipografici (font) con licenza libera e

open-source, fornita gratuitamente da Google.

---

## PAGE 28

Font da Google Fonts

Per inserire un font scelto dal sito Google Fonts, seguire i seguenti passaggi:

1. andare sulla pagina di Google Fonts

2. scegliere il font

3. decidere se scaricarlo o usarlo tramite cdn, nel secondo caso: cliccare su “get embed code”

4. copiare il codice link e inserirlo nell’html, all'interno del tag <head>

5. il codice CSS (la regola @font-face) è già incluso dal link. Bisogna creare una classe nel tuo

file CSS (es. style.css) per applicarlo (es. .mia-classe)

6. tutto ciò che è tra parentesi angolari va sostituito con un valore reale,

es. font-weight: <weight>; va sostituito con un valore font-weight: 300;

7. per applicare il carattere, richiamare la classe sull'elemento HTML desiderato

(es. <p class='mia-classe'>)

---

## PAGE 29

Font da Google Fonts - Esempio 1

1. Inserimento codice di collegamento:

2.

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"

rel="stylesheet">

Applicazioni degli stili CSS:

body {

font-family: 'Roboto', sans-serif;

}

p {

font-weight: 400;

}

---

## PAGE 30

Font da Google Fonts - Esempio 2

1. Inserimento codice di collegamento:

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link

href="https://fonts.googleapis.com/css2?family=Imperial+Script&family=Roboto:ital,wght@0,1

00..900;1,100..900&family=UnifrakturMaguntia&display=swap" rel="stylesheet">

2. Applicazioni degli stili CSS:

.testo-roboto {

font-family: "Roboto", sans-serif; /* crea la font-family Roboto */

font-optical-sizing: auto; /* ottimizzazione automatica */

font-weight: 300; /* spessore */

font-style: normal; /* stile */

font-variation-settings:     "width" 100; /* larghezza del font */

}

---

## PAGE 31

Esercizio

Esercizio 1:

aprire la pagina chiamata gotico-aragonese.html

scegliere un carattere da google fonts

applicare il carattere scelto all’ultimo paragrafo

---

## PAGE 32

Link utili

Specificità: CSS Specifishity

Verifica del supporto delle regole CSS: Can I Use

---

## PAGE 33

Corso CSS Completo

pt.1

FINE

---

