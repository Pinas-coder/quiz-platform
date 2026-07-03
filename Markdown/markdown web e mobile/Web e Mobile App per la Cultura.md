# Web e Mobile App per la Cultura.pdf

## PAGE 1

Web e Mobile App per

la Cultura

Capire come nasce una pagina web e come i linguaggi HTML, CSS e JavaScript collaborano per renderla informativa, bella e interattiva.

---

## PAGE 2

Fondamenti di HTML, CSS e JavaScript

Perché imparare a creare una pagina web?

● Oggi ogni museo, archivio o comune ha bisogno di un sito o un’app

per comunicare con i cittadini.

● Le competenze web sono fondamentali anche nella PA digitale.

● Creare una pagina web significa comunicare cultura, non solo

scrivere codice.

💡

Esempio: il portale del Museo Egizio di Torino

(https://museoegizio.it/scopri/tour-virtuali/) permette la visita virtuale grazie

a semplici tecnologie web.

---

## PAGE 3

Fondamenti di HTML, CSS e JavaScript

Anatomia di una Pagina Web

● Tre linguaggi che lavorano insieme:

LinguaggioFunzione Esempio

HTML Struttura e contenuto“Il testo e le immagini della pagina”

CSS Aspetto grafico “Colori, font, spazi, layout”

JavaScript Interattività “Clic, menu, animazioni”

---

## PAGE 4

Fondamenti di HTML, CSS e JavaScript

Cos’è l’HTML

📖

HyperText Markup Language = linguaggio di marcatura

Serve per descrivere il contenuto di una pagina.

👉

È come la struttura di un libro: titoli, paragrafi, immagini, link.

<h1>Museo Archeologico di Cagliari</h1>

<p>Il museo raccoglie reperti nuragici e romani.</p>

<a href="https://museoarcheocagliari.beniculturali.it">Sito

ufficiale</a>

---

## PAGE 5

Fondamenti di HTML, CSS e JavaScript

Cosa contiene una pagina HTML

Ogni pagina web è un semplice file di testo (es. index.html) composto da tag

che definiscono la struttura del contenuto.

💡

I tag sono istruzioni che dicono al browser come visualizzare testi, immagini

e link.

Strumenti: Visual Studio Code o un editor online (es. https://jsfiddle.net)

---

## PAGE 6

Fondamenti di HTML, CSS e JavaScript

Esempio di codice base

<!DOCTYPE html>

<html lang="it">

<head>

<meta charset="UTF-8">

<title>Museo Archeologico di Cagliari</title>

</head>

<body>

<h1>Benvenuti al Museo Archeologico di Cagliari</h1>

<p>Il museo racconta la storia della Sardegna attraverso reperti nuragici e romani.</p>

<a href="https://museoarcheocagliari.beniculturali.it">Visita il sito ufficiale</a>

</body>

</html>

---

## PAGE 7

Fondamenti di HTML, CSS e JavaScript

Tag HTML più comuni

Tag Significato Esempio visivo

<h1> Titolo principale “Museo di Cagliari”

<p> Paragrafo di testo “Il museo è situato…”

<img> Immagine Foto dell’edificio

<a> Link ipertestuale “Scopri di più”

<ul> / <li> Elenchi Elenco delle sezioni del museo

💡

Buona pratica: usare tag semantici (<header>, <main>, <footer>) per

migliorare l’accessibilità e la lettura automatica (screen reader).

---

## PAGE 8

Fondamenti di HTML, CSS e JavaScript

CSS: dare stile alla pagina

🎨

CSS = Cascading Style Sheets

Permette di controllare colori, font, margini e layout.

Separa il contenuto (HTML) dalla grafica.

Esempio:

body { background-color: #f9f9f9; font-family: 'Georgia'; }

h1 { color: darkblue; text-align: center; }

p { line-height: 1.5; }

🔹

Effetto visivo: confronto tra la stessa pagina “prima e dopo” il CSS. 💡

Caso reale: i siti

della PA (es. comuni.it) devono seguire linee guida AgID anche per colori e contrasti

accessibili.

---

## PAGE 9

Fondamenti di HTML, CSS e JavaScript

Principi di Accessibilità e Responsive Design

● I siti devono essere leggibili su ogni dispositivo (PC, tablet, smartphone).

● Il design “responsive” si adatta automaticamente alla dimensione dello

schermo.

● Le linee guida AgID e WCAG impongono contrasti di colore e testi

alternativi per immagini.

💡

Esempio: Il sito di The Big Wave (www.thebigwave.eu) cambia disposizione

dei contenuti se visualizzato da mobile.

---

## PAGE 10

Fondamenti di HTML, CSS e JavaScript

JavaScript: la parte viva del sito

🧠

Linguaggio di programmazione che aggiunge interattività al web.

Consente di reagire a eventi come clic, movimento del mouse, inserimento dati.

Esempio semplice:

<button onclick="alert('Benvenuto nel museo digitale!')">

Scopri una curiosità

</button>

💡

Caso d’uso reale: i pulsanti “Prenota ora”, “Calcola percorso”, o “Visualizza su mappa”

dei portali turistici usano JavaScript.

---

## PAGE 11

Fondamenti di HTML, CSS e JavaScript

Come lavorano insieme HTML, CSS e JS

HTML → struttura base

CSS → stile e presentazione

JS → interazione e dinamismo

🎯

Insieme danno vita all’esperienza utente.

💡

Esempio:

Una scheda culturale interattiva di un museo digitale:

● HTML: testo e immagini dell’opera

● CSS: colori e layout

● JS: pulsante “Scopri di più” che mostra dettagli aggiuntivi

---

## PAGE 12

Fondamenti di HTML, CSS e JavaScript

Creazione del file CSS

● Nella stessa cartella del progetto crea un file chiamato style.css

● All’interno, inserisci qualche regola di base, per esempio:

body {

background-color: #f5f5f5;

font-family: 'Georgia', serif;

}

h1 {

color: darkblue;

text-align: center;

}

---

## PAGE 13

Fondamenti di HTML, CSS e JavaScript

Collegamento dal file HTML

Nel file index.html, dentro il tag <head>, aggiungi la riga seguente:

<link rel="stylesheet" href="style.css">

💡

Come funziona

● Il tag <link> dice al browser: “usa questo foglio di stile esterno”.

● L’attributo rel="stylesheet" indica che si tratta di un file di stile.

● href specifica il percorso del file CSS (in questo caso, nella stessa

cartella).

---

## PAGE 14

Fondamenti di HTML, CSS e JavaScript

Mini esercitazione in aula passo-passo (15 min)

Obiettivo: comprendere la logica della struttura di una pagina web.

Scriviamo insieme un file index.html con:

● Titolo dell’opera o monumento

● Breve descrizione

● Link a un sito esterno

● 1 immagine

💡

Esempio output:

“Museo Archeologico di Cagliari” con testo e foto centrata.

---

## PAGE 15

Fondamenti di HTML, CSS e JavaScript

Dalla teoria alla pratica

Domande guida per riflettere:

● Cosa distingue un sito ben fatto da uno difficile da usare?

● Come possiamo rendere più accessibili i siti culturali?

● Cosa ci serve per costruire una piccola app mobile che comunichi la

cultura del territorio?

💬

Discussione aperta – brainstorming sui siti dei musei conosciuti.

---

## PAGE 16

Fondamenti di HTML, CSS e JavaScript

Anteprima del Laboratorio

📍

Nella prossima parte della lezione:

1. Costruiremo insieme una mini-pagina culturale

2. Aggiungeremo colori e stile con CSS

3. Inseriremo un pulsante interattivo con JavaScript

💡

Obiettivo finale: “Dare vita digitale” a un bene culturale della

Sardegna.

---

