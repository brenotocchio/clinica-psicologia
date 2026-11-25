{
  // Mensagem padrão do WhatsApp (sem pressão, apenas facilita o primeiro contato)
  const WA_NUMBER = '5518997490601';
  const WA_TEXT = 'Olá, Fernanda! Vim pelo site e gostaria de mais informações sobre o atendimento.';
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;
  document.querySelectorAll('.js-wa').forEach(a => { a.href = waUrl; });

  // Menu mobile
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('menu');
  const setMenu = open => {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
  };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // Borda no cabeçalho ao rolar
  const top = document.querySelector('.topbar');
  const onScroll = () => top.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Revelação suave das seções
  const els = document.querySelectorAll('.sec-head, .topics li, .card, .steps li, .about__photo, .about__text, .cycle, .tcc-grid > div, .quote, .place, .gallery img');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(el => { el.classList.add('reveal'); io.observe(el); });
  }

  // Carrossel de reflexões (botões e setas do teclado)
  const track = document.querySelector('.quotes');
  const step = dir => {
    const card = track.querySelector('.quote');
    const w = card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
    track.scrollBy({ left: dir * w, behavior: 'smooth' });
  };
  document.querySelectorAll('.quotes-nav .round').forEach(b => b.addEventListener('click', () => step(Number(b.dataset.dir))));
  track.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  });

  // Ano no rodapé
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
}
