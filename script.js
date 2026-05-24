// ── Sticky nav: adds .scrolled class when page is scrolled ─────────────────
const header = document.getElementById('top');

function updateNav() {
  header.classList.toggle('scrolled', window.scrollY > 8);
}
updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

// ── Scroll reveal via IntersectionObserver ──────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback for old browsers: show everything immediately
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
