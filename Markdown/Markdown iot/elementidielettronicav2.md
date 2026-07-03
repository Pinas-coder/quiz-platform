# Elementi di Elettronica

---

## PAGE 1

Elementi di Elettronica
Componenti di Base e Collegamenti

---

## PAGE 2

Simulazione della costruzione dei circuiti
Thinkercad (www.tinkercad.com)
Simulazione online di circuiti elettrici tra cui Microbit e Arduino

---

## PAGE 3

La breadboard - pt1
Una breadboard (basetta sperimentale) è una piastra forata che permette di realizzare circuiti elettronici senza saldature.
All'interno ha contatti metallici che collegano elettricamente gruppi di fori.
È usata per:
* prototipazione rapida
* esercitazioni didattiche
* test di componenti

---

## PAGE 4

La breadboard - pt2
Barre di alimentazione laterali
* Contrassegnate spesso con + (rosso) e - (blu)
* I fori sono collegati verticalmente (lungo tutta la colonna)
* Servono per distribuire Vcc e GND
Zona centrale (matrice di collegamento)
* I fori sono collegati a gruppi di 5 in orizzontale
* La parte sinistra e destra sono separate da una fessura centrale
* La fessura serve per inserire circuiti integrati (DIP)

+ a b c d e f g h i j 1 2 8 10 11 12 13 15 16 17 18 19 20 21 22 23 24 25 27 28 29 30 - +

---

## PAGE 5

Circuito elettrico - pt1
Un circuito elettrico è un percorso chiuso all'interno del quale circola corrente elettrica.
La corrente elettrica è lo spostamento ordinato di cariche elettriche che avviene in un conduttore quando tra i suoi estremi esiste una differenza di potenziale (d.d.p.)
Si può immaginare come un'autostrada ad anello dove gli elettroni partono da un punto, compiono un lavoro e tornano alla base.

Generatore + -
Interruttore
Lampadina

Gli elettroni si muovono dal polo negativo verso il polo positivo (flusso di elettroni reale).
La corrente convenzionale va dal positivo al negativo, ma è una convenzione storica che rappresenta il flusso di cariche positive.
Il circuito più semplice è formato da un Generatore e un Componente o Utilizzatore (es. una lampadina) ed eventualmente di un Interruttore che permette di aprire o chiudere un circuito

---

## PAGE 6

Circuito elettrico - pt2
Un Generatore di tensione (come una pila, una batteria o un alternatore) è un dispositivo che ha due terminali, chiamati poli o morsetti.
La sua funzione principale è mantenere una costante differenza di potenziale elettrico (d.d.p.), detta anche tensione (nel modello ideale), tra questi due poli.
La tensione si misura in Volt (V).
La resistenza elettrica è l'opposizione che un materiale offre al passaggio della corrente.
Se il generatore è la "spinta" (tensione), la resistenza è il "freno".
La resistenza si indica con la lettera R e la sua unità di misura è l'Ohm (Ω).

Esempi di resistenze:
* II resistore
* La lampadina
* II corpo umano

LED e motore non sono resistori: sono dispositivi non lineari (non seguono la legge di Ohm).
Tuttavia presentano una resistenza interna e assorbono potenza elettrica trasformandola rispettivamente in luce (LED) e in energia meccanica (motore).

---

## PAGE 7

Volt (V) - Tensione Elettrica
* Differenza di potenziale elettrico tra due punti
* Simbolo: V, unità di misura: Volt (V)
* Analogia idraulica: pressione dell'acqua creata da una cascata, più è alta e più c'è pressione
* Esempio: batteria 9V, presa domestica 230V
* Il microbit funziona a 3,3 V
* Applicando lo shield al microbit si ha la possibilità di utilizzare 5 V

---

## PAGE 8

Ampere (A) - Corrente Elettrica
* Flusso di cariche elettriche nel circuito nell'unità di tempo
* Simbolo: I, unità di misura: Ampere (A)
* Analogia idraulica: quantità d'acqua che scorre nel tubo
* Esempio: il LED assorbe 20mA, il motore 2A, ecc.

---

## PAGE 9

Ohm (Ω) - Resistenza Elettrica
* Opposizione al flusso di corrente elettrica
* Simbolo: R, unità di misura: Ohm (Ω)
* Analogia idraulica: ostacolo nel tubo
* Esempio: un componente ovvero, una lampadina, una resistenza, ecc.
* Maggiore resistenza = minore corrente

