# Manuale Completo: Statistica e Analisi dei Dati

## 1. Introduzione alla Statistica

### 1.1 Cos'è la statistica?
La statistica è una disciplina empirica che si occupa di raccogliere, analizzare, interpretare e presentare i dati al fine di trarre conclusioni significative, risolvere problemi reali e supportare i processi decisionali sulla base di evidenze concrete.

> **Definizione formale:** È la scienza che studia i fenomeni collettivi, sia naturali che sociali, attraverso metodi matematici fondati principalmente sulle tecniche di campionamento e sul calcolo delle probabilità, allo scopo di tracciare modelli esplicativi e formulare previsioni per l'andamento futuro del fenomeno studiato.

L'oggetto principale della statistica è il trattamento dei dati empirici attraverso quattro azioni cardine:
1. Osservazione e raccolta dei dati.
2. Analisi della distribuzione delle frequenze di determinate caratteristiche.
3. Costruzione di modelli matematico-statistici per rappresentare le tendenze rilevate.
4. Confronto tra i modelli predisposti e le nuove esperienze per elaborare previsioni accurate.

### 1.2 La statistica nella vita quotidiana e nell'Intelligenza Artificiale
* **Smartphone e App:** Gli algoritmi dei social media (come Instagram o TikTok) usano la statistica per tracciare le preferenze e suggerire contenuti rilevanti. Le app di navigazione (come Google Maps) calcolano i percorsi più rapidi elaborando statisticamente i flussi di traffico in tempo reale.
* **Shopping Online:** Piattaforme come Amazon o Netflix sfruttano sistemi di raccomandazione basati su modelli statistici per proporre prodotti o film in linea con i gusti dell'utente.
* **Sport e Salute:** Le app di fitness monitorano i parametri vitali traducendoli in report statistici. Nel calcio professionistico, le prestazioni degli atleti vengono digitalizzate e analizzate per ottimizzare le tattiche di gioco.
* **Intelligenza Artificiale:** La statistica è il cuore pulsante dell'IA moderna. I grandi modelli linguistici (LLM) utilizzano concetti statistici avanzati per identificare schemi ricorrenti all'interno di sterminate moli di testo, permettendo la generazione di risposte coerenti o la traduzione automatica.

### 1.3 Ambiti della statistica
La disciplina si divide in due grandi branche:
* **Statistica Descrittiva:** Si occupa di raccogliere, organizzare, sintetizzare e presentare i dati in modo comprensibile mediante l'ausilio di indici numerici (medie, indici di variabilità), tabelle e grafici.
* **Statistica Inferenziale:** Utilizza i dati raccolti da un sottoinsieme limitato (campione) per fare previsioni, stime ed estrapolare conclusioni valide per una popolazione più ampia.

---

## 2. Le Fasi di un'Indagine Statistica

Un'indagine statistica rigorosa si sviluppa obbligatoriamente attraverso quattro fasi sequenziali:

```
[Progettazione] ──> [Realizzazione] ──> [Elaborazione] ──> [Interpretazione]
```

1. **Progettazione dell’indagine:** Si definisce con precisione il fenomeno da investigare, si individua la popolazione statistica di riferimento, si determinano le singole unità statistiche e si scelgono i caratteri (le variabili) oggetto dello studio.
2. **Realizzazione dell’indagine:** Si passa alla fase operativa della rilevazione e raccolta fisica dei dati (tramite questionari, estrazioni da database, interviste, ecc.).
3. **Elaborazione dei dati statistici:** I dati grezzi vengono ripuliti, ordinati e sintetizzati all'interno di tabelle statistiche, rappresentati graficamente e riassunti mediante opportuni indici di sintesi.
4. **Interpretazione e presentazione dei risultati:** Si analizzano criticamente gli indici e i grafici ottenuti per descrivere le caratteristiche strutturali del fenomeno, traendo le conclusioni finali e traducendole in report decisionali.

---

## 3. Terminologia Statistica di Base

Per condurre correttamente un'analisi è fondamentale padroneggiare il glossario tecnico della disciplina:

