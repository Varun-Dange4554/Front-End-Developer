const slides = document.querySelectorAll(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
let timer = null;

// Show Slide Function
function showSlide(i) {
  if (!slides.length) return;

  // Wrap Around Logic
  if (i >= slides.length) {
    index = 0;
  } else if (i < 0) {
    index = slides.length - 1;
  } else {
    index = i;
  }

  // Remove active class
  slides.forEach(slide => slide.classList.remove("active"));

  // Add active class
  slides[index].classList.add("active");

  resetTimer();
}

// Next Slide
function nextSlide() {
  showSlide(index + 1);
}

// Previous Slide
function prevSlide() {
  showSlide(index - 1);
}

// Autoplay
function startTimer() {
  if (timer) return; // prevent multiple intervals
  timer = setInterval(nextSlide, 5000);
}

// Reset Autoplay
function resetTimer() {
  clearInterval(timer);
  timer = null;
  startTimer();
}

// Button Events
if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlide);

// Init
showSlide(index);
startTimer();
