// ZooLavka v2: анимации. Работает поверх script.js, логику магазина не меняет.
(function(){
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = matchMedia('(hover: hover)').matches;

  /* ---------- шапка ---------- */
  const hdr = document.querySelector('header');
  const onScroll = () => hdr && hdr.classList.toggle('scrolled', scrollY > 12);
  addEventListener('scroll', onScroll, {passive:true}); onScroll();

  /* ---------- заголовок по словам ---------- */
  const h1 = document.querySelector('.hero h1');
  if(h1 && !reduce){
    let d = .08;
    const wrapWords = (text) => text.split(/(\s+)/).map(part => {
      if(!part.trim()) return document.createTextNode(part);
      const s = document.createElement('span'); s.className = 'w'; s.textContent = part;
      s.style.animationDelay = d.toFixed(2) + 's'; d += .1; return s;
    });
    [...h1.childNodes].forEach(node => {
      if(node.nodeType === 3){
        const t = node.textContent.replace(/\s*—\s*/,' ');
        wrapWords(t).forEach(n => h1.insertBefore(n, node)); node.remove();
      } else if(node.nodeType === 1){
        const t = node.textContent; node.textContent = '';
        wrapWords(t).forEach(n => node.appendChild(n));
      }
    });
  }

  /* ---------- появление при прокрутке ---------- */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }), {threshold:.12, rootMargin:'0px 0px -40px 0px'}) : null;

  function tagReveal(root){
    if(reduce || !io) return;
    const els = root.querySelectorAll('.card:not(.zl-reveal), .tile:not(.zl-reveal), .grouphead:not(.zl-reveal), .fcol:not(.zl-reveal)');
    let i = 0;
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--d', (Math.min(i++, 7) * 0.07).toFixed(2) + 's');
      el.classList.add('zl-reveal');
      if(r.top < innerHeight && r.bottom > 0) requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('in')));
      else io.observe(el);
    });
  }
  const grid = document.getElementById('grid');
  if(grid){
    tagReveal(grid);
    new MutationObserver(() => tagReveal(grid)).observe(grid, {childList:true});
  }
  const ft = document.querySelector('footer'); if(ft) tagReveal(ft);

  /* ---------- полёт товара в корзину ---------- */
  function cartTarget(){
    const m = document.getElementById('mobiCart');
    if(m && !m.hidden && getComputedStyle(m).display !== 'none') return m;
    return document.getElementById('openCart');
  }
  function bump(el){ if(!el) return; el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }

  function fly(fromImg){
    const target = cartTarget();
    if(!fromImg || !target){ bump(target); return; }
    if(reduce){ bump(target); return; }
    const s = fromImg.getBoundingClientRect(), c = target.getBoundingClientRect();
    if(!s.width){ bump(target); return; }
    const f = document.createElement('img');
    f.src = fromImg.currentSrc || fromImg.src; f.className = 'zl-fly'; f.alt = '';
    Object.assign(f.style, {left:s.left+'px', top:s.top+'px', width:s.width+'px', height:s.height+'px'});
    document.body.appendChild(f);
    const dx = (c.left + c.width/2) - (s.left + s.width/2);
    const dy = (c.top + c.height/2) - (s.top + s.height/2);
    const lift = Math.min(-90, dy * .3 - 130);
    const a = f.animate([
      {transform:'translate(0,0) scale(1) rotate(0)', opacity:1},
      {transform:`translate(${dx*.45}px,${dy*.45+lift}px) scale(.5) rotate(-14deg)`, opacity:1, offset:.45},
      {transform:`translate(${dx}px,${dy}px) scale(.08) rotate(-26deg)`, opacity:.5}
    ], {duration:820, easing:'cubic-bezier(.45,.05,.4,1)'});
    a.onfinish = () => { f.remove(); bump(target); };
  }

  // ловим клик раньше script.js, чтобы запомнить картинку до перерисовки
  document.addEventListener('click', e => {
    const btn = e.target.closest('.addbtn');
    if(!btn || btn.disabled || btn.classList.contains('oos')) return;
    const scope = btn.closest('.card') || btn.closest('.psheet');
    const img = scope && (scope.querySelector('.ph img') || scope.querySelector('.pmain img'));
    setTimeout(() => { if(btn.classList.contains('added') || scope.closest('.pmodal')) fly(img); }, 0);
  }, true);

  /* ---------- щенок в шапке ---------- */
  const hero = document.querySelector('.hero');
  const kib = document.getElementById('kibble');
  function withVideo(cb, tries=0){
    const v = document.querySelector('.herovid');
    if(v) return cb(v);
    if(tries < 40) setTimeout(() => withVideo(cb, tries+1), 100);
  }
  if(hero && !reduce) withVideo(v => {
    // наклон за курсором
    if(canHover){
      addEventListener('pointermove', e => {
        const r = v.getBoundingClientRect(); if(!r.width) return;
        const nx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width/2)) / (innerWidth/2)));
        const ny = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height/2)) / (innerHeight/2)));
        v.style.rotate = (nx * 5).toFixed(2) + 'deg';
        v.style.translate = (nx * 8).toFixed(1) + 'px ' + (ny * 5).toFixed(1) + 'px';
      }, {passive:true});
    }
    // клик или тап по щенку: сердечко
    hero.addEventListener('click', e => {
      const r = v.getBoundingClientRect();
      if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return;
      const hr = hero.getBoundingClientRect();
      const h = document.createElement('div'); h.className = 'zl-heart'; h.textContent = '🧡';
      h.style.left = (e.clientX - hr.left) + 'px'; h.style.top = (e.clientY - hr.top - 10) + 'px';
      hero.appendChild(h); setTimeout(() => h.remove(), 1100);
      v.classList.remove('wiggle'); void v.offsetWidth; v.classList.add('wiggle');
    });

    // парящие гранулы корма вокруг щенка
    if(!kib) return;
    const N = innerWidth < 640 ? 6 : 10, items = [];
    function place(){
      const vr = v.getBoundingClientRect(), kr = kib.getBoundingClientRect();
      const cx = vr.left - kr.left + vr.width/2, cy = vr.top - kr.top + vr.height/2;
      const R = Math.max(vr.width, vr.height) * .78;
      items.forEach((k, i) => {
        const ang = (i / N) * Math.PI * 2 + .3;
        k.bx = cx + Math.cos(ang) * R * (0.85 + (i % 3) * .1);
        k.by = cy + Math.sin(ang) * R * .8;
      });
    }
    for(let i = 0; i < N; i++){
      const el = document.createElement('div'); el.className = 'zl-kib'; kib.appendChild(el);
      items.push({el, ph:Math.random()*6.28, sp:.6+Math.random()*.6, s:.7+Math.random()*.6, rot:Math.random()*360, depth:.3+Math.random()*.9, bx:0, by:0});
    }
    place(); addEventListener('resize', place); setTimeout(place, 600); v.addEventListener('loadeddata', place);
    let mx = 0, my = 0;
    if(canHover) addEventListener('pointermove', e => { mx = e.clientX/innerWidth - .5; my = e.clientY/innerHeight - .5; }, {passive:true});
    let visible = true;
    if('IntersectionObserver' in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(hero);
    (function tick(t){
      if(visible) items.forEach(k => {
        const y = Math.sin(t/1000*k.sp + k.ph) * 8, x = Math.cos(t/1300*k.sp + k.ph) * 5;
        k.el.style.transform = `translate(${(k.bx + x - mx*26*k.depth).toFixed(1)}px,${(k.by + y - my*26*k.depth).toFixed(1)}px) rotate(${(k.rot + t/40*k.sp).toFixed(0)}deg) scale(${k.s.toFixed(2)})`;
      });
      requestAnimationFrame(tick);
    })(0);
  });
})();