* **Popolazione:** La totalità degli elementi o dei soggetti che costituiscono l'oggetto dello studio (es. tutti i libri presenti nel catalogo o la totalità degli utenti iscritti).
* **Unità Statistica:** Il singolo elemento elementare che compone la popolazione (es. un singolo libro o un singolo utente).
* **Variabile o Carattere:** Ciascuno dei caratteri o degli aspetti specifici osservati o misurati sulle unità statistiche (es. genere letterario, età, numero di ingressi).
* **Modalità:** I diversi valori o categorie che una determinata variabile può concretamente assumere (es. se la variabile è "Genere letterario", le modalità possono essere *Romanzo*, *Saggio*, *Giallo*).
* **Campione:** Un sottoinsieme rappresentativo della popolazione selezionato per essere analizzato qualora l'indagine sull'intera popolazione risultasse troppo onerosa o impossibile.

### Classificazione dei caratteri (variabili)
I caratteri si suddividono in due macro-categorie, a loro volta ulteriormente specificate:

1. **Caratteri Qualitativi (o Mutabili):** Le modalità sono espresse da attributi, parole o aggettivi. Si dividono in:
   * **Nominali (o sconnessi):** Non esiste alcun ordine naturale o gerarchico tra le modalità (es. colore degli occhi, genere letterario, stato civile).
   * **Ordinali:** Possiedono un ordine intrinseco e sequenziale, sebbene non sia possibile misurare matematicamente la distanza tra un livello e l'altro (es. livello di soddisfazione: *Basso, Medio, Alto*; valutazione a stelle: *1 stella, 2 stelle, 3 stelle*).
2. **Caratteri Quantitativi (o Variabili):** Le modalità sono espresse da numeri su cui è possibile effettuare operazioni matematiche. Si dividono in:
   * **Discreti:** Le modalità derivano da un'operazione di conteggio e assumono valori interi e numerabili (es. numero di libri presi in prestito, numero di accessi giornalieri).
   * **Continui:** Le modalità derivano da un'operazione di misurazione e possono assumere qualsiasi valore reale all'interno di un intervallo, inclusi i decimali (es. altezza, peso, reddito, tempo di permanenza).

---

## 4. Studio delle Frequenze e Tabulazione

### 4.1 Tipologie di Frequenza
* **Frequenza Assoluta ($n_i$ o $F$):** Il numero esatto di volte in cui una determinata modalità si presenta nel collettivo esaminato.
* **Frequenza Relativa ($f_i$):** Il rapporto tra la frequenza assoluta di una modalità e il numero totale delle unità statistiche esaminate ($N$). Può essere espressa come frazione, numero decimale o in percentuale ($f_i \times 100$):
  $$	ext{Frequenza Relativa} = rac{	ext{Frequenza Assoluta}}{	ext{Totale Unità}}$$
* **Frequenza Cumulata Assoluta ($N_i$):** La somma progressiva della frequenza assoluta di una determinata modalità con tutte le frequenze assolute delle modalità precedenti. Calcolabile esclusivamente per caratteri quantitativi o qualitativi ordinali ordinati in senso crescente.
* **Frequenza Cumulata Relativa ($F_i$):** La somma progressiva delle frequenze relative della modalità corrente e di quelle precedenti.

### 4.2 Esempio Pratico Svolto: Distribuzione di Frequenza (Soddisfazione Utenti)
Immaginiamo un'indagine sul livello di soddisfazione di $N = 50$ utenti di una biblioteca:

| Livello di Soddisfazione | Frequenza Assoluta | Frequenza Relativa (Frazione) | Frequenza Relativa (%) | Frequenza Cumulata Assoluta | Frequenza Cumulata Relativa (%) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Bassa | 10 | 10/50 | 20.0% | 10 | 20.0% |
| Medio-Bassa | 15 | 15/50 | 30.0% | 25 | 50.0% |
| Media | 10 | 10/50 | 20.0% | 35 | 70.0% |
| Medio-Alta | 5 | 5/50 | 10.0% | 40 | 80.0% |
| Alta | 10 | 10/50 | 20.0% | 50 | 100.0% |
| **TOTALE** | **50** | **50/50** | **100.0%** | **-** | **-** |

### 4.3 Esempio Pratico Svolto: Frequenze Cumulate su Classi (Giorni di Prestito)
Analisi del tempo di restituzione (in giorni) di un lotto di $N = 80$ libri presi in prestito:

| Intervallo di giorni | Frequenza (n° di libri) | Frequenza cumulata assoluta | Frequenza cumulata relativa |
| :--- | :---: | :---: | :---: |
| 1-3 | 10 | 10 | 0.125 (12.5%) |
| 4-6 | 15 | 25 | 0.3125 (31.25%) |
| 7-9 | 25 | 50 | 0.625 (62.5%) |
| 10-12 | 20 | 70 | 0.875 (87.5%) |
| 13-15 | 10 | 80 | 1.000 (100.0%) |

