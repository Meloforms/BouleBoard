(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }
})();