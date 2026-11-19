# Vizija: od Toplologa do servisa toplotnih črpalk

Zapisano 19. 11. 2026. To je načrt za prihodnost, ne naloga za zdaj. Danes je Toplolog samo informativna stran z članki in novicami.

## Izhodišče

- Klemen ima izkušnje s toplotnimi črpalkami, spričevalo za F-pline in vse pogoje za opravljanje servisa.
- Dejavnost še ni registrirana. Dokler ni, stran ne sprejema naročil.
- Toplolog ima 13 člankov o tem, kako črpalke delujejo, zakaj se kvarijo in kako jih vzdrževati. To je osnova za vse spodaj.

## Prednosti

- **Vsebina kot vir strank.** Večina serviserjev v Sloveniji ima stran z »Kontakt« in tremi fotografijami. Toplolog bo imel 50 člankov, ki odgovorijo na vprašanje, preden stranka sploh pokliče. Konkurenca za slovenske iskalne poizvedbe o toplotnih črpalkah je majhna, zato je to dosegljivo.
- **Usmeritev v diagnostiko.** Servis ne prodaja naprav, zato je lahko neodvisno drugo mnenje, ko monter reče »treba bo zamenjati«. To je niša, ki je velika podjetja ne pokrivajo.
- **Digitalni servisni zapisnik.** Stranka ga dobi po e-pošti, serviser ima zgodovino naprave ob naslednjem obisku. To pri konkurenci skoraj ne obstaja.

## Tveganja

- **Orodja namesto servisa.** Največje tveganje je, da se mesece gradijo orodja, namesto da bi se servisiralo. Stranke izbirajo po odzivnosti, terminu in tem, ali je napaka najdena, ne po orodjih v ozadju.
- **Toplolog bo prve stranke prinašal počasi.** Prvih 6–12 mesecev bodo stranke prišle predvsem z mojster.si, iz priporočil in lokalnih skupin na Facebooku.
- **Proizvajalci.** Mnogi omejujejo servisno programsko opremo, rezervne dele in garancijska popravila na pooblaščene partnerje. Preveriti pri 3–4 najpogostejših znamkah, preden se servis veže nanje.
- **Sezona in en človek.** Januarja je vse nujno hkrati. Obrazec, ki prinese več prijav, kot jih je mogoče obdelati, prinese slabe ocene.

## Ena zbirka simptomov, trije izdelki

Jedro je zbirka simptomov (npr. »zunanja enota je zaledenela«, »ne greje dovolj«, »pogosto se vklaplja in izklaplja«). Vsak simptom se zapiše enkrat in se uporabi na treh mestih:

| Simptom | Toplolog (javno) | Prijavi težavo (obrazec) | Diagnostik (zasebno) |
| --- | --- | --- | --- |
| Zunanja enota zaledenela | Kaj je normalno in kaj lastnik varno preveri sam | Kategorija napake + takojšnja kratka razlaga | Tlaki, senzorji, ventil za odtaljevanje, kode napak po znamki |

Javni del nikoli ne vsebuje navodil za posege v hladilni krog. Zasebni del vsebuje vse.

## 1. Obrazec »Prijavi težavo« na Toplologu

- Polja: kategorija napake, opis, fotografija (neobvezno), ime, telefon, kraj ali poštna številka.
- Ko obiskovalec izbere kategorijo, mu obrazec pokaže ustrezen članek. Del prijav, ki niso okvare (npr. običajno odtaljevanje), se tako reši brez klica.
- Tehnično: na osnovi obstoječega obrazca `Waitlist` in Workerja (`worker/index.js`, baza Cloudflare D1). Fotografije v Cloudflare R2, obvestilo o novi prijavi na `info@toplolog.si`, zaščita pred spamom s Cloudflare Turnstile.
- Pred objavo: posodobiti stran Zasebnost (stran bo zbirala osebne podatke) in dodati privolitev.

## 2. Diagnostik (orodje za teren)

