document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let index = 0;
  let timer = null;

  if (!slides.length) return;

  // Show slide
  function showSlide(i) {
    slides.forEach(slide => {
      slide.classList.remove("active");
    });

    if (i >= slides.length) {
      index = 0;
    } else if (i < 0) {
      index = slides.length - 1;
    } else {
      index = i;
    }

    slides[index].classList.add("active");
    resetTimer();
  }

  // Next
  function nextSlide() {
    showSlide(index + 1);
  }

  // Prev
  function prevSlide() {
    showSlide(index - 1);
  }

  // Autoplay
  function startTimer() {
    timer = setInterval(nextSlide, 5000);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  // Button events
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  // Init
  slides[0].classList.add("active");
  startTimer();
});
