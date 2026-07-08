# 📚 Piattaforma Quiz — Architettura multipagina

Ogni sezione è una pagina HTML indipendente, collegata alla Home tramite un menu semplice in alto (nessuna sidebar).

## Struttura a cartelle

```
root/
├── db.json              ← database unico
├── webpages/             ← tutte le pagine HTML
│   ├── index.html
│   ├── documentazione.html
│   ├── teoria.html
│   ├── quiz.html
│   ├── quiz_reali.html
│   └── progetti.html
├── scripts/              ← tutta la logica JS
│   ├── common.js         ← caricamento condiviso di db.json
│   ├── doc.js
│   ├── teoria.js
│   ├── quiz.js
│   ├── realquiz.js
│   └── progetti.js
└── design/               ← stile e tema
    ├── style.css
    └── theme.js
```

I percorsi nei file HTML sono **assoluti dalla root** (`/design/...`, `/scripts/...`, `/db.json`).

⚠️ **Importante per Live Server:** in VS Code devi aprire come cartella (workspace)
la cartella **principale** (quella che contiene `db.json`, `webpages/`, `scripts/`, `design/`),
non la sottocartella `webpages/`. Altrimenti i percorsi assoluti non troveranno i file.
Poi apri `webpages/index.html` col tasto destro → "Open with Live Server".

## File
- `index.html` — landing page con card verso le altre pagine
- `documentazione.html` + `doc.js` — griglia materie → dettaglio documentazione (scroll)
- `teoria.html` + `teoria.js` — griglia materie → dettaglio teoria (scroll)
- `quiz.html` + `quiz.js` — quiz per materia/misto + Modalità Esame (tab in alto)
- `quiz_reali.html` + `realquiz.js` — griglia materie con quiz reale → svolgimento
- `progetti.html` + `progetti.js` — griglia progetti → dettaglio (scroll)
- `common.js` — caricamento condiviso di `db.json` (usato da tutte le pagine tranne `index.html`)
- `style.css`, `theme.js` — stile e tema chiaro/scuro condivisi
- `db.json` — database unico condiviso da tutte le pagine

## Pattern di navigazione
Documentazione, Teoria e Progetti condividono lo stesso schema:
1. Griglia di card (stile home) in alto
2. Cliccando una card, la pagina scorre fino al dettaglio completo sotto la griglia

Quiz reali usa invece un avvio diretto: cliccando la card della materia si apre lo svolgimento del quiz.

## Regole operative (invariate)
- Nessun contenuto inventato: solo quanto fornito nei documenti sorgente
- Nessuna modifica a dati preesistenti, solo inserimenti additivi
- `quiz_reale` popolato solo su richiesta esplicita
- Verificare sempre la validità del JSON dopo ogni modifica