La legge di Ohm
$V = R \times I$
V = tensione in Volt
R = resistenza in Ohm
I = corrente in Ampere

---

## PAGE 10

I circuiti - esercizi
Esercizio 1
Usando thinkercad creare un semplice circuito per far accendere una lampadina usando un alimentatore a 12 V

---

## PAGE 11

Misurazione della tensione con il multimetro
Tramite il multimetro è possibile misurare la tensione
Seguire i seguenti passi:
* regolare l’indicatore sul Volt (Corrente Continua) sul valore più alto.
* inserire i puntali:
* il rosso sul polo positivo
* il nero sul polo negativo

La misurazione sarà in Volt

MISURA DELLA TENSIONE (V)
1. Seleziona "V=" (volt)
2. Collega i puntali. Rosso al positivo, Nero al negativo
3. Leggi il valore. 9.00
9V
Andare eventualmente su scale inferiori

---

## PAGE 12

Misurazione della corrente con il multimetro
Tramite il multimetro è possibile misurare la corrente che passa attraverso un circuito
Seguire i seguenti passi:
* regolare l’indicatore sul Ampere sul valore più alto.
* inserire i puntali in serie con il circuito, es. tra generatore e lampadina

La misurazione sarà in Ampere

MISURA DELLA CORRENTE (A)
1. Seleziona "A=" (Ampere)
2. Collega in serie.
3. Collega in circuito.
0.25A
Andare eventualmente su scale inferiori

---

## PAGE 13

Misurazione della resistenza con il multimetro
Tramite il multimetro è possibile misurare la resistenza di un resistore
Seguire i seguenti passi:
* regolare l’indicatore su Omh sul valore più alto.
* inserire i puntali nei due capi della resistenza:

La misurazione sarà in Ohm

MISURA DELLA RESISTENZA (Ω)
1. Seleziona "Ω" (ohm)
2. Collega il componente. Misura la resistenza
3. Leggi il valore. 1.50 kΩ
Andare eventualmente su scale inferiori

---

## PAGE 14

Esercizio 1
Riprendere l’esercizio precedente ed eseguire la misurazione della tensione e della corrente
Misurazioni con multimetro - esercizi

---

## PAGE 15

Collegamenti in Serie
* I componenti condividono un morsetto in comune
* La corrente è la stessa in tutti i componenti
* La tensione totale è la somma delle tensioni: $V = V_1 + V_2 + V_3$
* Utilizzato per controllo e sicurezza

Ci sono più componenti, la corrente gli attraversa e non cambia, mentre la tensione viene divisa tra loro e quindi se abbiamo tre componenti, avremo anche tre tensioni per ognuno con valori diversi V1, V2, V3.
Un esempio è rappresentato dalla catena delle lampadine delle illuminazioni natalizie (quelle che usavano le lampadine a filamento);
ogni lampadina pur funzionando a pochi volt, è alimentata a 230 V, ma non si brucia, perchè la tensione si divide sulle varie lampadine

ANALISI DEL FLUSSO E TENSIONE IN SERIE
GENERATORE (BATTERIA 9V)
FLUSSO DI CORRENTE UNICO E INVARIATO ($I_{tot}$)
CIRCUITO IN SERIE
LAMPADINA L1, LAMPADINA L2, LAMPADINA L3
$I_{tot}$ è la stessa in ogni punto
TENSIONE TOTALE ($V_{tot} = 9V$)
$V_1 = 3V$, $V_2 = 3V$, $V_3 = 3V$
LA TENSIONE SI DIVIDE
Punti chiave: 1. Un solo percorso. 2. Corrente uguale ovunque. 3. Tensione si somma. 4. Un guasto interrompe tutto.

---

## PAGE 16

Collegamenti in Parallelo
* I componenti sono collegati agli stessi due punti
* La tensione è uguale per tutti i componenti
* La corrente totale è la somma delle correnti: $I = I_1 + I_2 + I_3$
* Tipico nei circuiti domestici per affidabilità

Ci sono più componenti, la tensione a disposizione per ognuno non cambia e sarà V;
mentre la corrente viene divisa tra loro e quindi se abbiamo tre componenti, avremo anche tre valori di corrente per ognuno con valori diversi i1, i2, i3.
Un esempio è l’impianto elettrico domestico, dove su tutte le prese è presente una tensione di 230 V

