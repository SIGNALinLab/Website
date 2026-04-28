const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const projectsBtn = document.querySelector('.dropbtn');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('is-open');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
    });
  });
}

if (projectsBtn && dropdownMenu) {
  projectsBtn.addEventListener('click', () => {
    const expanded = projectsBtn.getAttribute('aria-expanded') === 'true';
    projectsBtn.setAttribute('aria-expanded', String(!expanded));
    dropdownMenu.classList.toggle('mobile-open');
    dropdownMenu.classList.toggle('open');
  });
}

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
