// ZooLavka v2: анимации поверх script.js
(function(){
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = matchMedia('(hover: hover)').matches;

  // бегущая строка: дублируем содержимое для бесшовной прокрутки
  const strip = document.getElementById('strip');
  if(strip) strip.innerHTML += strip.innerHTML;

  // шапка получает линию при прокрутке
  const hdr = document.getElementById('hdr');
  const onScroll = () => hdr && hdr.classList.toggle('sc', scrollY > 20);
  addEventListener('scroll', onScroll, {passive:true}); onScroll();

  // появление блоков при прокрутке
  const io = ('IntersectionObserver' in window && !reduce) ? new IntersectionObserver(es => es.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }), {threshold:.12, rootMargin:'0px 0px -30px 0px'}) : null;
  function reveal(els){
    let i = 0;
    els.forEach(el => {
      if(el.classList.contains('rv') && el.dataset.rv) return;
      el.dataset.rv = 1; el.classList.add('rv');
      if(!el.style.getPropertyValue('--d')) el.style.setProperty('--d', (Math.min(i++, 7) * 0.07).toFixed(2) + 's');
      if(io) io.observe(el); else el.classList.add('in');
    });
  }
  reveal(document.querySelectorAll('.rv'));
  ['hitsGrid','grid'].forEach(id => {
    const g = document.getElementById(id); if(!g) return;
    reveal(g.querySelectorAll('.card'));
    new MutationObserver(() => reveal(g.querySelectorAll('.card:not([data-rv])'))).observe(g, {childList:true});
  });

  // полёт товара в корзину
  function cartTarget(){
    const m = document.getElementById('mobiCart');
    if(m && !m.hidden && getComputedStyle(m).display !== 'none') return m;
    return document.getElementById('openCart');
  }
  function bump(el){ if(!el) return; el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
  function fly(img){
    setTimeout(() => {
      const target = cartTarget();
      if(!img || !target || reduce){ bump(target); return; }
      const s = img.getBoundingClientRect(), c = target.getBoundingClientRect();
      if(!s.width){ bump(target); return; }
      const f = document.createElement('img');
      f.src = img.currentSrc || img.src; f.className = 'zl-fly'; f.alt = '';
      Object.assign(f.style, {left:s.left+'px', top:s.top+'px', width:s.width+'px', height:s.height+'px'});
      document.body.appendChild(f);
      const dx = (c.left + c.width/2) - (s.left + s.width/2), dy = (c.top + c.height/2) - (s.top + s.height/2);
      const lift = Math.min(-90, dy * .3 - 130);
      f.animate([
        {transform:'translate(0,0) scale(1) rotate(0)', opacity:1},
        {transform:`translate(${dx*.45}px,${dy*.45+lift}px) scale(.5) rotate(-14deg)`, opacity:1, offset:.45},
        {transform:`translate(${dx}px,${dy}px) scale(.08) rotate(-26deg)`, opacity:.5}
      ], {duration:820, easing:'cubic-bezier(.45,.05,.4,1)'}).onfinish = () => { f.remove(); bump(target); };
    }, 30);
  }
  document.addEventListener('click', e => {
    const btn = e.target.closest('.add, .pinfo .addbtn');
    if(!btn || btn.disabled || btn.classList.contains('oos')) return;
    const scope = btn.closest('.card') || btn.closest('.psheet');
    const img = scope && (scope.querySelector('.ph img') || scope.querySelector('.pmain img'));
    setTimeout(() => { if(btn.classList.contains('added')) fly(img); }, 0);
  }, true);

  // щенок: лёгкий наклон за курсором
  if(!reduce && canHover){
    const stage = document.querySelector('.stage');
    addEventListener('pointermove', e => {
      const v = document.querySelector('.pup .herovid'); if(!v || !stage) return;
      const r = stage.getBoundingClientRect();
      const nx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width/2)) / (innerWidth/2)));
      const ny = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height/2)) / (innerHeight/2)));
      v.style.translate = (nx * 6).toFixed(1) + 'px ' + (ny * 4).toFixed(1) + 'px';
    }, {passive:true});
  }
})();