ANALISI DEL FLUSSO E TENSIONE IN PARALLELO
GENERATORE (BATTERIA 9V)
FLUSSO DI CORRENTE TOTALE ($I_{tot}$)
$I_{tot} = I_1 + I_2 + I_3$
GIUNZIONE (NODO) - LA CORRENTE SI DIVIDE
LAMPADINA L1, LAMPADINA L2, LAMPADINA L3
CIRCUITO IN PARALLELO
TENSIONE TOTALE ($V_{tot} = 9V$)
$V_1 = 9V$, $V_2 = 9V$, $V_3 = 9V$
LA TENSIONE È LA STESSA OVUNQUE
Punti chiave: 1. Più percorsi. 2. Corrente si divide. 3. Tensione uguale. 4. Un guasto non interrompe gli altri rami.

---

## PAGE 17

Leggi di Kirchhoff
Le leggi di Kirchhoff descrivono come si comportano correnti e tensioni nei circuiti elettrici.
* Prima legge di Kirchhoff (dei nodi): in un nodo, la somma delle correnti entranti è uguale alla somma delle correnti uscenti, quindi la somma algebrica delle correnti è zero.
* Seconda legge di Kirchhoff (delle maglie): in una maglia chiusa, la somma algebrica delle tensioni è zero.

$$\sum_{k=1}^n V_k = 0$$
$$\sum_{k=1}^m I_k = 0$$

PRIMA LEGGE DI KIRCHHOFF (NODO)
$I_1$, $I_2$, $I_3$
Somma correnti entranti = somma correnti uscenti
$I_1 + I_2 = I_3$

SECONDA LEGGE DI KIRCHHOFF (MAGLIA)
12V, [R1] 5V, [R2], [R3] 7V, 7V
Somma delle tensioni nella maglia = 0
$12 - 5 - 7 = 0$

---

## PAGE 18

Resistenza
* Limita il flusso di corrente nel circuito
* Il suo valore viene misurato in Ohm (Ω)
* Legge di Ohm: $V = R \times I$
* Ha un codice di colori per identificare il valore

---

## PAGE 19

Diodo
* È un semiconduttore costruito utilizzando il silicio
* Grazie alle sua caratteristica fisica e al drogaggio (dopping) permette il passaggio della corrente in una sola direzione
* Caduta di tensione tipica: 0,6-0,7V (per diodo al silicio)
* Viene usato per raddrizzamento della corrente e protezione dei circuiti (es. collegamento ai motori)

A, K

---

## PAGE 20

LED (Diodo Luminoso) - Pt.1
* Il led è un tipo di diodo che emette luce quando è attraversato dalla corrente.
* Richiede una resistenza di protezione in serie
* Formula resistenza: $R = (V - V_L) / I$
* (V tensione di alimentazione - $V_L$ caduta di tensione del LED - I corrente desiderata)
* I piedini in genere sono diversi: più lungo (o leggermente piegato) per indicare l’anodo (+) e più corto per il catodo (-)