**Utilità analitica:** Permette di individuare immediatamente soglie critiche. Ad esempio, osservando la terza riga, sappiamo che il 62.5% dei libri viene restituito entro i primi 9 giorni di prestito, aiutando a ottimizzare la rotazione delle copie disponibili.

---

## 5. Indici di Posizione Centrale (Medie)

Gli indici di posizione centrale sintetizzano l'intera distribuzione di un carattere in un unico valore rappresentativo.

### 5.1 Media Aritmetica
La somma di tutti i valori osservati divisa per il numero totale di osservazioni.
$$ar{x} = rac{\sum_{i=1}^{n} x_i}{n}$$

### 5.2 Media Ponderata
Utilizzata quando a ciascun valore è associato un peso ($w_i$) che ne determina l'importanza relativa.
$$ar{x}_w = rac{\sum_{i=1}^{n} x_i \cdot w_i}{\sum_{i=1}^{n} w_i}$$

#### Esempio Pratico: Calcolo dei Voti Universitari
Uno studente ha sostenuto 4 esami con voti ($x_i$) e crediti ($w_i$):
* Matematica: 28 (9 crediti)
* Informatica: 30 (12 crediti)
* Fisica: 27 (6 crediti)
* Economia: 25 (3 crediti)

**Calcolo passo-passo:**
1. Moltiplica ciascun voto per i crediti:
   * $28 	imes 9 = 252$
   * $30 	imes 12 = 360$
   * $27 	imes 6 = 162$
   * $25 	imes 3 = 75$
2. Somma i prodotti ottenuti: $252 + 360 + 162 + 75 = 849$
3. Somma i crediti totali: $9 + 12 + 6 + 3 = 30$
4. Dividi la somma dei prodotti per i crediti totali: $ar{x}_w = rac{849}{30} = 28.3$

### 5.3 Media Geometrica
Molto utilizzata quando i dati rappresentano tassi di variazione o rapporti geometrici nel tempo (es. crescita della popolazione o tassi di interesse).
$$G = \sqrt[n]{x_1 \cdot x_2 \cdot \dots \cdot x_n}$$

#### Esempio Pratico: Crescita degli Utenti
Dati 1.000 utenti iniziali, si registrano i seguenti fattori di crescita annuali:
* Anno 1: +10% (Fattore 1.10)
* Anno 2: +20% (Fattore 1.20)
* Anno 3: +30% (Fattore 1.30)

$$G = \sqrt[3]{1.10 	imes 1.20 	imes 1.30} = \sqrt[3]{1.716} pprox 1.197$$
Il tasso medio di crescita annuale è pari al $(1.197 - 1) 	imes 100 = 19.7\%$.

### 5.4 Media Quadratica
Utilizzata in situazioni in cui è necessario evidenziare la presenza di valori molto distanti dai valori centrali (es. calcolo degli errori di misurazione).
$$Q = \sqrt{rac{\sum_{i=1}^{n} x_i^2}{n}}$$

#### Esempio Pratico: Altezze di 4 bambini (in cm)
Valori: 120, 130, 140, 150.
1. Calcolo dei quadrati e della loro media:
   $$rac{120^2 + 130^2 + 140^2 + 150^2}{4} = rac{14400 + 16900 + 19600 + 22500}{4} = rac{73400}{4} = 18350$$
2. Estrazione della radice quadrata: $Q = \sqrt{18350} pprox 135.4	ext{ cm}$

### 5.5 Mediana
Il valore centrale che bipartisce la distribuzione ordinata dei dati in due parti uguali (il 50% dei dati è inferiore o uguale alla mediana, il restante 50% è superiore o uguale).
* Se $n$ è **dispari**: la posizione della mediana è $rac{n+1}{2}$.
* Se $n$ è **pari**: la mediana è la media aritmetica dei due valori centrali nelle posizioni $rac{n}{2}$ e $rac{n}{2} + 1$.

### 5.6 Moda
La modalità o il valore che si presenta con la frequenza assoluta più elevata all'interno del dataset.

