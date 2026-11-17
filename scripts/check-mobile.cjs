// Preveri strani pri širini telefona: brez vodoravnega pomikanja in brez napak v konzoli.
// Uporaba: npx astro preview --port 4321 & node scripts/check-mobile.cjs [pot ...]
const { chromium, devices } = require('playwright');
(async () => {
  const base = 'http://localhost:4321/tc-diagnostika';
  const paths = process.argv.slice(2).length ? process.argv.slice(2) : ['/'];
  const b = await chromium.launch();
  const p = await (await b.newContext(devices['iPhone 13'])).newPage();
  const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  let fail = false;
  for (const path of paths) {
    const r = await p.goto(base + path, { waitUntil: 'networkidle' });
    const ow = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    const ok = r.status() === 200 && ow <= 0;
    if (!ok) fail = true;
    console.log(`${ok ? 'OK  ' : 'FAIL'} ${path} status=${r.status()} overflow=${ow}px`);
  }
  if (errs.length) { fail = true; console.log('Napake v konzoli:', errs); }
  await b.close();
  process.exit(fail ? 1 : 0);
})();
