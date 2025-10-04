// Packags 
(() => {
  const carousels = document.querySelectorAll('.slideshow.container');

  carousels.forEach(initCarousel);

  function initCarousel(root) {
    const track = root.querySelector('.grid_cards');
    const prevBtn = root.querySelector('.scroll-btn.prev');
    const nextBtn = root.querySelector('.scroll-btn.next');
    if (!track || !prevBtn || !nextBtn) return;

    track.setAttribute('tabindex', track.getAttribute('tabindex') || '0');

    let step = measureStep();

    function measureStep() {
      const firstCard = track.querySelector('.packages_card');
      const gap = parseFloat(getComputedStyle(track).gap || 0);
      return firstCard
        ? firstCard.getBoundingClientRect().width + gap
        : track.clientWidth * 0.9;
    }

    function clampEnds() {
      const max = track.scrollWidth - track.clientWidth;
      const x = Math.round(track.scrollLeft);
      prevBtn.disabled = x <= 0;
      nextBtn.disabled = x >= max - 1;
    }

    function smoothScroll(delta) {
      track.scrollBy({ left: delta, behavior: 'smooth' });
    }

    //arrows
    prevBtn.addEventListener('click', () => smoothScroll(-step));
    nextBtn.addEventListener('click', () => smoothScroll(step));

    // keyboard
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); smoothScroll(step); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); smoothScroll(-step); }
      if (e.key === 'Home')       { e.preventDefault(); track.scrollTo({ left: 0, behavior: 'smooth' }); }
      if (e.key === 'End')        { e.preventDefault(); track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' }); }
    });

    //mouse wheel
    // track.addEventListener('wheel', (e) => {
    //   if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    //     e.preventDefault();
    //     track.scrollBy({ left: e.deltaY, behavior: 'auto' });
    //   }
    // }, { passive: false });



    //change width for responsive layouts
    const onResize = () => { step = measureStep(); clampEnds(); };
    window.addEventListener('resize', onResize);

    // Initialization
    requestAnimationFrame(() => {
      step = measureStep();
      clampEnds();
    });
  }
})();