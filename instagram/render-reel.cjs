const { chromium } = require('playwright');
// Deterministično upodabljanje CSS animacij: za vsako sličico animacije premaknemo na čas t,
// vrednosti zapišemo v inline slog (commitStyles) in animacije izklopimo, nato zajamemo sliko.
(async () => {
  const [html, outDir, fps = 30, T = 21, only] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await p.goto('file://' + html); await p.evaluate(() => document.fonts.ready);
  await p.addStyleTag({ content: 'html.frozen *, html.frozen *::before, html.frozen *::after { animation: none !important; }' });
  const n = only ? 1 : Math.round(T * fps);
  for (let i = 0; i < n; i++) {
    const t = only ? Number(only) : i / fps;
    await p.evaluate((ms) => {
      const root = document.documentElement;
      root.classList.remove('frozen');
      document.querySelectorAll('[style]').forEach((el) => { if (el.dataset.keep === undefined) el.removeAttribute('style'); });
      void root.offsetHeight;
      for (const a of document.getAnimations()) { a.pause(); a.currentTime = ms; try { a.commitStyles(); } catch (e) {} }
      root.classList.add('frozen');
      void root.offsetHeight;
    }, t * 1000);
    await p.screenshot({ path: `${outDir}/f${String(i).padStart(4, '0')}.jpg`, type: 'jpeg', quality: 92 });
  }
  await b.close();
})();
