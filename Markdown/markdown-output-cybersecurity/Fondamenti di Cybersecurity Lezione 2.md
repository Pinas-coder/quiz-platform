# Fondamenti di Cybersecurity Lezione 2


Tipologie di minacce
informatiche
Vediamo
 a
 seguire
 le
 principali
 tipologie
 e
metodologie
 di
 attacco
 informatico,
 classificate
in
 base
 all'obiettivo
 della
 Triade
 CIA
(Confidenzialità,
 Integrità,
 Disponibilità)
 che
queste
 tecniche
 mirano
 a
 compromettere
.

---

Phishing e Social
Engineering
Tecniche

di
attacco

umane
Phishing e social engineering
manipolano
 psicologicamente
 le
vittime
 per
compromettere
 la
sicurezza
 dei
sistemi
.
Impatto

sulla

Triade CIA
Phishing
compromette
 principalmente
 la
confidenzialità
 e
può
influire
 anche
 sull'integrità
 e
disponibilità
 dei
dati
.
Prevenzione

e
formazione
Strategie
 di
difesa
 includono
 filtri
 antispam,
autenticazione
multifattore
 e
formazione
 continua degli
utenti
.
Procedure
organizzative
Le
organizzazioni
 devono
 usare
 simulazioni
 di phishing e
politiche
rigorose
 per
aumentare
 la
resilienza
 alle
minacce
.

---

Vishing e Smishing
Definizione di Vishing
Il vishing usa chiamate telefoniche per ingannare le vittime e
ottenere dati sensibili come numeri di carte e codici di accesso.
Definizione di Smishing
Lo smishing impiega messaggi SMS con link malevoli o richieste
urgenti per truffare gli utenti e raccogliere informazioni personali.
Impatto sulla Triade CIA
Vishing e smishing compromettono la confidenzialità, e possono
influenzare anche integrità e disponibilità dei dati.
Strategie di Difesa
L'educazione degli utenti e l'autenticazione multifattore sono
chiave per prevenire accessi fraudolenti via vishing e smishing.

---

Man
-
in
-
the
-
Middle (MitM)
Meccanismo dell'attacco MitM
L'attaccante si inserisce tra due comunicanti per intercettare e
manipolare i dati trasmessi.
Tecniche avanzate di attacco
ARP spoofing, DNS poisoning e compromissione di certificati
falsificano l'identità delle parti coinvolte.
Impatto sulla sicurezza
Le violazioni riguardano confidenzialità, integrità e disponibilità dei
dati e dei servizi.
Mitigazione e prevenzione
Uso di HTTPS, TLS, certificati validati e VPN riducono i rischi di
intercettazione su reti insicure.

---

SQL Injection
Definizione di SQL Injection
L'SQL Injection è una vulnerabilità che permette di manipolare
query SQL tramite input non filtrati, compromettendo la sicurezza.
Impatto sulla sicurezza
La vulnerabilità compromette confidenzialità, integrità e
disponibilità dei dati sensibili nelle applicazioni web.
Misure di mitigazione
Utilizzo di query parametrizzate, sanitizzazione input e controlli di
accesso per prevenire attacchi SQL Injection.
Pratiche di sicurezza consigliate
Implementare scanning automatico, test di penetrazione e
revisione del codice per una protezione continua.

---

Definizione di XSS
XSS permette l'iniezione di codice eseguibile in pagine web
visualizzate da altri utenti, eseguito nel browser della vittima.
Tipi di XSS
Le forme principali di XSS sono memorizzato, riflesso e DOM-
based, tutte causate da input non sanitizzati.
Impatto sulla sicurezza
XSS compromette confidenzialità e integrità ottenendo dati
sensibili e modificando contenuti della pagina.
Misure di mitigazione
Validazione input, Content Security Policy, cookie HttpOnly
e separazione dati-codice riducono il rischio XSS.
Cross
-
Site Scripting (XSS)

---

Cross
-
Site Request Forgery (CSRF)
Definizione di CSRF
Un attacco che induce un utente autenticato a eseguire azioni non autorizzate
senza il suo consenso.
Impatto sulla sicurezza
Compromette l'integrità eseguendo azioni privilegiate indesiderate nel sistema
vulnerabile.
Misure di mitigazione
Uso di token anti-CSRF unici, controllo dell'origine delle richieste e autenticazione
aggiuntiva.

