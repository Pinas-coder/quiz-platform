# HTML Semantico.pdf

## PAGE 1

HTML Semantico

Una guida completa ai tag semantici

---

## PAGE 2

Cos'è l'HTML Semantico?

∙ Scrivere codice usando tag che descrivono il ruolo del contenuto

∙ Alternative ai contenitori generici come  div e span

∙ Miglior comprensione per browser, screen reader e motori di ricerca

∙ Struttura logica e non solo aspetto grafico

L’HTML semantico è un modo di scrivere il codice usando tag che descrivono

chiaramente il ruolo del contenuto, invece di usare solo contenitori generici come div e

span per tutto.

Questo aiuta accessibilità, SEO e manutenzione del codice perché browser, screen

reader e motori di ricerca “capiscono” meglio la struttura della pagina.

---

## PAGE 3

Perché l'HTML Semantico è Importante

Accessibilità

Screen reader possono navigare meglio tra sezioni e titoli

SEO

Motori di ricerca capiscono la struttura e l'importanza dei contenuti

Manutenzione

Codice più leggibile e facile da mantenere nel tempo

---

## PAGE 4

Il tag <header>

Intestazione: logo, titolo, navigazione

<header>

<h1>Blog Archeologia</h1>

</header>

---

## PAGE 5

Il tag <nav>

Area di navigazione con link principali

<nav>

<a href="/">Home</a>

<a href="/articoli">Articoli</a>

</nav>

---

## PAGE 6

Il tag <main>

Definisce il contenuto principale e deve essere unico della pagina

<main>

<h1>Domus de Janas</h1>

</main>

---

## PAGE 7

Il tag <section>

L'elemento <section> definisce una sezione in un documento o sezione tematica con titolo proprio

Secondo la documentazione HTML del W3C: "Una sezione è un raggruppamento tematico di contenuti, in

genere con un'intestazione".

Section viene usata per: capitoli, introduzione, notizie, informazioni di contatto

<section>

<h2>Progetti educativi</h2>

</section>

---

## PAGE 8

Il tag <article>

L'elemento <article> specifica contenuti indipendenti e autosufficienti, quindi il contenuto è autonomo e

riusabile.

Un articolo dovrebbe avere senso di per sé e dovrebbe essere possibile distribuirlo indipendentemente dal

resto del sito web. Esempi di dove può essere utilizzato l'elemento <article>: post del forum o del blog,

commenti degli utenti, schede prodotto, articoli di giornale

<article>

<h2>Mont'e Prama</h2>

</article>

---

## PAGE 9

Il tag <aside>

Contenuto laterale e correlato al contenuto principale.

Il contenuto è sul tema dell’articolo, ma staccato da questo si regge come contenuto autonomo.

Le linee guida WAI del W3C ribadiscono che aside va usato per contenuti tangenzialmente correlati all’articolo

principale o alla sezione padre, marcandoli come tali per aiutare gli screen reader.

Esempi: box con citazioni, sidebars, pubblicità, gruppi di elementi di navigazione e altri contenuti che sono

separati dal contenuto principale ma comunque connessi alla pagina

<aside>

<h2>Lo sapevi?</h2>

</aside>

---

## PAGE 10

Il tag <footer>

L'elemento <footer> definisce un piè di pagina per un documento o una sezione.

Un elemento <footer> contiene in genere: informazioni sull'autore, informazioni sul copyright, informazioni di

contatto, mappa del sito.

<footer>

<p>© 2025 Cultura Digitale</p>

</footer>

---

## PAGE 11

I tag <figure> e <figcaption>

Questi tag definiscono contenuti autonomi con didascalia

Il tag <figure> specifica contenuti autosufficienti, come illustrazioni, diagrammi, foto, elenchi di codice, ecc.

Il tag <figcaption> definisce una didascalia per un elemento <figure>.

<figure>

<img src="img.jpg" alt="Immagine">

<figcaption>Didascalia</figcaption>

</figure>

---

## PAGE 12

Tag Semantici Inline

∙ – Date e orari leggibili e machine-readable

∙ – Testo evidenziato e rilevante

∙ – Abbreviazioni e acronimi

∙ – Contenuti espandibili

---

## PAGE 13

Riepilogo Tag Strutturali

∙ – Intestazione pagina/sezione

∙ – Area di navigazione

∙ – Contenuto principale

∙ – Sezione tematica

∙ – Contenuto autonomo

∙ – Contenuto laterale

∙ – Piè di pagina

---

## PAGE 14

Struttura Pagina Semantica

<header><h1>Titolo</h1></header>

<nav><a href="#">Link</a></nav>

<main>

<section><h2>Sezione</h2></section>

<article><h3>Articolo</h3></article>

</main>

<footer><p>Copyright</p></footer>

---

## PAGE 15

Corrispondenze tra tag semantici html e aria

Tag HTML semantico Ruolo ARIA (role = “...”

<header> (figlio diretto di <body>) banner

<nav> navigation

<main> main

<aside> complementary

<footer> (figlio diretto di <body>) contentinfo

---

## PAGE 16

Best Practices

● Usa sempre titoli (h1…h6) in ordine gerarchico

● Un solo main  per pagina

● Scegli tag per il significato, non per lo stile

● Mantieni struttura logica e leggibile

---

## PAGE 17

Grazie!

L'HTML semantico è il fondamento di un Web accessibile, veloce e ben strutturato.

---

