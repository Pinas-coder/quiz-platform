# 📚 Piattaforma Quiz — Guida al Setup

## Struttura dei file

```
quiz-platform/
├── index.html      ← Apri questo con Live Server
├── style.css       ← Design e layout
├── app.js          ← Logica applicazione (non modificare)
├── realquiz.js     ← Logica quiz reale (non modificare)
├── db.json         ← ⭐ IL TUO FILE — qui inserisci tutti i contenuti
└── README.md
```

---

## ⚠️ Come aprire il sito (importante)

Il sito usa `fetch()` per leggere `db.json`, quindi **non funziona con doppio clic** su `index.html`.

**Procedura con VS Code + Live Server:**
1. Installa l'estensione **Live Server** (Ritwick Dey) da VS Code Extensions
2. Apri la cartella `quiz-platform/` in VS Code (`File → Apri cartella`)
3. Clic destro su `index.html` → **Open with Live Server**
4. Il browser si apre su `http://127.0.0.1:5500/index.html` ✅

---

## Come lavorare su `db.json`

Il file è diviso in 5 sezioni. Modifichi **solo questo file** per aggiungere contenuti.

---

### 1. `meta` — Informazioni corso

```json
"meta": {
  "corso": "Nome del tuo corso",
  "ente": "Nome dell'ente",
  "sigla": "SIGLA"
}
```

Poi aggiorna i testi `[NOME CORSO]`, `[ENTE]`, `[SIGLA]` in `index.html`.

---

### 2. `materie` — Elenco materie

```json
"materie": [
  { "key": "storia",  "label": "Storia dell'Arte" },
  { "key": "diritto", "label": "Diritto ed Economia" }
]
```

- `key`: identificatore interno (minuscolo, senza spazi, senza accenti)
- `label`: testo che appare nell'interfaccia

---

### 3. `domande` — Domande quiz

```json
"domande": [
  {
    "m":    "storia",
    "diff": "base",
    "q":    "Testo della domanda?",
    "opts": ["Risposta A", "Risposta B", "Risposta C", "Risposta D"],
    "ans":  0,
    "exp":  "Spiegazione mostrata dopo la risposta."
  }
]
```

| Campo  | Valori possibili | Obbligatorio |
|--------|-----------------|--------------|
| `m`    | key di una materia | ✅ |
| `diff` | `"base"`, `"medio"`, `"avanzato"` | ✅ |
| `q`    | testo domanda | ✅ |
| `opts` | array di 4 stringhe | ✅ |
| `ans`  | `0`, `1`, `2` o `3` (indice risposta corretta) | ✅ |
| `exp`  | spiegazione | ✅ |
| `code` | blocco codice opzionale (stringa) | ❌ |

---

### 4. `teoria` — Contenuti teorici

```json
"teoria": {
  "storia": {
    "desc": "Breve descrizione della sezione",
    "html": "<div class=\"concept-card\"><h3>Titolo</h3><p>Testo...</p></div>"
  }
}
```

**Tag HTML disponibili nel campo `html`:**

| Tag | Uso |
|-----|-----|
| `<div class=\"concept-card\">` | Card teoria |
| `<h3>` | Titolo card |
| `<p>` | Paragrafo |
| `<ul>`, `<ol>`, `<li>` | Elenchi |
| `<strong>` | Grassetto |
| `<em>` | Corsivo |
| `<code>` | Codice inline |
| `<div class=\"tag-row\">` | Contenitore tag |
| `<span class=\"tag\">` | Tag grigio |
| `<span class=\"tag accent\">` | Tag blu (principale) |
| `<div class=\"concept-grid\">` | Griglia 2 colonne |

> ⚠️ Nel JSON le virgolette dentro le stringhe HTML vanno precedute da `\`  
> Esempio: `class=\"concept-card\"` non `class="concept-card"`

---

### 5. `documentazione` — Documentazione integrale

```json
"documentazione": {
  "storia": {
    "desc": "Documentazione dal materiale ufficiale del docente.",
    "html": "<div class=\"doc-card\"><h3>Modulo 1</h3><h4>Sezione 1.1</h4><p>Testo...</p></div>"
  }
}
```

**Tag aggiuntivi rispetto alla teoria:**

| Tag | Uso |
|-----|-----|
| `<div class=\"doc-card\">` | Card documentazione |
| `<h4>` | Sottotitolo sezione |

---

### 6. `quiz_reale` — Domande ufficiali del docente (opzionale)

```json
"quiz_reale": {
  "storia": [
    {
      "n":    1,
      "q":    "Testo della domanda ufficiale?",
      "opts": ["A", "B", "C", "D"],
      "ans":  2,
      "exp":  "Spiegazione della risposta corretta."
    }
  ]
}
```

Il quiz reale appare nella sidebar solo se questa sezione contiene dati.

---

## Validare il JSON

Prima di salvare, verificare che il JSON sia valido su [jsonlint.com](https://jsonlint.com) — un errore di sintassi (es. virgola mancante) impedisce il caricamento del sito.

---

*Struttura progettata per essere ampliata sessione per sessione.*

---

## Script di supporto in JavaScript

I vecchi helper Python sono stati affiancati da versioni JavaScript nella radice del progetto:

- `update_ia_per_la_cultura.js`
- `update_cybersecurity_section.js`
- `convert_pdfs_to_md.js`

Per eseguirli serve Node.js.

---

## Regole per i nuovi markdown di cybersecurity

Per ottenere un buon inserimento nel sito, prepara i file Markdown così:

- rimuovi nomi di autori, docenti o firme iniziali
- usa un titolo chiaro in cima al file con `#`
- separa i blocchi con `---`
- preferisci paragrafi brevi e leggibili, non testo spezzato su una parola per riga
- usa elenchi con `-` o `*` quando serve
- evita tabelle complesse e formattazioni troppo elaborate
- controlla che gli accenti e i caratteri speciali siano salvati correttamente in UTF-8

Se segui queste regole, la documentazione viene importata nel sito in modo più pulito e coerente.