---

Malware
Tipi comuni di malware
Trojan, spyware, keylogger e backdoor sono
esempi diffusi di malware che
compromettono la sicurezza dei sistemi.
Minacce alla Triade CIA
Il malware compromette la confidenzialità,
integrità e disponibilità dei dati e dei sistemi
informatici.
Tecniche MITRE ATT&CK
Le tecniche di malware includono accesso
alle credenziali, raccolta informazioni ed
esecuzione di codice malevolo.

---

Ransomware
Definizione del ransomware
Il ransomware cripta i dati di un sistema rendendoli inaccessibili
fino al pagamento di un riscatto.
Impatto su disponibilità e integrità
Gli attacchi bloccano sistemi e servizi critici, causando perdita di
disponibilità e possibile distruzione dei dati con varianti wiper.
Minaccia alla confidenzialità
La doppia estorsione prevede l'esfiltrazione dei dati prima della
cifratura, minacciando la confidenzialità delle informazioni.
Strategie di mitigazione NIST
Backup robusti, monitoraggio, risposta agli incidenti e recovery
sono essenziali per contrastare gli attacchi ransomware.

---

DDoS e DoS
Definizione di DoS e DDoS
Gli attacchi DoS e DDoS mirano a rendere un servizio indisponibile
saturando risorse di rete o computazionali.
Differenze tra DoS e DDoS
Il DoS usa una singola macchina, mentre il DDoS sfrutta una botnet
di migliaia di dispositivi compromessi simultaneamente.
Obiettivi e impatti degli attacchi
L'attacco compromette la disponibilità, a volte mascherando altri
attacchi per confidenzialità o integrità.
Contromisure efficaci
Mitigazione specializzata, ridondanza di rete e analisi del traffico
identificano schemi anomali e proteggono i sistemi.

---

Privilege Escalation
Definizione di Privilege Escalation
Ottenere privilegi superiori sfruttando vulnerabilità e
configurazioni di sistema deboli o controlli insufficienti.
Impatto sulla sicurezza
Compromette integrità, confidenzialità e disponibilità
modificando file critici e disattivando servizi.
Tecniche comuni
Abuso di permessi, manipolazione di token e uso improprio di
comandi privilegiati per ottenere accesso superiore.
Ruolo negli attacchi avanzati
Fase ricorrente che consente consolidamento dell'accesso e
amplificazione dei danni sul sistema target.

---

Exploit e Zero
-
day
Rischi degli exploit e zero-day
Gli exploit, inclusi gli zero-day,
rappresentano minacce gravi per la
sicurezza delle organizzazioni e sfruttano
vulnerabilità non ancora corrette.
Impatto sulla sicurezza
Gli exploit possono compromettere
confidenzialità, integrità e disponibilità dei
dati causando furti, manomissioni o
interruzioni di servizio.
Strategie di difesa
Mantenere sistemi aggiornati, monitorare
vulnerabilità e utilizzare sistemi IPS sono
essenziali per proteggersi dagli exploit e
zero-day.

---

Credential Theft
Tecniche di furto credenziali
Le tecniche includono keylogging, phishing, dumping della
memoria e riutilizzo di credenziali trafugate.
Accesso con identità legittime
Gli aggressori usano credenziali rubate per accedere ai
sistemi eludendo controlli di autenticazione.
Impatto su confidenzialità e integrità
Il furto compromette la confidenzialità e può alterare dati o
configurazioni, influenzando l'integrità.
Ruolo nelle minacce avanzate
Il furto di credenziali è centrale in attacchi avanzati e
persistenti secondo MITRE ATT&CK.

---

Lateral
Movement
Movimento laterale in rete
L'attaccante si sposta all'interno della rete
sfruttando credenziali rubate o vulnerabilità
per raggiungere sistemi più importanti.
Impatto sulla sicurezza
Il movimento laterale compromette la
confidenzialità e può alterare dati,
influenzando anche l'integrità del sistema.
Mitigazione e controllo
Sono necessari controlli rigorosi di
segmentazione di rete e monitoraggio
continuo delle attività interne per prevenire
intrusi.

