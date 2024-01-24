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
            return "Verder bij het nxt museum is het natuurlijk ook van belangstelling om informatie te geven over de dingen die u ziet, net zoals alle andere museums over de wereld, maar zoals we net zeiden wij ook, zo bijvoorbeeld bij alle items kun je uitleg vragen als u een medewerker heeft die of in de kamer toevallig zit of bij de balie of nog zelfs die u rondleidt. Maar hierbij deze foto is het een beetje een soort van illusie die met lichten te maken hebben";
        case 2:
            return "Veel bij bepaalde voorwerpen zult u misschien ook een soort van voorbeeld krijgen van iets als er iets moet bij uitgelegd worden, hierbij bijvoorbeeld deze foto we zullen niet verklappen waar het over gaat, maar als je een beetje je fantasie zou gaan gebruiken dan kan je gewoon misschien kun je erbij bedenken wat het nu precies zou kunnen zijn. Maar geloof ons de zult je verrassen!";
        case 3:
            return "Bij ons is niet alles klein, maar kan ook zeker groot zijn, bijvoorbeeld kan je dat bij ons ook de hele kamer vol zijn en dan is deze afbeelding bijvoorbeeld een voorbeeld erbij, hier is natuurlijk bijvoorbeeld een soort  zodat het lijkt dat je ergens tegenaan zult lopen, je zult je misschien wel een beetje duizelig voelen, maar dat zou wel moeten goed komen, maar geen zorgen dit is zeker niet de enige grote ding dat wij hebben dus je zult niet teleurgesteld worden! ";
        case 4:
            return "Bij het next museum is natuurlijk alles met de future te maken dus misschien had je al kunnen verwachten, we hebben dingen ook op schermen en dingen, omdat natuurlijk alles zal wel online zijn en op screens, dus hier een voorbeeld bij deze foto zult u zien dat we ook bepaalde dingen erbij hebben. We kunnen helaas niet te veel verklappen dus je zult maar moeten komen en achter komen wat er nu precies is";
        default:
            return "Default Dutch Text";
    }
}


function getEnglishTextContentForSlide(index) {
    switch (index) {
        case 0:
            return "In the nxt museum you can capture your best moment as artwork. It is a magical place where young and old can enjoy modern technology such as AI together. The museum where the future is concerned. is connected and all visitors receive a cinema experience. Buy a ticket now and go on an adventure about the future! this is an img about face scanning with the new tech, the disker gives his opinion a bit";
        case 1:
            return "Furthermore, at the nxt museum it is of course also interesting to provide information about the things you see, just like all other museums around the world, but as we just said, we also, for example, with all items you can ask for an explanation if you has an employee who either happens to be sitting in the room or at the counter or who even shows you around. But in this photo it is a bit of an illusion that has to do with lights";
        case 2:
            return "With us, not everything is small, but it can certainly be large, for example, with us you can also have the entire room full and then this image is an example, here is of course a kind so that it seems that you will bump into something walking, you may feel a little dizzy but you should be fine, but don't worry this is certainly not the only great thing we have so you won't be disappointed!";
        case 3:
            return "With us, not everything is small, but it can certainly be large, for example, with us you can also have the entire room full and then this image is an example, here is of course a kind so that it seems that you will bump into something walking, you may feel a little dizzy but you should be fine, but don't worry this is certainly not the only great thing we have so you won't be disappointed!";
        case 4:
            return "At the next museum of course everything is to do with the future so maybe you could have already expected, we have things also on screens and things, because of course everything will be online and on screens, so here an example with this picture you will see that we also have certain things there. We can't give too much away unfortunately so you will just have to come and find out what exactly is there";
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

