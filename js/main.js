document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close menu when a link is clicked (mobile UX)
  links.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.tagName === 'A' && links.classList.contains('open')) {
      links.classList.remove('open');
    }
  });
});
