const slides = document.querySelectorAll(".univImgSlider")
var counter = 0;
// console.log(slides)
slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`

    }
);
const goPrev = () => {
    if(counter > 0) {
    counter--;
    slideImages();
    }
};
const goNext = () => {
    if(counter < slides.length - 1) {
    counter++;
    slideImages();
    }
};
const slideImages = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    );
};

const slider = document.getElementById('alumniSlider');
const cards = document.querySelectorAll('.aluminiDetail');
const dotsContainer = document.querySelector('.dtsContainer');
const cardsPerView = 4;
let currentIndex = 0;

// Calculate how many dots based on total scrollable groups
const totalDots = Math.ceil(cards.length - cardsPerView + 1);

// Create dots
for (let i = 0; i < totalDots; i++) {
  const dot = document.createElement('li');
  dot.addEventListener('click', () => goToIndex(i));
  dotsContainer.appendChild(dot);
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll('li');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function goToIndex(index) {
  currentIndex = index;
  updateSlider();
}

function moveSlide(direction) {
  const maxIndex = cards.length - cardsPerView;
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  updateSlider();
}

function updateSlider() {
  const cardWidth = cards[0].offsetWidth;
  const shiftAmount = currentIndex * cardWidth;
  slider.style.transform = `translateX(-${shiftAmount}px)`;
  updateDots();
}

updateSlider(); // initialize
