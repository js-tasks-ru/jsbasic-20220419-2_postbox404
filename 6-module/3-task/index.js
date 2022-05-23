import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
   constructor(slides) {
      this.slides = slides;
      this.elem = document.querySelector('.container');
      this.render();
      this.initCarousel();
      this.clickButtonPlus();
    
   }
   render() {
      this.carouselBody = this.slides.map((item) => 
         `<div class="carousel__slide" data-id="${item.id}">
            <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
               <span class="carousel__price">€${item.price.toFixed(2)}</span>
               <div class="carousel__title">${item.name}</div>
               <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
               </button>
            </div>
         </div>`
      ).join(' ');
      this.elem = createElement(`
         <div class="carousel">
            <div class="carousel__arrow carousel__arrow_right">
              <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </div>
            <div class="carousel__arrow carousel__arrow_left">
               <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
            </div>
            <div class="carousel__inner">
               ${this.carouselBody}
            </div>
         </div>
      `) 
      
   }
   

    initCarousel() {
      const buttonRight = this.elem.querySelector('.carousel__arrow_right');
      const buttonLeft = this.elem.querySelector('.carousel__arrow_left');
      const carouselInner = this.elem.querySelector('.carousel__inner');
      let procentMoove = 0;

      const hiddenButton = (slidePosition, lastSlidePosition) => {
         if (slidePosition === 0) {
            buttonLeft.style.display = 'none';     
         } else if (Math.abs(slidePosition) === lastSlidePosition) {
            buttonRight.style.display = 'none';
         } else {
            buttonLeft.style.display = '';
            buttonRight.style.display = '';
         }
      }

      if (procentMoove === 0) {
         buttonLeft.style.display = 'none';
      } else {
         buttonLeft.style.display = '';
      }

      buttonRight.addEventListener('click', () => {
         let lastSlideOffset = carouselInner.offsetWidth * (this.slides.length - 1);
         carouselInner.style.transform = `translateX(${procentMoove -= carouselInner.offsetWidth}px)`;
         hiddenButton(procentMoove, lastSlideOffset);
      });

      buttonLeft.addEventListener('click', () => {
         let lastSlideOffset = carouselInner.offsetWidth * (this.slides.length - 1);
         carouselInner.style.transform = `translateX(${procentMoove += carouselInner.offsetWidth}px)`;
         hiddenButton(procentMoove, lastSlideOffset);
      });

   } 

   
   

   clickButtonPlus() {

      this.elem.addEventListener('click', (event) => {
          if (event.target.className === 'carousel__button') {
              let currentSlide = event.path.find(node => node.className === 'carousel__slide');
              let { id } = currentSlide.dataset;
              this.elem.dispatchEvent(new CustomEvent('product-add', {
                  detail: id,
                  bubbles: true
              }));
          }
      });
  }
  
   
  

   

   get(elem) {
      return this._elem;
   }
}
