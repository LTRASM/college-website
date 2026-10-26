const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const backToTop = document.getElementById('backToTop');

document.getElementById('year').textContent = new Date().getFullYear();
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
window.addEventListener('scroll', () => backToTop.classList.toggle('show', window.scrollY > 450));
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