---

Data Exfiltration
Definizione di data exfiltration
La data exfiltration è l'estrazione non autorizzata di dati sensibili
da un sistema verso l'esterno, compromettendo la sicurezza.
Metodi di occultamento
Gli attaccanti usano canali leciti come HTTPS, DNS tunneling o
servizi cloud per nascondere il traffico dannoso.
Impatto sulla confidenzialità
La confidenzialità della Triade CIA è compromessa poiché dati
riservati vengono sottratti o divulgati.
Contromisure consigliate
Implementare DLP, monitoraggio del traffico e controlli rigorosi
per prevenire l'esfiltrazione dati.

---

Supply
Chain
Attack
Compromissione della catena di fornitura
Gli attacchi alla supply chain
compromettono fornitori e componenti per
introdurre vulnerabilità nei prodotti finali.
Impatto sulla Triade CIA
Questi attacchi possono compromettere la
confidenzialità, integrità e disponibilità dei
sistemi IT.
Mitigazione dei rischi
Controlli di provenienza, firma del codice e
audit fornitori sono essenziali per ridurre i
rischi.

---

Watering Hole e Drive
-
by
Attacchi

Watering Hole
Gli
 attacchi
 watering hole
compromettono
 siti
 legittimi
frequentati
 dalle
 vittime
 per
distribuire
 malware.
Drive
-
by Download
Silente
Un drive
-
by download
installa
 malware
silenziosamente
quando
 l'utente
 visita
 la
pagina
 compromessa
.
Compromissione

della
Confidenzialità
Questi
 attacchi
 forniscono
 accesso
iniziale
 e
compromettono
 la
confidenzialità
 dei
sistemi
 target.
Difficoltà di
Rilevamento
Gli
 attacchi
 sono
 difficili
 da
rilevare
 per
l
'
utente
 finale,
aumentando
 il
rischio
 di
compromissione
.

---

Broken Access Control
Definizione

di Broken Access Control
Si
verifica
 quando
 i
 controlli
 di
autorizzazione
 sono
 mal
implementati
,
permettendo
 accessi
 non
autorizzati
 a
dati
 e
funzioni
.
Esempi

Comuni

di
Vulnerabilità
Include accesso
diretto
 tramite
 URL,
uso
 improprio
 di token di
sessione
 e
mancanza
 di
verifica
 dei
privilegi
.
Impatto

sulla

Sicurezza
Principale
 impatto
 sulla
 confidenzialità
 e
integrità
 dei
dati
, con
possibili
modifiche
 non
autorizzate
.
Raccomandazioni

OWASP
OWASP
raccomanda
 controlli
 di
autorizzazione
 rigorosi
 a tutti
i
 livelli
dell
'
applicazione
.

---

Security
Misconfiguration
Definizione

di Security Misconfiguration
Configurazioni
 errate
 o
insicure
 che
 espongono
 dati
 sensibili
 e
facilitano
exploitation dei
sistemi
.
Esempi

Comuni
Porte
aperte
 inutili
, directory listing
attivo
,
credenziali
 di default e
servizi
 non
aggiornati
.
Impatto

sulla

Sicurezza
Compromette
 confidenzialità
,
integrità
 e
disponibilità
 dei
dati
 e
servizi
 critici
.
Approccio

di
Mitigazione
Richiede
 hardening,
gestione
 patch e
revisione
 periodica
 delle
impostazioni
di
sicurezza
.

---

Insider Threat
Tipologie

di
minacce

interne
Le
minacce

interne
includono

insider
malintenzionati

e
negligenti

che

compromettono

la
sicurezza

aziendale
.
Impatto

sulla

Triade CIA
Le
minacce

interne
compromettono

confidenzialità
,
integrità

e
disponibilità

dei
dati

e
sistemi

aziendali
.
Linee
guida

e
contromisure

NIST
Le
linee

guida

NIST
raccomandano

monitoraggio
,
controlli

di accesso e
cultura

della
sicurezza

per
mitigare

i

rischi
.

---

Attacchi

