document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-button.right');
  const prevButton = document.querySelector('.carousel-button.left');
  const dots = Array.from(document.querySelectorAll('.dot'));
  let currentSlide = 0;
  let autoplayInterval;

  function updateCarousel(index) {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
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
    const availableHeight = window.innerHeight - headerHeight;
    const targetHeight = Math.min(availableHeight, 800); // clamp to 800px max

    images.forEach(img => {
      img.style.height = `${targetHeight}px`;
    });
  }

  function resizeCarouselImages() {
  const images = document.querySelectorAll('.carousel-image');
  const headerHeight = getHeaderHeight();
  const availableHeight = window.innerHeight - headerHeight;
  const targetHeight = Math.min(availableHeight, 800); // clamp to 800px max

  images.forEach(img => {
    img.style.height = `${targetHeight}px`;
  });
}

  function resizeCarouselImages() {
  const images = document.querySelectorAll('.carousel-image');
  const headerHeight = getHeaderHeight();
  const availableHeight = window.innerHeight - headerHeight;
  const targetHeight = Math.min(availableHeight, 800); // clamp to 800px max

  images.forEach(img => {
    img.style.height = `${targetHeight}px`;
  });
}

  function resizeCarouselImages() {
  const images = document.querySelectorAll('.carousel-image');
  const headerHeight = getHeaderHeight();
  const availableHeight = window.innerHeight - headerHeight;
  const targetHeight = Math.min(availableHeight, 800); // clamp to 800px max

  images.forEach(img => {
    img.style.height = `${targetHeight}px`;
  });
}

  function resizeCarouselImages() {
  const images = document.querySelectorAll('.carousel-image');
  const headerHeight = getHeaderHeight();
  const availableHeight = window.innerHeight - headerHeight;
  const targetHeight = Math.min(availableHeight, 800); // clamp to 800px max

  images.forEach(img => {
    img.style.height = `${targetHeight}px`;
  });
}

  function resizeCarouselImages() {
  const images = document.querySelectorAll('.carousel-image');
  const headerHeight = getHeaderHeight();
  const availableHeight = window.innerHeight - headerHeight;
  const targetHeight = Math.min(availableHeight, 800); // clamp to 800px max

  images.forEach(img => {
    img.style.height = `${targetHeight}px`;
  });
}

  function resizeCarouselImages() {
  const images = document.querySelectorAll('.carousel-image');
  const headerHeight = getHeaderHeight();
  const availableHeight = window.innerHeight - headerHeight;
  const targetHeight = Math.min(availableHeight, 800); // clamp to 800px max

  images.forEach(img => {
    img.style.height = `${targetHeight}px`;
  });
}

  function resizeCarouselImages() {
  const images = document.querySelectorAll('.carousel-image');
  const headerHeight = getHeaderHeight();
  const availableHeight = window.innerHeight - headerHeight;
  const targetHeight = Math.min(availableHeight, 800); // clamp to 800px max

  images.forEach(img => {
    img.style.height = `${targetHeight}px`;
  });
}


  function debounce(func, wait = 100) {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }

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

  window.addEventListener('resize', debounce(() => {
    updateCarousel(currentSlide);
    resizeCarouselImages();
  }));

  // Touch Swipe Support
  let startX = 0;
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? showNextSlide() : showPrevSlide();
      stopAutoplay();
      startAutoplay();
    }
  });

  // Init
  resizeCarouselImages();
  updateCarousel(currentSlide);
  startAutoplay();
});
