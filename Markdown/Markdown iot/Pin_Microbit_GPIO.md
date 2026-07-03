# Pin Microbit GPIO.pdf

## PAGE 1

Pin GPIO micro:bit

Input e Output Digitale e Analogico

---

## PAGE 2

Cos'è un Pin GPIO?

GPIO = General Purpose Input Output

∙ Pin programmabili per comunicare con dispositivi esterni

∙ Possono essere configurati come INPUT o OUTPUT

∙ Il micro:bit ha 25 pin sul connettore edge connector (compresi segnali speciali)

∙ 5 pin grandi (0, 1, 2, 3V, GND) accessibili con pinze coccodrillo

∙ 20 pin più piccoli, accessibili solo con una breakout board (scheda di espansione o shield)

---

## PAGE 3

Pin Disponibili sul micro:bit

Pin Grandi (Ring)

P0, P1, P2 - GPIO con capacità input e output

Attenzione: P0 è condiviso con l’uscita audio quando si riproduce musica, quindi in quel caso non utilizzarlo.

3V: uscita a 3,3 Volt fissi (+)

GND: massa (-)

Pin Piccoli

P3-P16: GPIO aggiuntivi (alcuni condivisi con LED)

P17-P18: uscita a 3,3 V fissi (come l’uscita 3V)

P19-P20: specializzati per la comunicazione I2C (Inter-Integrated Circuit), ovvero permette la comunicazione

con più dispositivi utilizzando solo due fili e gli indirizzi.

---

## PAGE 4

Input Digitale – Lettura dei pin da P0 a P16

Leggere un valore digitale da un pin (0 o 1):

● Se rileva tensione indica valore 1 - se non rileva tensione indica valore 0

● Attenzione se nel pin non è collegato nulla potrebbe mostrare di default 1

# MicroPython

valore = pin0.read_digital()

if valore == 1:

display.show(Image.HAPPY)

// MakeCode

pins.digitalReadPin(DigitalPin.P0)

// Blocchi

Segnale digitale – leggi daPin.P0

// Blocchi Thinkercad

leggi pin digitale P0

---

## PAGE 5

Input Digitale – Lettura dei pin da P0 a P16 -

Valore di default

Nel circuito simulato viene

inserita una resistenza da 1 K

Ohm per forzare il valore 0 del

pin 0 a riposo.

Lo stesso effetto si ottiene

usando il comando: imposta il

pull down.

Non sempre è necessario fare

questo.

---

## PAGE 6

Output Digitale – Scrittura dei pin da P0 a P16

Scrivere un valore digitale su un pin (HIGH o LOW):

# MicroPython

pin0.write_digital(1) # HIGH (3.3V)

pin0.write_digital(0) # LOW (0V)

// MakeCode (Blocks/JavaScript)

pins.digitalWritePin(DigitalPin.P0, 1)

// Blocchi MakeCode

segnale digitale – scrivi su P0 con 1

pins.digitalWritePin(DigitalPin.P0, 0)

segnale digitale – scrivi su P0 con 0

// Blocchi Thinkercad

Pin di scrittura digitale – P0 in ALTO

Pin di scrittura digitale – P0 in BASSO

---

## PAGE 7

Output Digitale – Scrittura dei pin da P0 a P16

---

## PAGE 8

ADC e PWM

I PIN del micro:bit possono gestire solo valori digitali.

Per fare in modo che gestisca anche valori analogici si usano le tecnologie ADC e PWM che eseguono un

campionamento a 10 bit.

PWM (Pulse Width Modulation)

Serve per l'Output. Il micro:bit non può davvero emettere "metà tensione". Per simulare un segnale

analogico (es. per regolare la luminosità di un LED o la velocità di un motore), accende e spegne il pin

digitalmente in modo rapidissimo. Anche in questo caso un numero tra 0 e 1023 che rappresenta una

tensione tra 0 e 3,3 volt.

ADC (Analog-to-Digital Converter)

Serve per l'Input. Poiché il processore capisce solo i bit, l'ADC trasforma una tensione (es. 1.5V) in un

numero comprensibile dal codice ovvero un numero tra 0 e 1023 che rappresenta una tensione tra 0 e 3,3

volt.

---

## PAGE 9

Output Analogico (PWM)

Scrivere un valore analogico usando PWM:

# MicroPython

pin0.write_analog(512) # 0-1023

# 512 = circa 50% (1.65V)

Nota: Max 3 pin PWM contemporanei! Il micro:bit non riesce ad alimentarli insieme

// MakeCode

pins.analogWritePin(AnalogPin.P0, 512) // 0-1023

// Blocchi

Segnale analogico – scrivi su pin P0 con 512

// Blocchi Thinkercad

scrivi pin analogico P0 in [valore]

