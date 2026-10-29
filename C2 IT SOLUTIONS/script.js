// Sticky header on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Scroll-triggered fade-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll(
  '.about__card, .service-card, .why-us__feature, .course-card, .faq__item, .section__header'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// FAQ accordion — one open at a time
document.querySelectorAll('.faq__item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq__item').forEach(other => {
        if (other !== item) other.open = false;
      });
    }
  });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Message Sent!';
  btn.disabled = true;
  contactForm.reset();
  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
  }, 3000);
});
