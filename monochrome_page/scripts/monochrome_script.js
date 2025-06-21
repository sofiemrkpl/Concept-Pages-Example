document.addEventListener("DOMContentLoaded", () => {
  const slide = document.getElementById("carousel-slide");
  const items = document.querySelectorAll(".carousel-item");
  const btn = document.getElementById("learnMoreBtn");
  const dotsContainer = document.getElementById("carousel-dots");

  let current = 0;

  // Create dots
  items.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => moveToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const updateCarousel = () => {
    slide.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("active", i === current);
    });

    const link = items[current].dataset.link;
    btn.onclick = () => window.location.href = link;
  };

  const moveToSlide = (index) => {
    current = index;
    updateCarousel();
  };

  // Auto-advance every 5 seconds
  setInterval(() => {
    current = (current + 1) % items.length;
    updateCarousel();
  }, 5000);

  // Initial setup
  updateCarousel();
});