ai Backup
Obiettivo degli attacchi
Gli attacchi ai backup mirano a distruggere i dati di recupero
per impedire il ripristino dopo un incidente.
Uso combinato con ransomware
Questi attacchi spesso accompagnano ransomware per
aumentare il potere ricattatorio tramite cancellazione o
cifratura dei backup.
Impatto sulla disponibilità
Senza backup validi, i sistemi non possono essere ripristinati
compromettendo gravemente l'operatività dell'organizzazione.
Strategie di difesa NIST
Le linee guida NIST raccomandano backup multilivello, copie
offline, test regolari e monitoraggio per garantire la resilienza.

---

Urgenza
1ï¸âƒ£
Urgenza
 (
Time Pressure
)
Messaggi tipici:
"
Il tuo conto sarà bloccato entro
24
ore
"
"
Ultimo avviso
"
"
Azione immediata richiesta
"
Perché funziona?
Riduce il pensiero critico
Attiva la risposta emotiva (amigdala)
Impedisce verifiche razionali

---

Paura e Minaccia
2ï¸âƒ£
Paura e Minaccia
Blocco credenziali
Conto sospeso
Procedimento legale
Virus rilevato
Bias
 attivato:
 loss
 aversion
 (paura di perdere
qualcosa).
Esempi classici: finti messaggi da Poste Italiane
o Intesa Sanpaolo con allarme sicurezza.

---

Autorità
3ï¸âƒ£
Autorità
Il truffatore si finge:
CEO (CEO
fraud
)
Forze dell
'
ordine
Agenzia delle Entrate
Banca
Supporto Microsoft
Bias
:
 principio di autorità (
Milgram
).
L
'
essere umano tende a obbedire a figure percepite
come legittime.

---

Fiducia e Familiarità
4ï¸âƒ£
Fiducia e Familiarità
Hai citato correttamente
"
fiducia da un
destinatario noto
"
.
Varianti:
Account social compromesso di un amico
Email da collega reale
WhatsApp da
"
figlio
"
con numero nuovo
Bias
:
 familiarity
 heuristic
 â€”
 se lo riconosco, mi
fido.

---

Ricompensa e
Guadagno Facile
5ï¸âƒ£
Ricompensa / Guadagno Facile
Rimborso economico
Vincita premio
Investimento con rendimento altissimo
Crypto
 giveaway
Bias
:
 avidità + ottimismo irrealistico.

---

Bisogno e Vulnerabilità
6ï¸âƒ£
Bisogno e Vulnerabilità
"
bisogno di denaro
"
Colpisce: Disoccupati;
Persone in difficoltà economica;
Anziani soli; Persone emotivamente fragili
Esempi:
Romance
scam
Finto lavoro
Prestiti immediati

---

Scarsità
7ï¸âƒ£
Scarsità
 (
Scarcity
)
"
Solo per oggi
"
"
Ultimi
3
posti disponibili
"
"
Offerta limitata
"
Bias
: principio di scarsità (Cialdini).
Più qualcosa sembra raro, più lo percepiamo
prezioso

---

Reciprocità
8ï¸âƒ£
Reciprocità
"
Ti abbiamo accreditato
50
â‚¬
"
"
Ecco il tuo bonus
"
L
'
essere umano si sente inconsciamente in
dovere di
"
ricambiare
"
.

---

Sovraccarico cognitivo
9ï¸âƒ£
Sovraccarico Cognitivo
Messaggi lunghi, tecnici, confusi.
Obiettivo:
Stancare
Confondere
Indurre a cliccare senza leggere
Molto usato nel phishing BEC (Business Email
Compromise).

---

Riprova Sociale
Approvazione Sociale
 (
Social
Proof
)
"
Migliaia di utenti hanno già aderito
"
Finti commenti positivi
Finti like
Se
"
gli altri lo fanno
"
, allora è sicuro.
"Your Profile
is
 getting
 hits"

---

Curiosità
1ï¸âƒ£
1ï¸âƒ£
Curiosità
"
Guarda chi ha visto il tuo profilo
"
"
Video imbarazzante che ti riguarda
"
La curiosità abbassa la difesa.

---

Corenza
 e Impegno
