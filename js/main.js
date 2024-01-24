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

let currentLanguage;

function checkInitialLanguage() {
    const htmlLang = document.documentElement.lang;
    if (htmlLang && htmlLang.toLowerCase() === "nl") {
        currentLanguage = "nl";
    } else {
        currentLanguage = "en"; 
    }
}

checkInitialLanguage();

function showSlide() {
    console.log("Current Language: ", currentLanguage);
    const slides = document.getElementsByClassName("mySlides");
    const textContainers = document.getElementsByClassName("text-container");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlideIndex].style.display = "block";

    let newTextContent;
    if (currentLanguage === "nl") {
        newTextContent = getDutchTextContentForSlide(currentSlideIndex);
        } else {
            newTextContent = getEnglishTextContentForSlide(currentSlideIndex);
    }

    for (let i = 0; i < textContainers.length; i++) {
        textContainers[i].innerHTML = newTextContent;
        }
    
    updatePageIndicators();
}
function toggleLanguage() {
    currentLanguage = currentLanguage === "nl" ? "en" : "nl";
    showSlide(); 
}


function getDutchTextContentForSlide(index) {
    switch (index) {
        case 0:
            return "In het nxt museum kan je je beste moment vangen als artwork. Het is een magische plek waar jong en oud samen kunnen genieten van de moderne technologie zoals AI. Het museum waar het veleden met de toekomst. is verbonden en alle bezoekers een bioscoop belevenis krijgt. Koop nu een ticket en ga op een avontuur over de toekomst! dit is an img over face scannen met de nieuwe tech , de schijfer geeft een beetje zijn mening"
        case 1:
            return "de lichtjes geeft aan ";
        case 2:
            return "Dutch Text for Slide 3";
        case 3:
            return "Dutch Text for Slide 4";
        case 4:
            return "Dutch Text for Slide 5";
        default:
            return "Default Dutch Text";
    }
}


function getEnglishTextContentForSlide(index) {
    switch (index) {
        case 0:
            return "English Text for Slide 1";
        case 1:
            return "English Text for Slide 2";
        case 2:
            return "English Text for Slide 3";
        case 3:
            return "English Text for Slide 4";
        case 4:
            return "English Text for Slide 5";
        default:
            return "Default English Text";
    }
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

