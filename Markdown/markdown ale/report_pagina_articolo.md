# 📄 Report — Progetto: Pagina Articolo Blog

**Data report:** 25 giugno 2026
**Tipologia:** Pagina web statica (HTML + CSS)
**Stato:** 🟡 In sviluppo / Bozza funzionante

---

## 1. Descrizione del Progetto

Pagina web statica per un blog personale, strutturata come articolo singolo. La pagina include un header con navigazione, un'area contenuto con testo e immagine affiancati, e un footer con informazioni di contatto e link utili.

Il progetto è presumibilmente un blog tematico (cucina/pasticceria), come suggerito dall'immagine principale utilizzata (`torta-chantilly.webp`).

---

## 2. File del Progetto

| File | Tipo | Descrizione |
|---|---|---|
| `pagina_articolo.html` | HTML | Struttura principale della pagina |
| `style.css` | CSS | Foglio di stile per layout e grafica |
| `logo.PNG` | Immagine | Logo del blog (header e footer) |
| `torta-chantilly.webp` | Immagine | Foto illustrativa dell'articolo |

---

## 3. Struttura HTML

La pagina è organizzata in un contenitore principale (`#container`) con tre sezioni:

### 3.1 Header (`#header`)
- Logo del blog (sinistra)
- Titolo `<h1>` "Mio articolo"
- Menu di navigazione orizzontale con 4 voci:
  - Home
  - Chi siamo
  - Blog
  - Contatti

### 3.2 Contenuto (`#content`)
- **Layout a due colonne** (50% / 50%):
  - Colonna sinistra: 3 paragrafi di testo (Lorem Ipsum)
  - Colonna destra: immagine `torta-chantilly.webp`
- **Sezione testo libero** sotto le colonne con contenuto Lorem Ipsum strutturato per titoletti (What is Lorem Ipsum?, Why do we use it?, Where does it come from?)

> ⚠️ I titoletti nella sezione inferiore non sono marcati con tag semantici (`<h2>`, `<h3>`), ma sono testo piano dentro un `<div>`.

### 3.3 Footer (`#footer`)
- Logo del blog
- Tre colonne di liste:
  - **CONTATTI** — email, telefono, indirizzo
  - **MENU** — link di navigazione
  - **LINK UTILI** — link generici placeholder

---

## 4. Stile CSS

| Selettore | Proprietà principali |
|---|---|
| `#container` | Larghezza fissa `1200px`, centrato con `margin: auto` |
| `#header` | Flexbox, `align-items: end`, sfondo `beige` |
| `#footer` | Flexbox, sfondo `brown`, testo `white` |
| `.menu-header li` | Inline, sfondo `bisque`, padding `10px` |
| `.li-title` | Grassetto, bordo inferiore, `inline-block` |
| `a:hover` | Colore `blueviolet`, `text-decoration: underline` |

---

## 5. Problemi Rilevati

| # | Problema | Severità | Note |
|---|---|---|---|
| 1 | Larghezza fissa `1200px` sul container | 🟠 Media | Non responsivo su schermi piccoli |
| 2 | Immagine referenziata come `logo.PNG` (maiuscolo) | 🟡 Bassa | Può causare errori su server Linux (case-sensitive) |
| 3 | Titoletti nella sezione inferiore senza tag semantici | 🟡 Bassa | Impatto su accessibilità e SEO |
| 4 | Contenuto ancora placeholder (Lorem Ipsum) | 🔵 Info | Da sostituire con contenuto reale |
| 5 | Dati di contatto visibili nel codice sorgente HTML | 🟡 Bassa | Email e telefono esposti senza protezione |
| 6 | `style` inline presenti nel HTML | 🟡 Bassa | Meglio spostare tutto in `style.css` per manutenibilità |

---

## 6. Suggerimenti di Miglioramento

- **Responsività:** aggiungere `max-width: 1200px` e `width: 100%` al container, e usare media queries per il layout a due colonne
- **Semantica HTML:** sostituire i titoletti testuali con `<h2>` / `<h3>` appropriati
- **Normalizzazione CSS:** eliminare gli stili inline dall'HTML e centralizzarli nel CSS
- **Logo:** uniformare il nome del file (es. sempre `logo.png` in minuscolo)
- **Contenuto:** sostituire il Lorem Ipsum con il testo reale dell'articolo

---

## 7. Stato Avanzamento

| Area | Completamento |
|---|---|
| Struttura HTML | ✅ Completata |
| Stile CSS base | ✅ Completato |
| Contenuto reale | ❌ Da inserire |
| Responsività | ❌ Da implementare |
| SEO / Meta tag | ❌ Da aggiungere |
| Test su mobile | ❌ Da eseguire |

---

*Report generato automaticamente — Report Manager v1.0*