---

## PAGE 10

Pin con Capacità Analogica in scrittura

---

## PAGE 11

Pin con Capacità Analogica in lettura

Solo alcuni pin possono leggere valori analogici (ADC):

P0, P1, P2 - Pin grandi con ADC

P3, P4, P10 - Pin aggiuntivi con ADC – Attenzione questi pin sono condivisi con i led, quindi le letture

potrebbero essere imprecise, a meno che non si disattivino i led.

Attenzione anche al pin 0 quando si riproduce la musica

Lettura: valori da 0 a 1023 (0V – 3.3V)

Per convertire il valore ottenuto dalla lettura del pin, in un valore in volt si usa una proporzione:

1023 : 3,3 = Valore : Tensione

---

## PAGE 12

Input Analogico - Lettura ADC

Leggere un valore analogico (solo pin con ADC): P0 - P1 - P2 - P3 - P4 - P10

# MicroPython

valore = pin0.read_analog() # 0-1023

# 0 = 0V, 1023 = 3.3V

// MakeCode

pins.analogReadPin(AnalogPin.P0)

// Blocchi

lettura analogica P0

// Blocchi Thinkercad

leggi pin analogico P0

---

## PAGE 13

Pin con Capacità Analogica in lettura

---

## PAGE 14

Pin con Capacità Analogica in scrittura

Quasi tutti i pin possono scrivere valori analogici (PWM):

P0, P1, P2 - Pin grandi con PWM

P3-P4-P6-P7-P9-P10 - Pin aggiuntivi con PWM – Attenzione questi pin sono condivisi con i led,

quindi le scritture potrebbero essere imprecise, a meno che non si disattivino i led.

P5-P11 - Pin aggiuntivi con PWM –  Attenzione questi pin sono condivisi con i pulsanti A e B, quindi

ci potrebbero essere interferenze

P8-P12-P13-P14-P15-P16 – Pin aggiuntivi con PWM - Pin puliti e sicuri

Lettura: valori da 0 a 1023 (0V – 3.3V)

Per convertire il valore ottenuto dalla lettura del pin, in un valore in volt si usa una proporzione:

1023 : 3,3 = Valore : Tensione

---

## PAGE 15

Pin Condivisi con Matrice LED

Alcuni pin sono condivisi con la matrice LED:

∙ P3, P4, P6, P7, P9, P10 (colonne LED)

∙ Puoi usarli disabilitando il display ( display.off() )

---

## PAGE 16

Resistenze Pull-Up e Pull-Down

In alcuni casi le letture sono sfasate per interferenza elettromagnetiche.

In questi casi è opportuno forzare i valori in alto (pull-up) o in basso (pull-down)

PULL_UP: Pin a 3.3V quando non collegato

PULL_DOWN: Pin a 0V quando non collegato

Lo stesso effetto del comando pull down si ottiene collegando una resistenza (da 1 Kohm) tra il pin e

la massa.

---

## PAGE 17

⚠ Attenzione alla Tensione!

I pin del micro:bit lavorano a 3.3V

∙ NON collegare mai 5V direttamente ai pin!

∙ Usare sempre resistenze per LED (220Ω consigliato)

∙ Corrente massima per pin: 5mA (totale 90mA)

∙ Se si una una shield per alimentare sensori a 5V stare attenti al segnale di ritorno che sarà

sempre di 5V. In questo caso è opportuno collegare un partitore di tensione

---

## PAGE 18

Riepilogo Comandi MicroPython

∙ Scrive digitale

∙ Legge digitale

∙ Scrive analogico (tramite PWM)

∙ Legge analogico

---

## PAGE 19

Progetti concreti: Cosa posso collegare ai pin del micro:bit

∙ Ingressi digitali: pulsanti, interruttori, sensori PIR, finecorsa

∙ Uscite digitali: LED, relè, buzzer, transistor, piccoli attuatori

∙ Ingressi analogici: sensori di luce, potenziometri, trimmer, sensori di temperatura analogici

∙ Uscite analogiche simulate con PWM: luminosità LED, velocità di motori, servo

Attenzione: i pin del micro:bit lavorano a 3,3 V e non vanno collegati direttamente a 5 V

---

## PAGE 20

Input Digitale – Esempio di utilizzo con un PIR

---

## PAGE 21

Input Digitale – Esempio di utilizzo con un

sensore di prossimità HC-SR04

---

## PAGE 22

Output Digitale – Esempio accensione di un led

---

## PAGE 23

Output Digitale – Esempio di utilizzo con

attuatore: relè e lampadina a 12V

---

## PAGE 24

Grazie!

Pronto a programmare i pin del tuo micro:bit?

Sperimenta con LED, pulsanti e sensori!

---