### 5.7 I Quartili
I quartili sono indici di posizione che dividono la distribuzione ordinata in 4 parti ugualmente numerose:
* **Q1 (Primo quartile):** Lascia alla sua sinistra il 25% dei dati.
* **Q2 (Secondo quartile):** Corrisponde esattamente alla **Mediana** (50% dei dati).
* **Q3 (Terzo quartile):** Lascia alla sua sinistra il 75% dei dati.

#### Esempio Pratico: Calcolo dei Quartili
Dati originari non ordinati: $X = \{9, 6, 11, 8, 4, 7, 10, 3, 5\}$
1. Ordinamento in senso crescente: $3, 4, 5, 6, 7, 8, 9, 10, 11$ ($n = 9$, dispari)
2. **Q2 (Mediana):** Posizione $rac{9+1}{2} = 5^\circ$ valore $ightarrow Q2 = 7$
3. **Q1:** Mediana della metà inferiore ($3, 4, 5, 6$) $ightarrow Q1 = rac{4+5}{2} = 4.5$
4. **Q3:** Mediana della metà superiore ($8, 9, 10, 11$) $ightarrow Q3 = rac{9+10}{2} = 9.5$

### 5.8 Caso Studio Integrato: Redditi Città A vs Città B
Studio volto a confrontare l'efficacia degli indici di sintesi sui redditi annui (in migliaia di €) di due campioni di 8 giovani residenti:
* **Città A:** 10, 30, 10, 20, 10, 10, 100, 10
* **Città B:** 25, 20, 34, 20, 20, 30, 31, 19

**Analisi Città A:**
* Ordinamento: 10, 10, 10, 10, 10, 20, 30, 100
* Media: $M_A = rac{10 	imes 5 + 20 + 30 + 100}{8} = 25$
* Mediana: valore intermedio tra il 4° e il 5° $ightarrow rac{10+10}{2} = 10$
* Moda: 10

**Analisi Città B:**
* Ordinamento: 19, 20, 20, 20, 25, 30, 31, 34
* Media: $M_B = rac{19 + 20 	imes 3 + 25 + 30 + 31 + 34}{8} = 25$
* Mediana: valore intermedio tra il 4° e il 5° $ightarrow rac{20+25}{2} = 22.5$
* Moda: 20

**Conclusione:** Pur avendo la stessa identica Media (25.000 €), la struttura socio-economica delle due città è radicalmente diversa. Nella Città A, la presenza di un forte valore anomalo (outlier di 100.000 €) distorce la media verso l'alto; la Mediana (10.000 €) e la Moda (10.000 €) descrivono in modo molto più fedele la reale situazione della maggioranza dei cittadini. Nella Città B, la ricchezza è distribuita in modo molto più uniforme attorno alla media.

---

## 6. Indici di Variabilità e Dispersione

Gli indici di variabilità misurano l'attitudine di un fenomeno a variare e a disperdersi attorno a un indice di posizione centrale.

### 6.1 Campo di Variazione (Range)
La differenza aritmetica tra il valore massimo e il valore minimo del dataset.
$$	ext{Range} = X_{\max} - X_{\min}$$

### 6.2 Varianza ($\sigma^2$)
La media aritmetica dei quadrati degli scarti dei singoli valori dalla loro media aritmetica.
$$\sigma^2 = rac{\sum_{i=1}^{n} (x_i - ar{x})^2}{n}$$

### 6.3 Deviazione Standard (Scarto Quadratico Medio $\sigma$)
La radice quadrata della varianza. È l'indice di variabilità più utilizzato poiché è espresso nella stessa unità di misura dei dati originari.
$$\sigma = \sqrt{\sigma^2}$$

#### Esempio Pratico: Calcolo della Deviazione Standard
Dati di partenza: $2, 4, 6, 8, 10$ ($n = 5$)
1. **Calcolo della Media ($ar{x}$):** $rac{2 + 4 + 6 + 8 + 10}{5} = rac{30}{5} = 6$
2. **Calcolo degli scarti dalla media ($x_i - ar{x}$):**
   * $2 - 6 = -4$
   * $4 - 6 = -2$
   * $6 - 6 = 0$
   * $8 - 6 = 2$
   * $10 - 6 = 4$
3. **Calcolo dei quadrati degli scarti:** $16, 4, 0, 4, 16$
4. **Somma dei quadrati degli scarti:** $16 + 4 + 0 + 4 + 16 = 40$
5. **Calcolo della Varianza ($\sigma^2$):** $rac{40}{5} = 8$
6. **Calcolo della Deviazione Standard ($\sigma$):** $\sqrt{8} pprox 2.83$