1ï¸âƒ£
2ï¸âƒ£
Coerenza e Impegno
Piccola richiesta iniziale
â†’
richiesta più grande.
Esempio:
"
Conferma la tua email
"
"
Inserisci password
"
"
Inserisci codice OTP
"
Tecnica del foot
-
in
-
the
-
door, "piede sulla porta"

---

Affettività /Sessualità
1ï¸âƒ£
3ï¸âƒ£
Affettività /Sessualità
Carenze affettive o curiosità
Esempio:
"
Ti senti solo
"
"
Mi chiamo
…
vorrei conoscerti
"
"
Guarda la foto allegata
…"

---

Il potere del social engineering
1
https
:
//youtu
.
be/opRMrEfAIiI

---

https
:
//youtu
.
be/G
45
P_lnduI
0
Il potere del social engineering
2

---

Analisi Phishing
Fishing
 (pescare):
Metafora del "gettare
l'esca" per catturare dati
sensibili o password degli
utenti.
Phreaking
: Termine che
negli anni '
70
/'
80
indicava
la manipolazione dei
sistemi telefonici (phone
freaks) per effettuare
chiamate gratuite, da cui
è stata ereditata la grafia
con "
ph
"

---

Analisi Phishing
Tattiche
: Che cosa...
Tecniche
: Come
…
Procedure
: Dettagli
…

---

Analisi Phishing
1ï¸âƒ£
Preparazione attacco(Hacker
prepara email falsa)
2ï¸âƒ£
Invio messaggio phishing
â†’
email /
sms / messaggio social
3ï¸âƒ£
Ricezione messaggio.
Utente vede comunicazione
apparentemente legittima
4ï¸âƒ£
Click su link
â†’
apertura sito
fraudolento
5ï¸âƒ£
Inserimento
credenzialiutente
 digita
password / dati
6ï¸âƒ£
Raccolta dati
â†
hacker riceve le
credenziali
7ï¸âƒ£
Possibile abuso account

---

https://  ilnousapapretiondevemir.autos/

---

https://  cnritofce.mustucanaoevosfrd.sbs/g8nInHD-pfDMO-wLoSEVI-7SrMHcr/index.html
https://  cnritofce.mustucanaoevosfrd.sbs/g8nInHD-pfDMO-wLoSEVI-NaJbczx/index.html
Tentativi successivi, viene generata casualmente una nuova pagina:

---

Received
: from AS
5
PR
07
MB
9894
.eurprd
07
.prod.outlook.com (::
1
) by
DU
2
PR
07
MB
9585
.eurprd
07
.prod.outlook.com with HTTPS;
Wed
,
4
Mar
2026 18:00:43
+
0000
Authentication
-
Results
:
dkim
=none (
message
 not
signed
)
header.d
=
none;dmarc
=none action=none
header.from
=cnr.it;
Received
: from FRWPR
07
MB
10848
.eurprd
07
.prod.outlook.com
(
2603:10
a
6
:d
10:1
a
2
::
13
) by AS
5
PR
07
MB
9894
.eurprd
07
.prod.outlook.com
(
2603:10
a
6:20
b:
683
::
13
) with Microsoft SMTP Server (
version
=TLS
1
_
2
,
cipher
=TLS_ECDHE_RSA_WITH_AES_
256
_GCM_SHA
384
) id
15.20.9654.22
;
Wed
,
4
Mar
2026 18:00:16
+
0000
Received
: from FRWPR
07
MB
10848
.eurprd
07
.prod.outlook.com
([fe
80
::
600
d:
6503:3
bb
9:3
db
4
]) by FRWPR
07
MB
10848
.eurprd
07
.prod.outlook.com
([fe
80
::
600
d:
6503:3
bb
9:3
db
4
%
3
]) with mapi id
15.20.9678.016
;
Wed
,
4
Mar
2026
18:00:16
+
0000
Content
-
Type:
application
/
ms
-
tnef
; name="winmail.dat"
Content
-
Transfer
-
Encoding
:
binary
From: ************************************<***********.********@cnr.it>
To: ******************<***********.********@cnr.it>
Subject
: R: Premio straordinario per il nostro personale! Comunicazione
ufficiale
Thread
-
Topic: Premio straordinario per il nostro personale! Comunicazione
ufficiale
R_ Premio straordinario per il nostro personale! Comunicazione ufficiale.msg

