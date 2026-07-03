# Le pagine Web - html v2.pdf

## PAGE 1

Fondamenti di Html,

Css e Javascript

---

## PAGE 2

I tag

L'HTML è il linguaggio base per creare la struttura delle pagine web. Serve a definire contenuti come testi, immagini, link, tabelle e moduli, ed è interpretato dai browser per

visualizzare le pagine su Internet.

HTML sta per HyperText Markup Language, ovvero linguaggio di marcatura per ipertesti. È un linguaggio di pubblico dominio, sviluppato dal W3C, e la sua sintassi è composta

da tag racchiusi tra parentesi angolari  (< >) che descrivono la funzione di ogni elemento nella pagina

Quindi abbiamo la struttura del tag o elemento:

● l’apertura del tag <NomeDelTag>

● il contenuto

● la chiusura del tag </NomeDelTag>

Esempio:

Apertura tag Contenuto Chiusura tag

<h1> La mia prima intestazione </h1>

<p> Il mio primo paragrafo </p>

<br> niente niente

---

## PAGE 3

Le sezioni principali

La dichiarazione <!DOCTYPE> rappresenta il tipo di documento e aiuta i browser a visualizzare correttamente le pagine

web.

Deve apparire una sola volta, nella parte superiore della pagina (prima di qualsiasi tag HTML)

Il tag <html> è il tag contenitore principale, al suo interno ci va tutto il codice della pagina

Altri due macrocontenitori sono:

<head> è la sezione dei metadati, del titolo della pagina, dei link CSS e degli script. La sezione non è visibile all’utente,

ma è fondamentale per il funzionamento della pagina e per l’indicizzazione da parte dei motori di ricerca

Dentro la sezione head va inserito il titolo della pagina:

<title>Le chiese romaniche</title>

<body> è il contenitore di tutto il contenuto visibile, titoli, paragrafi, immagini, ecc.

---

## PAGE 4

I commenti, i titoli e i paragraﬁ

Il tag <!--  commento  --> consente di inserire i commenti

I tag da <h1> a <h6> definiscono i titoli dal più importante al meno importante

Il tag <p> invece è il tag per scrivere i paragrafi

Il tag <br> è un tag particolare perchè ha un’apertura ma non una chiusura, e serve per andare a capo

---

## PAGE 5

Primo esempio di html

<!DOCTYPE html>

<html>

<head>

<title>Titolo della pagina</title>

</head>

<body>

<h1>Titolo 1</h1>

<h2>Titolo 2</h2>

<p>Primo     Paragrafo      </p>

<p>Un altro Paragrafo

di prova. Gli spazi e i ritorni a capo

vengono ignorati</p>

</body>

</html>

---

## PAGE 6

Il sito web

Un sito web è un insieme di pagine collegate tra loro tramite link ipertestuali, che permettono una navigazione non

lineare tra contenuti testuali, visivi e multimediali. Questo sistema di collegamenti è detto ipertesto.

Un sito web è una raccolta di documenti digitali accessibili tramite Internet, organizzati in pagine collegate tra loro.

Ogni pagina è scritta in HTML (o altri linguaggi) e può contenere:

● Testo, immagini, video, audio

● Collegamenti (link) ad altre pagine o risorse

● Strutture interattive (form, pulsanti, menu)

I siti web sono ospitati su server e identificati da un indirizzo univoco (URL), come www.example.com. Possono essere

statici (contenuti fissi) o dinamici (contenuti generati in tempo reale).

I nomi delle pagine devono seguire delle regole:

● non devono contenere spazi

● non devono contenere caratteri riservati (/\:* ecc)

● i nomi sono case sensitive

---

## PAGE 7

Esercizio: struttura pagina

Esercizio 1:

● Sulla base del testo il “Il romanico in Sardegna - versione 1.odt”, prendi il testo in formato odt e

tramite l’elaboratore di testi crea una struttura di titoli e sottotitoli.

● Crea un sommario nella prima pagina del testo

● Sulla base di questo testo, riporta il testo e la sua struttura in una pagina html chiamata index.html

Per creare la pagina web utilizza la struttura appena vista e i tag <p> e <h1>...<h6>

---

## PAGE 8

Gli attributi dei tag

Gli elementi possono contenere gli attributi che forniscono informazioni aggiuntive agli elementi.

