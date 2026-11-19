/*
 * reel-lib.js – časovnica za Reels (Web Animations API).
 * Prizore in učinke opišeš v SEKUNDAH; upodabljalnik (render-reel.cjs) jih premika sličico za sličico.
 *
 * Uporaba v HTML:
 *   <script src="reel-lib.js"></script>
 *   <script>
 *     reel(21, (r) => {
 *       r.scene('.s1', 0, 3.2, { enter: 'up' });
 *       r.pop('.badge', 2.0);
 *       r.count('.num', 0, 12, 4, 6);          // od 0 do 12 med 4. in 6. sekundo
 *       r.css('.frost', [[0, { opacity: 0 }], [6.5, { opacity: 0 }], [9, { opacity: 1 }]]);
 *     });
 *   </script>
 */
(function () {
  const EASE = 'cubic-bezier(.2,.8,.2,1)';
  const ENTER = {
    up:    [{ opacity: 0, transform: 'translateY(70px)' }, { opacity: 1, transform: 'none' }],
    down:  [{ opacity: 0, transform: 'translateY(-70px)' }, { opacity: 1, transform: 'none' }],
    left:  [{ opacity: 0, transform: 'translateX(-120px)' }, { opacity: 1, transform: 'none' }],
    right: [{ opacity: 0, transform: 'translateX(120px)' }, { opacity: 1, transform: 'none' }],
    scale: [{ opacity: 0, transform: 'scale(.85)' }, { opacity: 1, transform: 'none' }],
    blur:  [{ opacity: 0, filter: 'blur(18px)', transform: 'scale(1.06)' }, { opacity: 1, filter: 'blur(0)', transform: 'none' }],
    fade:  [{ opacity: 0 }, { opacity: 1 }],
  };
  function reel(T, build) {
    const ms = T * 1000;
    const all = (sel) => (typeof sel === 'string' ? [...document.querySelectorAll(sel)] : [sel]);
    // keyframes z absolutnimi časi [s] -> Web Animations z offseti
    function tl(sel, frames, easing = 'linear') {
      const kf = frames.map(([t, style]) => ({ ...style, offset: Math.min(1, Math.max(0, t / T)), easing }));
      if (kf[0].offset > 0) kf.unshift({ ...frames[0][1], offset: 0, easing });
      if (kf[kf.length - 1].offset < 1) kf.push({ ...frames[frames.length - 1][1], offset: 1 });
      all(sel).forEach((el) => el.animate(kf, { duration: ms, fill: 'both' }));
    }
    const r = {
      T,
      css: tl,
      /** Prizor je viden od `a` do `b` sekund; vhod in izhod trajata `d` s. */
      scene(sel, a, b, { enter = 'up', d = 0.45, exit = true } = {}) {
        const [from, to] = ENTER[enter] || ENTER.up;
        const out = { ...to, opacity: 0, transform: 'translateY(-40px)' };
        const f = [[0, from], [a, from], [a + d, to], [b - d, to]];
        f.push(exit ? [b, out] : [b, to]);
        tl(sel, f, EASE);
      },
      /** Elementi se pojavijo zaporedoma (stagger) od `a`, vsak `step` s kasneje. */
      stagger(sel, a, step = 0.35, enter = 'left') {
        const [from, to] = ENTER[enter] || ENTER.left;
        all(sel).forEach((el, i) => { const t = a + i * step; tl(el, [[0, from], [t, from], [t + 0.4, to]], EASE); });
      },
      /** Poskok (poudarek) ob času t. */
      pop(sel, t, scale = 1.15) {
        tl(sel, [[0, { transform: 'scale(0)', opacity: 0 }], [t, { transform: 'scale(0)', opacity: 0 }], [t + 0.25, { transform: `scale(${scale})`, opacity: 1 }], [t + 0.45, { transform: 'scale(1)', opacity: 1 }]], EASE);
      },
      /** Tresljaj (opozorilo) med a in b. */
      shake(sel, a, b = a + 0.5) {
        const f = [[0, { transform: 'none' }], [a, { transform: 'none' }]];
        const n = 8; for (let i = 1; i <= n; i++) f.push([a + (b - a) * i / n, { transform: `translateX(${i % 2 ? 14 : -14}px) rotate(${i % 2 ? 1.5 : -1.5}deg)` }]);
        f.push([b + 0.05, { transform: 'none' }]); tl(sel, f);
      },
      /** Število, ki teče od `from` do `to` med a in b (vsaka vrednost je svoj <span>, prikazan ob svojem času). */
      count(sel, from, to, a, b) {
        all(sel).forEach((el) => {
          if (!el.dataset.built) {
            el.dataset.built = '1';
            el.style.display = 'inline-grid'; el.style.justifyItems = 'end'; el.dataset.keep = '';
            el.innerHTML = Array.from({ length: to - from + 1 }, (_, i) => `<span style="grid-area:1/1">${from + i}</span>`).join('');
          }
          const spans = [...el.children], n = spans.length;
          spans.forEach((sp, i) => {
            const ease = (x) => 1 - Math.pow(1 - x, 3); // hitro na začetku, počasi na koncu
            const t0 = i === 0 ? 0 : a + (b - a) * ease(i / (n - 1));
            const t1 = i === n - 1 ? Infinity : a + (b - a) * ease((i + 1) / (n - 1));
            const f = [[0, { opacity: i === 0 ? 1 : 0 }]];
            if (i > 0) f.push([t0 - 0.0001, { opacity: 0 }], [t0, { opacity: 1 }]);
            if (t1 !== Infinity) f.push([t1 - 0.0001, { opacity: 1 }], [t1, { opacity: 0 }]);
            tl(sp, f);
          });
        });
      },
      /** Zanka (npr. vrtenje ventilatorja): `keyframes` se ponavlja vsakih `period` s med a in b. */
      loop(sel, keyframes, period, a = 0, b = T) {
        all(sel).forEach((el) => el.animate(keyframes, { duration: period * 1000, iterations: Math.max(1, Math.round((b - a) / period)), delay: a * 1000, fill: 'none' }));
      },
      /**
       * Podnapisi (obvezni v vsakem Reelu): [[od, do, 'besedilo'], …] v sekundah.
       * Prikažejo se v pasu .subs (spodaj, nad Instagramovo cono za opis); upodabljalnik iz njih izdela podnapisi.srt.
       */
      subs(list, sel = '.subs') {
        const box = document.querySelector(sel);
        if (!box) throw new Error('Manjka element ' + sel + ' za podnapise');
        if (!box.dataset.built) {
          box.dataset.built = '1';
          box.innerHTML = list.map(([, , t]) => `<span style="grid-area:1/1">${t}</span>`).join('');
        }
        [...box.children].forEach((sp, i) => {
          const [a, b] = list[i];
          tl(sp, [[0, { opacity: 0, transform: 'translateY(12px)' }], [a, { opacity: 0, transform: 'translateY(12px)' }], [a + 0.18, { opacity: 1, transform: 'none' }], [b - 0.12, { opacity: 1, transform: 'none' }], [b, { opacity: 0, transform: 'none' }]], EASE);
        });
        window.REEL_SUBS = list;
      },
      /** Vrstica napredka na vrhu. */
      progress(sel = '.progress i') { tl(sel, [[0, { transform: 'scaleX(0)' }], [T, { transform: 'scaleX(1)' }]]); },
    };
    window.REEL_T = T;
    window.reelBuild = () => { document.getAnimations().forEach((a) => { if (!a.animationName) a.cancel(); }); build(r); };
    window.reelBuild();
  }
  window.reel = reel;
})();
