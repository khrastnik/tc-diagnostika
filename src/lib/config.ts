/**
 * Seznam za obveščanje (Brevo).
 * V Brevu: Contacts → Forms → Subscription form → Share → »Embed« → iz HTML kode kopiraj vrednost atributa action
 * pri <form ... action="https://....sibforms.com/serve/...">. Prilepi jo spodaj.
 * Dokler je prazno, se obrazec na strani ne prikaže.
 */
export const WAITLIST_ACTION: string = '';

/** Slovenske statistične regije za neobvezno izbiro (atribut REGIJA v Brevu). */
export const REGIJE = [
  'Gorenjska', 'Goriška', 'Jugovzhodna Slovenija', 'Koroška', 'Notranjsko-kraška', 'Obalno-kraška',
  'Osrednjeslovenska', 'Podravska', 'Pomurska', 'Posavska', 'Savinjska', 'Zasavska',
];