Gli attributi vanno inseriti dentro il tag iniziale e hanno la struttura nome=”valore”.

Gli attributi più importanti sono: href, src, alt, style, lang, title

Per esempio per inserire un link si usa:

<a href="https://www.fondazioneromanicosardegna.it/">Visita: Fondazione del Romanico in Sardegna</a>

---

## PAGE 9

I link pt.1

Come anticipato per creare un link si usa il tag <a> con i suoi attributi:

<a href="https://www.fondazioneromanicosardegna.it/">Visita: Fondazione del Romanico in Sardegna</a>

Il tag di riferimento per creare il link è <a></a>

per indicare il collegamento alla pagina si usa l’attributo href=”” che va inserito dentro il tag iniziale <a> quindi: <a href=””>

Il valore di href sarà: "https://www.fondazioneromanicosardegna.it/"

Tra il tag iniziale e finale si inserisce il titolo del link: Fondazione del Romanico in Sardegna

Per cui la struttura completa sarà:

<a href="https://www.fondazioneromanicosardegna.it/">Visita: Fondazione del Romanico in Sardegna</a>

Ai fini dell’accessibilità del sito seguire queste indicazioni;

● evitare descrizioni generiche (clicca qui, link o simili)

● non inserire l’url del link

● fare in modo che il link sia riconoscibile

---

## PAGE 10

I link pt. 2 - percorsi assoluti e relativi

L’url inserito nel link può essere:

● assoluto

● relativo

L’url assoluto:

L'URL assoluto fornisce il percorso completo e autonomo della risorsa. Include ogni parte dell'indirizzo web. Le caratteristiche:

● Indipendente: Funziona indipendentemente dalla pagina in cui è inserito

● Struttura Completa: Include protocollo, dominio e percorso

● Uso: Obbligatorio quando si collega una risorsa che si trova su un dominio diverso dal tuo (link esterni)

● Esempio: https://www.miosito.it/index.htm

L’url relativo:

L'URL relativo specifica il percorso della risorsa rispetto alla pagina corrente (la pagina in cui è inserito il link). Non include il protocollo o il

nome del dominio.Le caratteristiche:

● Dipendente: Il browser ha bisogno di conoscere l'URL della pagina corrente per calcolare l'indirizzo finale

● Struttura Parziale: Contiene solo il percorso, o una parte del percorso, all'interno dello stesso sito

