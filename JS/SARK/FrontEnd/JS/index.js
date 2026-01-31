document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let index = 0;
  let timer = null;

  if (!slides.length) return;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));

    if (i >= slides.length) index = 0;
    else if (i < 0) index = slides.length - 1;
    else index = i;

    slides[index].classList.add("active");
    resetTimer();
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }

  function startTimer() {
    timer = setInterval(nextSlide, 5000);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  slides[0].classList.add("active");
  startTimer();
});
