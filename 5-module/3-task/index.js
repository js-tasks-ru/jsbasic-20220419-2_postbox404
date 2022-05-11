function initCarousel() {

  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselIttems = document.querySelectorAll('.carousel__slide');
  let carouselIttemsLength = carouselIttems.length;
  let carouselIttemsWidth = document.querySelector('.carousel__slide').offsetWidth;
  let procentMoove = 0;

  hiddenButton();
    
  buttonRight.addEventListener('click', () => {
    carouselInner.style.transform = `translateX(${procentMoove -= carouselIttemsWidth}px)`; 
    hiddenButton();
  });
  buttonLeft.addEventListener('click', () => {
    carouselInner.style.transform = `translateX(${procentMoove += carouselIttemsWidth}px)`;
    hiddenButton();
  });

  function hiddenButton() {
    if (procentMoove <= -(carouselIttemsLength - 1) * carouselIttemsWidth) {
      buttonRight.style.display = 'none';
    } else { buttonRight.style.display = '' }
    if (procentMoove === 0) {
      buttonLeft.style.display = 'none';
    } else { buttonLeft.style.display = '' }
  }  
}

