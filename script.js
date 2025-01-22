// Function to reveal the hidden text
function revealText() {
    const textElement = document.getElementById('text');
    const iconElement = document.getElementById('icon');

    // Hide the icon and show the text
    iconElement.style.display = 'none';
    textElement.classList.remove('hidden');
}

let currentSlide = 0;

function updateCarousel() {
  const carouselInner = document.querySelector('.carousel-inner');
  const totalSlides = document.querySelectorAll('.carousel-item').length;

  // Calculate the translateX value based on the current slide
  const translateX = -currentSlide * 100; // Move by 100% for each slide
  carouselInner.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  currentSlide = (currentSlide + 1) % totalSlides; // Go to the next slide, loop to the start
  updateCarousel();
}

// Set the carousel to move automatically every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the carousel
updateCarousel();


