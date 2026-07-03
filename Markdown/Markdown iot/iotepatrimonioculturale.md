# IoT Patrimonio Culturale

---

## PAGE 1

IoT per il Patrimonio Culturale
Tecnologie intelligenti per la conservazione
e la valorizzazione del patrimonio culturale - Pt.1

---

## PAGE 2

Cos'è l'Internet of Things?
È l'acronimo di Internet of Things: l'insieme di oggetti fisici dotati di sensori, software e connessione di rete che permette loro di raccogliere dati, comunicare e interagire con altri dispositivi senza intervento umano diretto.

Punti principali:
0
IoT: Rete di dispositivi fisici dotati di sensori, software e connettività
Comunicazione: Raccolta, scambio e analisi dati via Internet
Intelligenza: Automazione e decisioni basate su dati in tempo reale
Applicabilità: Dalla smart home ai musei intelligenti

---

## PAGE 3

Chi ha inventato l'IoT
L'Internet of Things (IoT), inteso come l'espressione che definisce il concetto, è stato coniato da Kevin Ashton, un britannico, pioniere della tecnologia, che nel 1999 al MIT (Massachusetts Institute of Technology), descrisse un sistema in cui il computer potesse raccogliere dati sul mondo fisico da solo, tramite sensori senza dipendere dall'inserimento manuale dei dati da parte degli esseri umani.
Sulla base di questi studi, applicò questi concetti alla catena di approvvigionamento della società Procter & Gamble (P&G).

---

## PAGE 4

Componenti di un Sistema IoT

Sensori e attuatori
I sensori raccolgono i dati e gli attuatori eseguono azioni

Connettività
Il gateway connesso tramite tecnologia Wi-Fi, Bluetooth, 5G raccoglie i dati dai sensori e li trasmette al Cloud

Cloud & Al
II Cloud elabora e analizza i dati dei sensori e prende decisioni comandando l'eventuale azione agli attuatori

---

## PAGE 5

I sensori: esempi
Il sensore informa, raccoglie e invia i dati

Esempi:
Sensore di temperatura (DHT11, TMP36): misura i gradi.
Sensore di luce (LDR): rileva quanta luce è presente.
Sensore di movimento PIR: rileva la presenza di persone.
Sensore di umidità del terreno: misura quanta acqua contiene il suolo.
Accelerometro: rileva movimenti, inclinazioni, scuotimenti.
Sensore magnetico: rileva la presenza di un campo magnetico.
Microfono: rileva l'intensità del suono.

---

## PAGE 6

I sensori: il sensore di temperatura
II TMP36 è un sensore di temperatura analogico a semiconduttore comunemente utilizzato in elettronica, specialmente con microcontrollori come Arduino.

Ha tre pin:
uscita della del segnale analogico
alimentazione a 3,3 V o 5V
massa

120
12786

II TMP 36 è ideale per:
monitoraggio della temperatura ambientale interna o esterna
monitoraggio della temperatura dei componenti
termostati e sistemi di controllo semplici

---

## PAGE 7

I sensori: il sensore di luminosità
Il modulo sensore KY-018 è un sensore di luminosità che utilizza una Fotoresistenza (nota anche come LDR, acronimo di Light Dependent Resistor) per misurare l'intensità della luce ambientale, utilizzato ad esempio su Arduino).

Ha tre pin:
uscita della tensione del partitore
alimentazione a 3,3 V o 5V
massa

II KY-018 è ideale per:
Interruttori Crepuscolari: Accendere automaticamente le luci quando fa buio
Sistemi di Domotica: Regolare la luminosità di un display in base alla luce ambientale.
Robotica: Sensori per rilevare linee o ostacoli basati su variazioni di luce.
Allarmi: Rilevare l'improvvisa accensione di una luce in una stanza buia.
R14

---

## PAGE 8

I sensori: il sensore di movimento (PIR)
II Sensore PIR (acronimo di Passive InfraRed Sensor, ovvero Sensore a Infrarossi Passivo) è un tipo di sensore elettronico ampiamente utilizzato per il rilevamento del movimento.
Viene definito passivo perché, a differenza di altri sensori (come quelli a microonde), non emette alcuna energia;
si limita a rilevare passivamente la radiazione infrarossa (calore) emessa dagli oggetti nel suo campo visivo. Può essere collegato all'Arduino

Ha tre pin:
alimentazione a 3,3 o 5 V
massa
segnale tipicamente digitale

Il sensore PIR è ideale per:
Sistemi di Sicurezza e Antifurto: Rilevamento di intrusi in case e uffici.
Illuminazione Automatica: Accensione automatica delle luci in corridoi, scale o aree esterne solo quando viene rilevata una presenza, risparmiando energia.

