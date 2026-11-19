// Stare naslove na GitHub Pages spremeni v preusmeritve na novo domeno (ista pot).
// Uporaba: node scripts/build-redirects.mjs dist https://toplolog.si /tc-diagnostika
import fs from 'node:fs';
import path from 'node:path';
const [dir = 'dist', target, oldBase = '/tc-diagnostika'] = process.argv.slice(2);
if (!target) { console.error('Manjka ciljna domena, npr. https://toplolog.si'); process.exit(1); }
const to = target.replace(/\/$/, '');
let n = 0;
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { walk(p); continue; }
    if (!e.name.endsWith('.html')) { fs.rmSync(p); continue; } // brez CSS/JS/slik – le preusmeritve
    const rel = '/' + path.relative(dir, p).split(path.sep).join('/');
    const route = rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel === '/404.html' ? '/' : rel;
    const url = to + route;
    fs.writeFileSync(p, `<!doctype html><html lang="sl"><head><meta charset="utf-8">
<title>Stran se je preselila – Toplolog</title>
<link rel="canonical" href="${url}"><meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${url}">
<script>location.replace(${JSON.stringify(url)} + location.hash);</script>
</head><body style="font-family:system-ui,sans-serif;padding:2rem">
<p>Stran Toplolog se je preselila na <a href="${url}">${url}</a>.</p>
</body></html>`);
    n++;
  }
}
walk(dir);
// 404: tudi neznane stare poti vodijo na domačo stran nove domene
fs.writeFileSync(path.join(dir, '.nojekyll'), '');
console.log(`Preusmeritve: ${n} strani -> ${to} (stara osnova ${oldBase})`);
