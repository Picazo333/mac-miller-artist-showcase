(() => {
  const scenes = [...document.querySelectorAll('.scene')];
  const links = [...document.querySelectorAll('[data-scene-link]')];
  const count = document.querySelector('#scene-count');
  const name = document.querySelector('#scene-name');
  const rail = document.querySelector('#scene-rail');
  const railToggle = document.querySelector('.rail-toggle');

  document.querySelectorAll('[data-toggle-scene]').forEach(button => {
    button.setAttribute('aria-pressed','false');
    button.addEventListener('click', () => {
      const scene = button.closest('.scene');
      const active = !scene.classList.contains('is-awake');
      scene.classList.toggle('is-awake', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  });

  document.querySelectorAll('.archive-hotspot').forEach(button => {
    button.addEventListener('click', () => {
      const output = document.querySelector('#archive-label');
      if (output) output.textContent = button.dataset.label || '';
      document.querySelectorAll('.archive-hotspot').forEach(b => b.classList.remove('is-selected'));
      button.classList.add('is-selected');
    });
  });

  document.querySelectorAll('.sprite').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.sprite').forEach(b => b.classList.remove('is-selected'));
      button.classList.add('is-selected');
      const output = document.querySelector('#sprite-output');
      if (output) output.textContent = button.dataset.name || '';
    });
  });

  const setActive = scene => {
    const index = scenes.indexOf(scene);
    if (index < 0) return;
    if (count) count.textContent = String(index + 1).padStart(2, '0');
    if (name) name.textContent = scene.dataset.title || scene.id;
    links.forEach(a => a.toggleAttribute('aria-current', a.dataset.sceneLink === scene.id));
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target);
    }, { threshold:[.35,.55,.75] });
    scenes.forEach(scene => observer.observe(scene));
  } else if (scenes[0]) setActive(scenes[0]);

  railToggle?.addEventListener('click', () => {
    const open = rail?.classList.toggle('is-open');
    railToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  links.forEach(link => link.addEventListener('click', () => {
    rail?.classList.remove('is-open');
    railToggle?.setAttribute('aria-expanded','false');
  }));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      rail?.classList.remove('is-open');
      railToggle?.setAttribute('aria-expanded','false');
    }
  });
})();