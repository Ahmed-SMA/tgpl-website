const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

navToggle?.addEventListener('click', () => {
  const open = navLinks?.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(Boolean(open)));
  navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Open navigation');
}));

document.addEventListener('click', (event) => {
  if (!navLinks?.classList.contains('open')) return;
  const target = event.target;
  if (navLinks.contains(target) || navToggle?.contains(target)) return;
  navLinks.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Open navigation');
});

document.addEventListener('pointermove', (event) => {
  document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
  document.documentElement.style.setProperty('--my', `${event.clientY}px`);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const inquiryForm = document.querySelector('#inquiryForm');
inquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(inquiryForm);
  const name = form.get('name') || '';
  const company = form.get('company') || '';
  const service = form.get('service') || '';
  const phone = form.get('phone') || '';
  const message = form.get('message') || '';
  const subject = encodeURIComponent(`TGPL Website Inquiry — ${service}`);
  const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nService: ${service}\n\nProject details:\n${message}`);
  window.location.href = `mailto:contact@tgplpakistan.com?subject=${subject}&body=${body}`;
});

const parallaxTarget = document.querySelector('[data-parallax]');
if (parallaxTarget && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 7;
    const y = (event.clientY / window.innerHeight - 0.5) * -5;
    parallaxTarget.style.transform = `perspective(1100px) rotateY(${x}deg) rotateX(${y}deg)`;
  }, { passive: true });
  document.documentElement.addEventListener('mouseleave', () => {
    parallaxTarget.style.transform = '';
  });
}
