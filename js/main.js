const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");

function createReview(rating, reviewText) {
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');

  const starRating = createStarRating(rating);
  const reviewContent = document.createElement('p');
  reviewContent.textContent = reviewText;

  reviewElement.appendChild(starRating);
  reviewElement.appendChild(reviewContent);

  return reviewElement;
}


function createStarRating(rating) {
  const starRating = document.createElement('div');
  starRating.classList.add('star-rating');

  for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.textContent = i <= rating ? '★' : '☆';
      starRating.appendChild(star);
  }

  return starRating;
}


function populateReviewsContainer() {
  const reviewsContainer = document.getElementById('js--reviews-container');

  
  const reviewBlocks = reviewsContainer.querySelectorAll('.block1');
  reviewBlocks.forEach((block) => {
      const rating = parseInt(block.querySelector('.star-rating').dataset.rating);
      const starRatingElement = createStarRating(rating);
      block.appendChild(starRatingElement);
  });
}


populateReviewsContainer();


function createStarRating(rating) {
  const starRating = document.createElement('div');
  starRating.classList.add('star-rating');

  for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      if (i <= rating) {
          star.classList.add('gold');
      }
      star.innerHTML = '&#9733;';
      starRating.appendChild(star);
  }

  return starRating;
}


const reviewsSection = document.querySelector('.reviews');
reviewsSection.innerHTML = '';
reviewsSection.appendChild(createStarRating(4)); 
reviewsSection.innerHTML += '<p>Great experience at Nxt Museum!</p>'; 

const pageIndicators = document.querySelectorAll('.page-indicator');

let currentSlideIndex = 0;

function handlePageIndicatorClick(index) {
    
    pageIndicators.forEach(indicator => indicator.classList.remove('active'));

    
    pageIndicators[index - 1].classList.add('active');

    
    currentSlideIndex = index - 1;

    
    showSlide();
}


pageIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => handlePageIndicatorClick(index + 1));
});


function updatePageIndicators() {
    
    pageIndicators.forEach(indicator => indicator.classList.remove('active'));

    
    pageIndicators[currentSlideIndex].classList.add('active');
}

function showSlide() {
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlideIndex].style.display = "block";

    
    updatePageIndicators();
}

function changeSlide(n) {
    currentSlideIndex += n;

    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }

    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    showSlide();
}


function nextSlide() {
    changeSlide(1);
}


function prevSlide() {
    changeSlide(-1);
}


showSlide();