Costruzione del LED - Diodo a Emissione di Luce
Lente epossidica
Resistenza integrata (Opzionale)
Telaio del LED { Ancudine, Montante
Custodia epossidica
Filo di connessione (Bonding)
Chip semiconduttore
Coppa riflettente
Bordo piatto (segno di orientamento)
Anodo Reoforo lungo (+)
Catodo Reoforo corto (-)

---

## PAGE 21

LED (Diodi Luminosi) - Pt.2
Il LED ha un voltaggio diverso a seconda dei colori (vedi tabella) e asse corrente da 0,01 A a 0,02 A.
Il LED non è un componente lineare (non segue la legge di Ohm): piccoli aumenti di tensione producono grandi aumenti di corrente.

Rosso: 1.8 - 2.2 V
Arancione / Ambra: 1.9 - 2.2 V
Giallo: 2.0 - 2.3 V
Verde (classico, GaP): 2.0 - 2.4 V
Verde ad alta luminosità (InGaN): 2.8 - 3.4 V
Blu: 2.8 - 3.4 V
Bianco: 2.8 - 3.4 V
UV (395-405 nm, UV vicino): 3.2 - 3.8 V

---

## PAGE 22

Esercizio 1
Creare un circuito con un alimentatore da 4,5 V e un LED.
Ricorda di inserire una resistenza nel circuito
Il LED - esercizi

---

## PAGE 23

Sensore PIR (Infrarosso Passivo)
* Rileva il movimento attraverso radiazione infrarossa
* Ha due elementi di rilevamento + lente di Fresnel
* Alimentazione tipica: 3-5V DC
* L’utilizzo è nel campo della sicurezza e nella illuminazione intelligente
* Ha tre piedini: due per l’alimentazione e uno per il segnale di ritorno

---

## PAGE 24

Esercizio 1
Creare un circuito con sensore PIR che accende un led rosso quando rileva il movimento
Sensore PIR - esercizi

---

## PAGE 25

Sensori di Prossimità
* Rileva oggetti senza il contatto fisico
* Tipi di sensore: ultrasuoni, capacitivi, induttivi, infrarossi
* Output digitale o analogico
* Ha in genere 4 piedini: due per l’alimentazione, uno per il trigger (impulso di ingresso) e uno per l’echo (impulso di uscita)
* Applicazioni: robotica, automazione, parking

HC-SR04 T R Vcc Trig Echo GND

---

## PAGE 26

Sensore di Luminosità: fotodiodo
* Converte la luce direttamente in corrente elettrica.
* Output Analogico (corrente molto piccola)
* Connessione tramite 2 piedini (Anodo e Catodo).
* Si usa quasi sempre in polarizzazione inversa (il catodo va al positivo).
* Punti di forza: È incredibilmente veloce. Riesce a leggere migliaia di variazioni di luce al secondo.
* Uso tipico: Telecomandi, lettori ottici, barriere laser e comunicazioni a infrarossi.

---

## PAGE 27

Sensori di Luminosità: fotoresistenza
* Cosa fa: Cambia la propria resistenza in base alla luce: al buio la resistenza è altissima, sotto la luce cala drasticamente.
* Output: Analogico (variazione di resistenza).
* Connessione: Ha 2 piedini e non ha polarità (puoi montarla in entrambi i sensi).
* Si usa solitamente in un circuito a "partitore di tensione".
* Punti di forza: Molto economica e sensibile alla luce visibile (quella che vediamo noi).
* Uso tipico: Luci crepuscolari (che si accendono da sole la sera), sveglie digitali e giocattoli.

Valore della resistenza in varie condizioni di luminosità:
Luce forte: 1 kΩ
Buio: 100 kΩ
Scegliere un resistore vicino alla media geometrica di questi valori:
$\sqrt{1 \text{ k}\Omega \times 100 \text{ k}\Omega} = \sqrt{100 \text{ k}\Omega^2} = 10 \text{ k}\Omega$

---

## PAGE 28

Esercizio 1
Creare un circuito con fotoresistenza per misurare la luminosità.
Usare un resistore da 10 kOhm
Sensore fotoresistenza - esercizi

---

## PAGE 29

Sensori di Luminosità: BH1750FVI
* Cosa fa: È un sensore digitale intelligente
* Output: Digitale .
* Connessione: Ha 5 piedini:
  * VCC: funziona a 3,3 V e a 5 V
  * GND: massa
  * SLC (Serial Clock) es. PIN 19 microbit
  * SDA (Serial Data) es. PIN 20 microbit
  * ADDR (imposta l’indirizzo standard (0x23)
* Punti di forza: rileva da 1 lux a 65535 lux con misurazioni precise

---

## PAGE 30

Relè
* Interruttore elettromeccanico controllato elettricamente
* Isolamento tra circuito di controllo e carico
* Permette di comandare carichi ad alta tensione (230V)
* Richiede diodo di protezione per circuito di controllo

Front
"NC" normally closed terminal
"COM" common terminal
"NO" normally closed terminal
Signal trigger input "IN"
Power supply negative pole "DC"
Signal trigger input "IN"
High level trigger "H"
Jumper cap: High/low level trigger selection
Low level trigger "L"
Back

---

## PAGE 31

Esercizio 1
Creare un circuito con relè alimentato a 3 V che accenda, tramite pulsante, una lampadina alimentata a 12 V
Relè - esercizi

---

## PAGE 32

Motori Elettrici
* Convertono energia elettrica in movimento meccanico
* Tipi: DC, servo, stepper, brushless
* Controllo tramite PWM, driver o ponte H
* Applicazioni: robotica, automazione, veicoli

---

## PAGE 33

Grazie!