---

## 7. Sezione Esercizi ed Esercitazioni Pratiche

### Esercizio 1: Costruzione di una Tabella di Frequenza
Un bibliotecario registra il numero di prestiti giornalieri effettuati in una settimana di apertura straordinaria:
*Lunedì (10), Martedì (15), Mercoledì (20), Giovedì (15), Venerdì (25), Sabato (30), Domenica (5).*
* **Richiesta A:** Costruisci una tabella di frequenze completa che includa: Frequenza assoluta, Frequenza relativa percentuale, Frequenza cumulata assoluta e Frequenza cumulata relativa percentuale.
* **Richiesta B:** Identifica il giorno con il maggior numero di prestiti.

### Esercizio 2: Analisi delle Preferenze di Genere
Un sondaggio svolto su un gruppo di utenti rileva il genere letterario preferito. I risultati grezzi sono: *Romanzo (40 utenti), Giallo (30 utenti), Saggio (20 utenti), Fantasy (10 utenti).*
* **Richiesta:** Costruisci la tabella delle frequenze riportando le frequenze assolute, relative espresse come frazione e relative espresse in percentuale.

### Esercizio 3: Rappresentazioni Grafiche
* **Richiesta:** Partendo dai dati strutturati nell'Esercizio 1 e nell'Esercizio 2, individua e descrivi quale tipologia di grafico (es. grafico a barre, diagramma a torta) sia ottimale per rappresentare ciascun fenomeno.

### Esercizio 4: Media Ponderata sul Costo dei Libri
La direzione di una biblioteca acquista un lotto di libri e vuole calcolare il prezzo medio pagato per singolo volume. I dati sono organizzati nella seguente tabella:

| Genere Letterario | Prezzo medio per libro (€) ($x_i$) | Numero di copie acquistate ($w_i$) |
| :--- | :---: | :---: |
| Romanzo | 15 | 30 |
| Giallo | 12 | 25 |
| Saggio | 20 | 20 |
| Fantasy | 18 | 15 |
| Biografia | 22 | 10 |
| Poesia | 10 | 40 |

* **Richiesta:** Determina il costo medio ponderato per libro.

### Esercizio 5: Analisi di Mediana e Moda su Frequenze
Un'indagine rileva la distribuzione degli utenti in base al numero di libri presi in prestito contemporaneamente:
* 1 libro: 4 utenti
* 2 libri: 7 utenti
* 3 libri: 12 utenti
* 4 libri: 6 utenti
* 5 libri: 3 utenti

* **Richiesta:** Determina la Moda e calcola il valore della Mediana per questa distribuzione di frequenze.

### Esercizio 6: Tabulazione Voti Test
Un gruppo di studenti ottiene i seguenti punteggi in un test di autovalutazione:
$$8, 6, 7, 8, 9, 6, 7, 6, 8, 10$$
* **Richiesta:** Crea una tabella di frequenza dettagliata che mostri le frequenze assolute e relative per ciascun voto.

### Esercizio 7: Statistiche Descrittive Complete su Set di Dati
Dato il seguente set di dati numerici:
$$3, 7, 8, 5, 8, 10, 8, 6, 4$$
* **Richiesta A:** Ordina i dati e trova il valore della Mediana e della Moda.
* **Richiesta B:** Calcola la Varianza e la Deviazione Standard del dataset.

### Esercizio 8: Tabella a Doppia Entrata (Frequenze Marginali)
Un incrocio statistico rileva le preferenze di genere letterario in base alle fasce d'età degli utenti:

| Fascia d'età | Romanzo | Saggio | Giallo |
| :--- | :---: | :---: | :---: |
| Under 18 | 10 | 5 | 3 |
| 18-30 | 15 | 10 | 8 |
| Over 30 | 12 | 8 | 6 |

* **Richiesta:** Calcola le frequenze marginali di riga e di colonna (i totali parziali per riga e per colonna) per completare la tabella.

### Esercizio 9: Media Ponderata Voti Universitari
Uno studente universitario ha registrato i seguenti risultati:
* *Matematica:* voto 28 (peso: 6 crediti)
* *Statistica:* voto 25 (peso: 8 crediti)
* *Informatica:* voto 30 (peso: 4 crediti)
* **Richiesta:** Calcola la media ponderata finale dello studente.
