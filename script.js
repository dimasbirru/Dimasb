/* Simple interactions: nav hamburger, theme toggle, scroll animations, skill bars, form validation */

document.addEventListener('DOMContentLoaded', () => {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('show'));

  // theme toggle (persist)
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const preferDark = () => localStorage.getItem('theme') === 'dark';

  const applyTheme = () => {
    if (preferDark()) root.classList.add('dark');
    else root.classList.remove('dark');
    themeToggle.textContent = preferDark() ? '☾' : '☼';
  };

  themeToggle.addEventListener('click', () => {
    localStorage.setItem('theme', preferDark() ? 'light' : 'dark');
    applyTheme();
  });

  if (!localStorage.getItem('theme')) {
    // default prefer system
    const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem('theme', isSystemDark ? 'dark' : 'light');
  }
  applyTheme();

  // IntersectionObserver for fade-up and skills
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');

        // animate skill bars
        if (entry.target.classList.contains('skill')) {
          const bar = entry.target.querySelector('.progress-bar');
          const percent = entry.target.getAttribute('data-percent') || 0;
          bar.style.width = percent + '%';
        }
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
  document.querySelectorAll('.skill').forEach(el => io.observe(el));

  // Portfolio card hover: slight hint already set in CSS

  // Simple form validation (client-side only)
  const form = document.getElementById('contactForm');
  const errName = document.getElementById('errName');
  const errEmail = document.getElementById('errEmail');
  const errMessage = document.getElementById('errMessage');
  const formMsg = document.getElementById('formMsg');

  function validateEmail(email) {
    // simple regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

 form.addEventListener('submit', (e) => {
  let valid = true;
  errName.textContent = '';
  errEmail.textContent = '';
  errMessage.textContent = '';
  formMsg.textContent = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || name.length < 2) {
    errName.textContent = 'Please enter your name (min 2 chars).';
    valid = false;
  }
  if (!validateEmail(email)) {
    errEmail.textContent = 'Please enter a valid email.';
    valid = false;
  }
  if (!message || message.length < 10) {
    errMessage.textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  if (!valid) {
    e.preventDefault(); // ❗ hanya stop kalau error
    return;
  }

  // tampilkan info sebelum submit
  formMsg.textContent = 'Sending message...';
 });

  // Close mobile nav when clicking a link
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('show'));
  });
});
