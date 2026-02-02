const sliderList = document.querySelector(".slider .list");
const slides = document.querySelectorAll(".slider .item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const totalSlides = slides.length;

/* UPDATE SLIDER */
function updateSlider() {
  sliderList.style.transform = `translateX(-${index * 100}%)`;
}

/* NEXT */
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= totalSlides) {
    index = 0;
  }
  updateSlider();
});

/* PREV */
prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = totalSlides - 1;
  }
  updateSlider();
});

/* AUTO SLIDE */
setInterval(() => {
  index++;
  if (index >= totalSlides) {
    index = 0;
  }
  updateSlider();
}, 6000);
