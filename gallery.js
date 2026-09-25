// ── Sticky nav: adds .scrolled class when page is scrolled ─────────────────
const header = document.getElementById('top');
if (header) {
  function updateNav() {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
}

// ── Hamburger toggle for mobile ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navDrawer = document.getElementById('nav-drawer');

if (hamburger && navDrawer) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navDrawer.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  navDrawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navDrawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

// ── Lightbox Modal Logic ────────────────────────────────────────────────────
const galleryCards = Array.from(document.querySelectorAll('.gallery-card'));
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxSub = document.getElementById('lightbox-sub');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  renderLightboxItem();
  lightboxModal.classList.add('is-open');
  document.body.classList.add('lightbox-open');
  document.addEventListener('keydown', handleKeyNav);
}

function closeLightbox() {
  lightboxModal.classList.remove('is-open');
  document.body.classList.remove('lightbox-open');
  document.removeEventListener('keydown', handleKeyNav);
}

function renderLightboxItem() {
  if (galleryCards.length === 0) return;
  const currentCard = galleryCards[currentIndex];
  const imgEl = currentCard.querySelector('img');
  const titleEl = currentCard.querySelector('.gallery-card-title');
  const descEl = currentCard.querySelector('.gallery-card-desc');
  const platformEl = currentCard.querySelector('.gallery-card-platform');

  const src = imgEl ? imgEl.getAttribute('data-full-src') || imgEl.src : '';
  const alt = imgEl ? imgEl.alt : '';
  const title = titleEl ? titleEl.textContent : '';
  const desc = descEl ? descEl.textContent : '';
  const platform = platformEl ? platformEl.textContent : '';

  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightboxTitle.textContent = title;
  lightboxSub.textContent = platform ? `${platform} · ${desc}` : desc;
  lightboxCounter.textContent = `${currentIndex + 1} / ${galleryCards.length}`;
}

function showNext() {
  if (galleryCards.length <= 1) return;
  currentIndex = (currentIndex + 1) % galleryCards.length;
  renderLightboxItem();
}

function showPrev() {
  if (galleryCards.length <= 1) return;
  currentIndex = (currentIndex - 1 + galleryCards.length) % galleryCards.length;
  renderLightboxItem();
}

function handleKeyNav(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowRight') {
    showNext();
  } else if (e.key === 'ArrowLeft') {
    showPrev();
  }
}

// Bind card click triggers
galleryCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    openLightbox(index);
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(index);
    }
  });
});

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxNext) lightboxNext.addEventListener('click', showNext);
if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

// Close on backdrop click
if (lightboxModal) {
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal || e.target.classList.contains('lightbox-stage')) {
      closeLightbox();
    }
  });
}

// Touch swipe gestures on mobile
let touchStartX = 0;
let touchEndX = 0;

if (lightboxModal) {
  lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
}

function handleSwipe() {
  const diffX = touchEndX - touchStartX;
  if (Math.abs(diffX) > 50) {
    if (diffX < 0) {
      showNext();
    } else {
      showPrev();
    }
  }
}