---

## PAGE 9

C2
Moisture Sensor v1.2
Capacitive Soil
GND
UCC
T
R2AOUT
C3R3
C4R4

I sensori: il sensore di umidità
Un sensore di umidità del terreno è un dispositivo utilizzato per misurare la quantità di acqua presente nel suolo.
È uno strumento fondamentale per l'agricoltura intelligente, l'irrigazione automatizzata e i progetti di giardinaggio con microcontrollori

Ha tre pin:
alimentazione a 3,3 o 5 V
massa
segnale analogico

Il sensore di umidità è ideale per:
Efficienza Idrica: Prevenire l'irrigazione eccessiva o insufficiente, riducendo gli sprechi d'acqua e garantendo la salute delle piante.
Giardinaggio: Automazione dell'irrigazione, attivando una pompa solo quando il terreno si asciuga sotto una certa soglia.
30
U2
C5

---

## PAGE 10

GND
CS
UCC
INT
3458
PHIL INI
1425
SOO
SDA
SCL
N
2
ADXL345

I sensori: l'accelerometro
Un accelerometro (es. ADXL 345) è un dispositivo, tipicamente un sensore elettromeccanico, che misura l'accelerazione propria (o accelerazione specifica), ovvero l'accelerazione che viene percepita dal sensore stesso.

Ha tre pin:
alimentazione a 3,3 o 5 V
massa
segnale (SCL, SDA, CS, SDO/ALT ADDRESS, INT1 / INT2)

L'accelerometro è ideale per:
Rotazione dello Schermo: Rileva se il dispositivo è tenuto in verticale (portrait) o orizzontale (landscape).
Giochi: Utilizzato come controller di movimento.
Contapassi (Pedometer): Rileva il movimento ritmico della camminata.

---

## PAGE 11

I sensori: il sensore magnetico
Un sensore magnetico è un dispositivo elettronico che rileva la presenza, la forza o la direzione di un campo magnetico.

Ha tre pin:
● alimentazione a 5 V
● massa
● segnale analogico

Il sensore magnetico è ideale per:
● Rilevamento di Prossimità/Posizione: Rilevare se un magnete (e quindi un oggetto a cui è attaccato) è vicino o in una certa posizione (es. rilevamento della chiusura di un coperchio su un laptop).
● Bussola Digitale (Magnetometro): Una forma specializzata di sensore ad effetto Hall che misura la direzione del campo magnetico terrestre. Questo permette ai dispositivi di conoscere il proprio orientamento rispetto al Nord.

---

## PAGE 12

I sensori: il microfono
Un microfono (es. KY-038) è un trasduttore che converte l'energia acustica (onde sonore) in energia elettrica (un segnale elettrico). In sostanza, funge da "orecchio" in un circuito elettronico.

Ha tre pin:
● alimentazione a 5 V
● massa
● segnale analogico
● segnale digitale

Il microfono è ideale per:
● Rilevamento del Rumore: Misurare i livelli di decibel (dB) in un ambiente.
● Controllo Vocale: Rilevare comandi vocali semplici.
● Rilevamento Sonoro: Accendere luci o attivare un sistema in risposta a un suono forte (come un battito di mani).

---

## PAGE 13

I sensori: la telecamera
La telecamera, pur essendo considerato un sensore, è molto più complessa di un sensore monolitico (come un sensore di temperatura o di distanza) a causa dell'enorme quantità di dati che produce:
Nel contesto dell'IoT e della robotica, i dati visivi delle telecamere vengono utilizzati per l'Intelligenza Artificiale (AI) per:
● Riconoscimento di Oggetti: Identificare persone, veicoli o merci.
● Navigazione: Mappare l'ambiente per un robot o un drone.
● Rilevamento del Movimento: Identificare i cambiamenti nella scena nel tempo.

---

## PAGE 14

Gli attuatori: esempi
L’attuatore esegue e agisce sulla base dei comandi

Esempi:
● LED o lampadina smart: si accendono o cambiano intensità/colore.
● Display: mostra numeri, testi, icone.
● Relè: accende o spegne dispositivi elettrici.
● Buzzer: produce suoni, toni o allarmi.
● Motore DC: fa girare ruote, pale, ventole.
● Servo motore: ruota o si posiziona in un angolo specifico
● Motore passo passo: ruota in maniera precisa 
● Elettrovalvola: apre o chiude il passaggio di acqua o aria.

---

## PAGE 15

Gli attuatori: il led
Il LED (acronimo di Light Emitting Diode, ovvero Diodo a Emissione Luminosa) è, dal punto di vista elettronico, l'attuatore più semplice e fondamentale.
Un LED è un componente a semiconduttore che converte l'energia elettrica in energia luminosa in modo efficiente.
Il LED NON deve mai essere collegato direttamente a una sorgente di tensione fissa (come Arduino o Microbit) senza un resistore.