- Na terenu izbereš simptom, orodje pokaže, kaj preveriti in v kakšnem vrstnem redu, katere meritve narediti in na kaj paziti.
- Deluje brez signala (kleti, kotlovnice): spletna aplikacija, nameščena na telefon (PWA).
- Ugotovitve z obiska se shranijo in postanejo servisni zapisnik za stranko.
- Prijava s Toplologa že nosi kategorijo, zato je kontrolni seznam ob prihodu že pripravljen.
- AI pomočnik pride v poštev šele, ko je zbirka postopkov zapisana, in samo kot pomoč pri iskanju po njej.

## 3. Admin za povpraševanja

- Vse prijave in povpraševanja na enem mestu: s Toplologa, mojster.si in primerjaj.si.
- Povpraševanj z mojster.si in primerjaj.si ne bi bral s strani portalov (pogoji uporabe tega verjetno ne dovoljujejo, ker so povpraševanja njihov plačljiv izdelek). Namesto tega: obvestila portalov po e-pošti se preusmerijo na npr. `povprasevanja@toplolog.si`, Cloudflare Email Routing jih preda Workerju, ta pa iz njih izlušči kraj, napravo in opis ter jih zapiše v isto bazo.
- Ali portala pošiljata dovolj podatkov po e-pošti, je treba preveriti, ko bo račun odprt.
- Iz admina: status povpraševanja, klic, termin, povezava na diagnostik in servisni zapisnik.

## Načrt

Vsaka faza se začne šele, ko je izpolnjen pogoj za prehod. Orodja se gradijo, ko ročno delo izmerljivo jemlje čas, ne prej.

### Faza 0: vsebina (zdaj, do registracije)

- Ritem objav po PRD: en vodnik in ena novica na teden.
- V 3–4 najbolj branih člankih dodati lastne fotografije in podatke.
- Začeti zbirko simptomov: ob vsakem novem članku iz rubrike Pogoste težave zapisati še zasebni del (kaj preveri serviser, meritve, na kaj paziti). Zadostuje dokument ali zapiski na telefonu.
- Pri 3–4 najpogostejših znamkah preveriti pogoje za neodvisni servis: dostop do servisne programske opreme, rezervnih delov, garancijskih popravil.

**Pogoj za prehod:** odločitev za registracijo dejavnosti in znano območje, ki ga bo servis pokrival.

### Faza 1: zagon servisa (prvih 3–6 mesecev po registraciji)

- Registracija dejavnosti, zavarovanje odgovornosti, cenik.
- Na strani O meni dodati izkušnje, spričevalo za F-pline in območje. Na Toplologu dodati telefon in preprosto stran »Servis«, brez obrazca.
- Profil na mojster.si in primerjaj.si, lokalne skupine na Facebooku, profil v Google Business.
- Ročno: povpraševanja v preglednici, kontrolni seznam iz zbirke simptomov na telefonu, servisni zapisnik kot PDF po e-pošti.
- Beležiti, koliko časa na teden gre za administracijo (odgovarjanje, termini, zapisniki).

**Pogoj za prehod:** 10–20 opravljenih servisov in jasno, kateri ročni koraki vzamejo največ časa.

### Faza 2: obrazec »Prijavi težavo«

- Obrazec na Toplologu, kot je opisan zgoraj, s kategorijo in takojšnjo razlago.
- Posodobljena stran Zasebnost in privolitev.
- Omejitev območja: prijava izven območja dobi vljuden odgovor s povezavo do člankov.

**Pogoj za prehod:** prijave prihajajo redno in njihova obdelava ročno vzame več kot ~3 ure na teden.

### Faza 3: admin in diagnostik

- Admin: vse prijave in povpraševanja na enem mestu, uvoz iz e-poštnih obvestil portalov, statusi, termini.
- Diagnostik: zbirka simptomov kot aplikacija na telefonu, ki deluje brez signala, s servisnim zapisnikom.
- Kaj se zgradi prej, določijo meritve iz faze 1 in 2.

## Odprta vprašanja

- Katero območje bo servis pokrival? Od tega je odvisno, ali obrazec potrebuje kraj in kaj stran odgovori prijavi izven območja.
- Ali so postopki diagnostike že kje zapisani (zapiski, servisna navodila proizvajalcev) ali bodo napisani na novo?
- Za katere znamke bo diagnostik vseboval kode napak?
- Ali bo servis nastopal pod imenom Toplolog ali pod svojim imenom, s Toplologom kot ločeno informativno stranjo?