● Uso: Ideale per i collegamenti interni (link all'interno dello stesso sito)

● Esempio: index.htm

---

## PAGE 11

I link pt.3 - l’attributo target

Di default, quando si clicca un link, la pagina viene aperta sulla stessa scheda/finestra del browser.

Specificando il target si può decidere dove far aprire la nuova pagina:

● _self: la stessa scheda/pagina dove si è cliccato

● _blank: una diversa scheda/pagina

● _parent: viene aperta in una nuova scheda/pagina indicata (parent); se non ci sono parent si comporta

come _self

● _top: apre il link nella finestra/scheda principale, uscendo da tutti gli eventuali frame

---

## PAGE 12

Esercizio: i link

Esercizio 2:

● Nel file index.html già creato inserisci i link seguendo le istruzioni successive

● Apri il testo il “Il romanico in Sardegna - versione 2.odt”, e tutto ciò che è sottolineato sarà un link.

● Cerca su internet  i siti che parlano dell’argomento e inserisci i link che verrà aperto in una nuova

pagina

Per creare i link usa il tag <a> come visto negli esempi

---

## PAGE 13

Lo stile del testo - pt.1

Lo stile del testo può essere impostato tramite gli attributi del tag <style> :

<nome_del_tag style=”proprietà:valore”>...

La coppia “proprietà:valore” saranno proprietà e valore di CSS

Esempi di applicazione dello stile:

● Stile di sfondo: <body style="background-color:yellow;"></body>

● Sile del testo: <p style="color:blue;">Colore del paragrafo</p>

● Tipo di font: <p style="font-family:verdana;">Carattere del paragrafo</p>

● Dimensione del font: <p style="font-size:160%;">Dimensioni del paragrafo</p>

● Allineamento del testo: <p style="text-align:center;">Paragrafo centrato</p>

---

## PAGE 14

Lo stile del testo - pt.2 - I colori

I colori i possono esprimere in termini di:

● testo: <p style="color: red;">Testo di colore rosso</p>

● esadecimale: <p style="color: #4169E1;">Testo di colore blu reale</p>

● RGB: <p style="color: rgb(0, 128, 0);">Testo di colore verde standard</p>

Queste regole si possono applicare in tutti i tag dove si usa lo style color (paragrafi, titoli, background…)

Nella prospettiva dell’accessibilità occorre verificare accuratamente che vi sia sufficiente contrasto tra il colore di sfondo e il

colore del carattere.

W3C ha previsto un contrasto minimo 4,5:1 per il testo normale e di 3:1 per il testo più grande (uguale o superiore a 18,6 px in

grassetto, oppure  24 px normale)

Per verificare il contrasto secondo i parametri w3c si può far riferimento a:

● Webaim: Contrast Checker

● Coolors: verifica Contrasto Colore

● Siegemedia: Contrast Ratio

---

## PAGE 15

Lo stile del testo - pt.3 - Il tipo di caratteri

I caratteri tipografici, comunemente detti “font”, sono l’insieme delle lettere, numeri e simboli con uno stile grafico unitario che formano la base della

comunicazione visiva sia su carta sia sul web.

La “famiglia tipografica” è una categoria che raggruppa più caratteri (font) con stile e caratteristiche comuni, pensate per scopi e contesti differenti. Per

esempio, tra le famiglie più comuni:

Le famiglie principali sono:

● Serif (con grazie): caratteri che presentano dei piccoli allungamenti o abbellimenti alle estremità delle lettere, chiamati “grazie” o serif.

Conferiscono un aspetto classico, elegante e facilitano la lettura nei testi lunghi stampati, perché aiutano l’occhio a seguire le righe. Esempi: Times

New Roman, Garamond, Georgia, Bodoni.

● Sans-serif (senza grazie): caratteri privi di grazie, dal design pulito e moderno, molto leggibili sullo schermo e adatti a titoli, interfacce digitali e siti

web. Esempi: Arial, Helvetica, Verdana, Tahoma.

● Monospace: caratteri in cui ogni lettera occupa lo stesso spazio orizzontale, spesso impiegati per codice sorgente e tabelle tecniche; migliorano

l’allineamento. Esempi: Courier New, Consolas, Lucida Console.

● Script/Handwritten: riproducono la scrittura a mano, trasmettendo eleganza, creatività o informalità a seconda dei casi. Si usano per biglietti,

inviti, loghi o titoli particolari. Esempi: Brush Script, Lobster, Dancing Script.

● Display/Decorativi: font creativi e decorativi, spesso pensati per richiamare attenzione con uno stile unico; sono ideali per titoli di impatto, grafica

pubblicitaria e logotipi ma sconsigliati per testi lunghi. Esempi: Comic Sans MS, Bangers, Cooper Black.

Nella prospettiva dell’accessibilità, i caratteri consigliati sono quelli della famiglia Sans-serif in quanto più puliti e quindi meglio leggibili

Nel definire lo stile del carattere conviene far riferimento al carattere e alla sua famiglia, in modo che se il carattere non è installato nella macchina si può far

riferimento ad un altro carattere della stessa famiglia:  <p style="font-family: Arial, sans-serif;">Carattere del paragrafo</p>

---

## PAGE 16

Lo stile del testo - pt.4 - La dimensione dei

caratteri

La dimensione del carattere font-size può essere espresso in vari modi:

● dimensioni assolute (pixel - px): font-size: 16px; è fisso, preciso, non scala, adatto per elementi che devono mantenere

una dimensione fissa

● dimensioni assolute (punti - pt): font-size: 24pt; stesse caratteristiche del pixel; pt è usato principalmente per la stampa;

1 pt = 1/72 di pollice

● dimensioni relative (em): è relativo al font parente:

○ va fissata la dimensione base: font-size: 16px; a livello di genitore

○ va utilizzata come unità relativa rispetto alla base:

■ font-size: 1.5em; /* 24px (16 × 1.5) */

■ font-size: 0.8em; /* 19.2px (24 × 0.8) */

○ il valore cambia sulla base di dove inseriamo l’elemento parente; se abbiamo diversi elementi annidati (es. div) il carattere si

moltiplica ad ogni livello e genera effetti inaspettati

● dimensioni relative (rem): è relativo al font root (html)

○ va fissata la dimensione base: font-size: 16px; a livello di tag root (html)

○ va utilizzata come unità relativa rispetto alla base:

■ font-size: 1.5rem; /* 24px (16 × 1.5) */

■ font-size: 0.8rem; /* 19.2px (24 × 0.8) */

○ non ci sono effetti indesiderati perchè l’elemento base è la root, ossia il tag html che è unico

● dimensioni relative (%): è simile al em ma espresso in termini percentuali

---

## PAGE 17

Lo stile del testo - pt.5 - La formattazione

Gli elementi di formattazione più importanti sono:

● <b> - Bold text – grassetto

● <strong> - Important text – testo importante

● <i> - Italic text - corsivo

● <em> - Emphasized text – testo con enfasi (simile al corsivo)

● <mark> - Marked text – testo evidenziato (evidenziatore giallo)

● <small> - Smaller text – testo più piccolo

● <del> - Deleted text – testo cancellato (barrato)

Per inserire la formattazione:

<p> Testo normale più il <b>Grassetto</b></p>

Per questioni di accessibilità attenzione usa il grassetto con molta attenzione e quando veramente necessario

---

## PAGE 18

Esercizio: formattazione del testo

Esercizio 3:

● Nel file index.html già creato inserisci la formattazione seguendo le istruzioni successive

● Apri il testo il “Il romanico in Sardegna - versione 3.odt”, e il paragrafo preceduto dall’indicazione del

colore tra parentesi quadre andrà formattato con quel colore

● Verificare il contrasto prima di inserire il colore, altrimenti scegliere un’alternativa

Per creare i link usa il tag <p style="color:blue;">Colore del paragrafo</p>

---

## PAGE 19

Le immagini - pt.1

Per inserire le immagini si usa il tag <img>

<img src="romanico.jpg">

L’attributo obbligatorio è il src=”” che specifica il percorso dell’immagine

Gli altri attributi più usati nel tag immagine sono:

● alt=”” specifica il testo alternativo; è fondamentale per l’accessibilità del sito

● width=”” specifica la larghezza dell’immagine

● height=”” specifica l’altezza dell’immagine

● style=”” specifica lo stile; tramite lo stile si possono specificare anche width e height

<img src="romanico.jpg" alt="Chiesa romanica" style="width:500px;height:600px;">

<img src="romanico.jpg" alt="Chiesa romanica" width="500" height="600">

Le immagini possono anche essere dei cliccabili e quindi usate come link:

<a href="default.asp">

<img src="bottone.gif" alt="Link alla home" style="width:42px;height:42px;">

</a>

---

## PAGE 20

Le immagini - pt.2 - i formati

I formati di immagine più usati sono:

● ico - icona della pagina

● gif - colori limitati (max 256), supporta trasparenza e animazioni semplici

● jpeg - compressione con perdita (lossy), ottimo per foto, non supporta trasparenza

● png - compressione senza perdita (lossless), supporta trasparenza (canale alpha), qualità elevata

● svg - formato vettoriale, scalabile senza perdita di qualità, modificabile via CSS/JS

---

## PAGE 21

Le immagini - pt.3 - copyright

Le immagini reperibili in rete possono essere:

● immagini protette da copyright

○ non possono essere usate liberamente

○ l’uso non autorizzato può comportare rischi legali

● immagini con licenze aperte

○ l’autore concede diritti specifici tramite una licenza

○ possono essere usate, modificate e/o condivise a determinate condizioni

● immagini completamente gratuite

Una delle licenze più comuni è la Creative Commons (CC)

Licenza Uso consentito Restrizioni

CC BY Uso e modifica Citare l’autore + posso creare nuova licenza

CC BY-SA Uso e modifica Citare + stessa licenza

CC BY-NC Solo uso non commerciale Citare l’autore

CC0 Nessuna restrizione Nessuna attribuzione richiesta

---

## PAGE 22

Le immagini - pt.4 - copyright

Esistono dei siti dove trovare immagini completamente gratuite:

● Pexels

● Pixabay

● Unsplash

Google e altri motori di ricerca consentono di ricercare immagini utilizzando un filtro per licenza.

● Prima di eseguire la ricerca attivare il filtro usando Strumenti > Licenze commerciali e altre licenze

● Scegliere la licenza adatta

● Una volta inserita l’immagine indicare nella didascalia quanto richiesto dalla licenza (es. citare l’autore

e il tipo di licenza)

---

## PAGE 23

Le immagini - pt.5 - le didascalie

Il tag <figure> serve per raggruppare contenuti visivi o multimediali (immagini, grafici, video, frammenti di codice, ecc.) insieme

alla loro didascalia descrittiva, che viene inserita con il tag <figcaption>.

Quindi <figure> raggruppa:

● immagine

● didascalia

Esempio:

<figure>

<img src="immagini/mappa-sardegna.png" alt="Mappa geografica della Sardegna">

<figcaption>Mappa dell'Italia con le principali regioni evidenziate.</figcaption>

</figure>

---

## PAGE 24

Esercizio: immagini

Esercizio 4:

● Modifica il file index.html che hai creato prima, inserendo le immagini.

● Per ogni titolo scaricare in locale un’immagine coerente da inserire nella cartella principale, prestando

attenzione alle licenze

● Inserire l’immagine nella pagina basandosi sul file “Il romanico in Sardegna - versione 4.odt”

Esercizio 5:

● Cercare delle immagini con licenza Creative Commons e inserire immagini e didascalie tramite il tag

<figure>

---

## PAGE 25

Elenchi puntati e numerati - pt.1

Nell’html possono essere inseriti

● <ul> elenchi puntati (unordered list) - si usano per creare liste dove l’ordine non è importante

● <ol> elenchi numerati (ordered list) - si usano per creare liste dove l’ordine è fondamentale

Esempio di elenco puntato:

<ul>

<li>basalto scuro del Logudoro</li>

<li>calcare chiaro del Campidano</li>

<li>trachite rossa del Meilogu</li>

</ul>

Esempio di elenco numerato:

<ol>

<li>Passaggio 1</li>

<li>Passaggio 2</li>

<li>Passaggio 3</li>

</ol>

Ai fini dell’accessibilità, usare sempre elenchi puntati e numerati e mai punti, numeri o trattini, inseriti manualmente

---

## PAGE 26

Esercizio: liste

Esercizio 5:

Nella pagina index.htm inserire un elenco puntato  nei paragrafi 1.1.2 e 1.2.1

---

## PAGE 27

Le tabelle - pt.1

Le tabelle permettono di visualizzare le informazioni in maniera chiara e organizzata, tramite righe e colonne

Le tabelle sono formate da:

● celle (table data): <td>

● righe (table row): <tr>

● intestazioni (table headers): <th>

● descrizione della tabella: <caption>

---

## PAGE 28

Le tabelle - pt.2 - un esempio

<table>

<tr>

<th>Alunno 1</th>

<th>Alunno 2</th>

<th>Alunno 3</th>

</tr>

<tr>

<td>Andrea</td>

<td>Carlo</td>

<td>Giulio</td>

</tr>

<tr>

<td>18</td>

<td>19</td>

<td>20</td>

</tr>

</table>

---

## PAGE 29

Le tabelle - pt.3 - un esempio accessibile

Ai fini dell’accessibilità è utile inserire alcuni elementi alla tabella:

● lo scope: serve a chiarire meglio agli screen reader la funzione del tag

● il tabindex: serve a rendere navigabile la tabella da tastiera

● thead, tbody, tfoot: rappresentano la struttura semantica della tabella

<table>

<thead>

<tr>

<th>Alunno / Materia</th>

<th scope="col">Alunno 1</th>

<th scope="col">Alunno 2</th>

<th scope="col">Alunno 3</th>

</tr>

</thead>

<tbody>

<tr>

<th scope="row">Nome</th>

<td>Andrea</td>

<td>Carlo</td>

<td>Giulio</td>

</tr>

<tr>

<th scope="row">Età</th>

<td>18</td>

<td>19</td>

<td>20</td>

</tr>

</tbody>

</table>

---

## PAGE 30

Esercizio: tabelle

Esercizio 6:

● Apri il file “Il romanico in Sardegna - versione 5.odt” e con le informazioni riportate compila un foglio

di calcolo chiamato “elenco chiese romaniche”

● Ordina per nome le località

● Crea una nuova pagina html chiamata elenco_chiese.html e inserisci la tabella come indicato nel foglio

di calcolo

● Nella pagina principale (index.html) inserisci un nuovo titolo: 4 Elenco chiese e inserisci il link alla

nuova pagina

---