Ha due pin:
● anodo: Il pin più lungo; deve essere collegato al polo positivo 
● catodo: Il pin più corto; è il lato piatto (tacche laterali) del corpo del LED e va a Massa (GND)

---

## PAGE 16

Gli attuatori: il display
Il display visualizza testo, caratteri speciali o immagini.
Esistono display generali a LCD, OLED o TFT e display per microcontrollori generici.
I display per microcontrollori visualizzano i caratteri su un certo numero di righe, ciascuna con diversi caratteri.
Per esempio per Arduino sono disponibili i display 16x2 (16 caratteri x2 righe), e i display 20x4. Invece il Microbit monta un display 5x5 a led rossi.

---

## PAGE 17

Gli attuatori: il relè
Il relè (o relay) è un interruttore elettromeccanico che è azionato da un segnale elettrico a bassa potenza.
È uno degli attuatori più importanti in elettronica perché permette a un circuito a bassa tensione (come Arduino, che usa 5V) di controllare un circuito ad alta tensione e/o alta corrente (come una lampada o una pompa a 220 V.

Esistono due tipi di relè:
● monostabile (standard): ha una sola posizione e si attiva solo finchè riceve corrente 
● bistabile o passo passo: ha due posizioni: al primo impulso si attiva e al secondo si disattiva

Il relè è essenziale per:
● Accendere e spegnere lampade, ventole o pompe per l'irrigazione a 220V.
● Sistemi di Sicurezza: Attivare allarmi o chiusure elettriche.
● Controllo di Motori CC o altri dispositivi: Controllare motori o altri dispositivi che richiedono una corrente superiore a quella che Arduino può gestire.

---

## PAGE 18

Gli attuatori: il buzzer
Un buzzer (o cicalino) è un piccolo dispositivo audio che converte un segnale elettrico in suono, vibrazione acustica o un "bip".
È uno degli attuatori più semplici e comuni nei progetti di elettronica per fornire un feedback uditivo all'utente.

Esistono due tipi di buzzer:
● attivo: è estremamente semplice da usare; funziona come un LED (basta accenderlo o spegnerlo). Può emettere solo un tono, non è adatto per melodie o toni variabili.
● passivo: richiede un controllo più complesso via codice per generare la frequenza. Può produrre note e melodie diverse perché la frequenza del suono è determinata dalla frequenza del segnale di ingresso

---

## PAGE 19

Gli attuatori: il motore DC
Un motore a Corrente Continua (DC Motor) è un attuatore elettrico che converte l'energia elettrica a corrente continua (DC) in energia meccanica (movimento rotatorio).
È il tipo di motore più semplice, economico e comune per applicazioni che richiedono un movimento rotatorio continuo, ma non necessariamente un controllo preciso della posizione.

Esistono anche altri tipi di motore: 
● motore passo passo: ideali quando hai bisogno di rotazione continua su un angolo preciso, velocità molto basse e una coppia di mantenimento eccellente quando il motore è fermo.
Esempi: Stampanti 3D (movimento degli assi X, Y, Z), plotter, scanner, macchine CNC, telescopi per il tracciamento stellare.
● servomotore: I servi sono ideali quando hai bisogno di spostare un oggetto in un angolo specifico e ripetibile in modo rapido e fluido e per la forza di mantenimento quando sono sotto sforzo (grazie al circuito di feedback).
Esempi: Bracci robotici, controllo dello sterzo in un'automobilina RC, apertura e chiusura di valvole o serrature.

---

## PAGE 20

Gli attuatori: l’elettrovalvola
Un'elettrovalvola (o solenoide) è un attuatore che converte l'energia elettrica in un movimento lineare (spinta o trazione) per controllare il flusso di fluidi (liquidi o gas).
In sostanza, funziona come un interruttore elettricamente controllato per l'acqua o l'aria.

Applicazioni Ideali
● Irrigazione Automatica: Aprire le valvole dell'acqua in base ai dati del sensore di umidità del terreno.
● Acquari e Idroponica: Controllo del dosaggio di nutrienti o del livello dell'acqua.
● Pneumatica: Controllo del flusso d'aria in cilindri pneumatici.

---

## PAGE 21

Connettività dell’IoT
La connettività è l'elemento cruciale per qualsiasi sistema IoT (Internet delle Cose), poiché determina come i dispositivi (sensori e attuatori) comunicano tra loro e con il cloud.
Esistono numerose tecnologie di connettività, e la scelta dipende da tre fattori chiave: portata (distanza), velocità (quantità di dati) e consumo energetico.

● Wi-Fi (Wireless Fidelity)
● Bluetooth
● Zigbee e Z-Wave
● NFC (Near Field Communication)

---

## PAGE 22

Connettività dell’IoT: Wi-Fi (Wireless Fidelity)
Il Wi-Fi è lo standard più noto e onnipresente e viene utilizzato per collegare i dispositivi IoT a Internet tramite un router locale.

● Portata Tipica: Fino a 100 metri in campo aperto; significativamente ridotta all'interno degli edifici.
● Velocità Dati: Alta (da pochi Mbps a centinaia di Mbps).
● Consumo Energetico: Alto. Non è ideale per dispositivi alimentati a batteria che devono durare mesi o anni (come sensori remoti).
● Ideale per: Dispositivi che necessitano di trasferire grandi quantità di dati o che richiedono un flusso continuo (es. telecamere IP, streaming video, gateway di raccolta dati).

---

## PAGE 23

Connettività dell’IoT: Bluetooth
Il Bluetooth si è evoluto in due versioni principali, ciascuna con un ruolo distinto nell'IoT.

A. Bluetooth Classic
È la versione originale, focalizzata sulla connessione di dispositivi per lo scambio di dati o audio.
● Portata Tipica: Fino a 10 metri.
● Consumo Energetico: Medio.
● Ideale per: Streaming audio (auricolari), trasferimento dati tra smartphone e dispositivi.

B. Bluetooth Low Energy (BLE)
Sviluppato specificamente per l'IoT, si concentra sul risparmio energetico.
● Portata Tipica: Fino a 100 metri.
● Consumo Energetico: Molto Basso. I dispositivi BLE possono funzionare con una piccola batteria a bottone per anni.
● Ideale per: Beacon, dispositivi indossabili, sensori semplici che inviano piccoli pacchetti di dati in modo intermittente (es. temperatura, stato ON/OFF).

---

## PAGE 24

Connettività dell’IoT: Zigbee e Z-Wave
Queste sono le tecnologie dominanti per le reti mesh domestiche e l'automazione.

● Portata Tipica: Fino a 30 metri per singolo salto (Z-wave ha una portata più ampia rispetto allo Zigbee)
● Comunicazione: Ogni dispositivo Zigbee trasmette il segnale agli altri dispositivi quindi si possono creare reti Mesh (a maglia), dove ogni dispositivo funge da ripetitore, estendendo efficacemente la portata a un intero edificio o complesso.
● Velocità Dati: Bassa.
● Consumo Energetico: Molto Basso.
● Ideale per: Domotica (illuminazione, termostati, serrature intelligenti). La loro forza è l'affidabilità e la capacità di scalare, gestendo centinaia di nodi nella stessa rete.
● Difetti: hanno necessità di un hub talvolta specifico per una determinata marca
● Frequenze: Zigbee e Z-wave operano su frequenze diverse

---

## PAGE 25

Connettività dell’IoT: NFC (Near Field Communication)
Questa è la tecnologia con la portata più limitata.

● Portata Tipica: Molto corta, fino a 4 cm.
● Consumo Energetico: Estremamente basso (i tag passivi non richiedono alimentazione).
● Ideale per: Pagamenti Contactless, accoppiamento rapido di dispositivi (come abbinare cuffie wireless), e autenticazione/identificazione.

---

## PAGE 26

Esempi di IoT: lo smartwatch
Lo smartwatch è un esempio di IoT che integra i tre livelli

● Sensori integrati: 
  ○ accelerometro/giroscopio: rilevano il movimento (es. passi)
  ○ sensore ottico (PPG): rileva il battito cardiaco
  ○ GPS: rileva la posizione
  ○ Microfono: riceve i comandi vocali
● Attuatori:
  ○ display: mostra notifiche e dati
  ○ motore di vibrazione
  ○ speaker: emette suoni
● Connettività:
  ○ tramite smartphone che agisce da gateway tramite connessione bluetooth
  ○ connessione diretta all’wifi
● Cloud:
  ○ Samsung health, Google Fit, Garmin Connect, Huawei Connect, Xiaomi Health, Apple Health

---

## PAGE 27

Schema Sistema di Allarme IOT con Sensore /Finestra, Gateway e Smartphone

Sensore Porta/Finestra (Effrazione rilevata) -> Flusso Effrazione -> Gateway (Dati trasmessi) -> Cloud (Logica allarme attivata) -> Attivazione Allarme
Gateway -> Interfaccia Utente (Notifica all'utente)

Esempi di IoT: un sistema di allarme

---

## PAGE 28

Grazie!
IoT • Patrimonio Culturale • Innovazione Digitale