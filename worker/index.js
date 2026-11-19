// Toplolog Worker: statične strani + API za seznam za obveščanje (Cloudflare D1).
// Vse poti razen /api/obvestila streže iz statičnih datotek (dist/).

const JSON_HEADERS = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' };
const REGIJE = new Set(['Gorenjska', 'Goriška', 'Jugovzhodna Slovenija', 'Koroška', 'Notranjsko-kraška', 'Obalno-kraška',
  'Osrednjeslovenska', 'Podravska', 'Pomurska', 'Posavska', 'Savinjska', 'Zasavska']);
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/;

const reply = (status, body) => new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });

async function ensureTable(db) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS obvestila (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    regija TEXT,
    soglasje_at TEXT NOT NULL,
    drzava TEXT
  )`).run();
}

async function subscribe(request, env) {
  if (request.method !== 'POST') return reply(405, { ok: false, error: 'method' });
  // samo z naše strani (zaščita pred oddajo z drugih spletnih mest)
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return reply(403, { ok: false, error: 'origin' });

  let data;
  try { data = await request.json(); } catch { return reply(400, { ok: false, error: 'json' }); }
  const email = String(data.email || '').trim().toLowerCase();
  const regija = REGIJE.has(data.regija) ? data.regija : null;

  if (data.website) return reply(200, { ok: true }); // past za robote: tiho zavrni
  if (!EMAIL_RE.test(email) || email.length > 254) return reply(400, { ok: false, error: 'email' });
  if (data.soglasje !== true) return reply(400, { ok: false, error: 'soglasje' });

  await ensureTable(env.DB);
  await env.DB.prepare(
    `INSERT INTO obvestila (email, regija, soglasje_at, drzava) VALUES (?1, ?2, ?3, ?4)
     ON CONFLICT(email) DO UPDATE SET regija = COALESCE(excluded.regija, obvestila.regija)`
  ).bind(email, regija, new Date().toISOString(), request.cf?.country || null).run();
  return reply(200, { ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/obvestila') {
      if (!env.DB) return reply(503, { ok: false, error: 'db' });
      try { return await subscribe(request, env); }
      catch (e) { console.error('obvestila', e); return reply(500, { ok: false, error: 'server' }); }
    }
    return env.ASSETS.fetch(request);
  },
};
