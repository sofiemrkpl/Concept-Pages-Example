document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-button.right');
  const prevButton = document.querySelector('.carousel-button.left');
  const dots = Array.from(document.querySelectorAll('.dot'));

  let currentSlide = 0;
  let autoplayInterval;

  function updateCarousel(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * index}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    currentSlide = index;
  }

  function showNextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    updateCarousel(nextIndex);
  }

  function showPrevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel(prevIndex);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(showNextSlide, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  function getHeaderHeight() {
  const header = document.querySelector('.main-header');
  return header.offsetHeight;
}

function resizeCarouselImages() {
  const images = document.querySelectorAll('.carousel-image');
  const headerHeight = getHeaderHeight();
  images.forEach(img => {
    img.style.height = `calc(100vh - ${headerHeight}px)`;
  });
}

window.addEventListener('resize', resizeCarouselImages);
document.addEventListener('DOMContentLoaded', resizeCarouselImages);

  nextButton.addEventListener('click', () => {
    showNextSlide();
    stopAutoplay();
    startAutoplay();
  });

  prevButton.addEventListener('click', () => {
    showPrevSlide();
    stopAutoplay();
    startAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateCarousel(index);
      stopAutoplay();
      startAutoplay();
    });
  });

  window.addEventListener('resize', () => updateCarousel(currentSlide));

  // Init
  updateCarousel(currentSlide);
  startAutoplay();
});
