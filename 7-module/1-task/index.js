import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
     constructor(categories) {
         this.categories = categories;
         this.elem = document.querySelector('.container');
         this.render();
         this.scrollMenu();
         this.selectId();
     }
 
     render() {
         this._navCategories = this.categories.map(item => `
           <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>
         `).join('');
         this.elem = createElement(`
           <div class="ribbon">
             <button class="ribbon__arrow ribbon__arrow_left">
               <img src="/assets/images/icons/angle-icon.svg" alt="icon">
             </button>
             <nav class="ribbon__inner">
               ${this._navCategories}
             </nav>
             <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
               <img src="/assets/images/icons/angle-icon.svg" alt="icon">
             </button>
           </div>
        `);
     }
 
     scrollMenu() {
         const ribbonInner = this.elem.querySelector('.ribbon__inner');
         const buttonLeft = this.elem.querySelector('.ribbon__arrow_left');
         const buttonRight = this.elem.querySelector('.ribbon__arrow_right');
 
         buttonLeft.addEventListener('click', () => {
             ribbonInner.scrollBy(-350, 0);
         });
 
         buttonRight.addEventListener('click', () => {
             ribbonInner.scrollBy(350, 0);
         });
 
         ribbonInner.addEventListener('scroll', () => {
             let scrollRight = ribbonInner.scrollWidth - ribbonInner.clientWidth - ribbonInner.scrollLeft;
 
             if (ribbonInner.scrollLeft == 0) {
                 buttonLeft.classList.remove('ribbon__arrow_visible');
             } else {
                 buttonLeft.classList.add('ribbon__arrow_visible');
             }
 
             if (scrollRight < 1) {
                 buttonRight.classList.remove('ribbon__arrow_visible');
             } else {
                 buttonRight.classList.add('ribbon__arrow_visible');
             }
         })
     }
 
     selectId() {
         const ribbonInner = this.elem.querySelector('.ribbon__inner');
 
         ribbonInner.addEventListener('click', (event) => {
             event.preventDefault();
 
             let active = this.elem.querySelector('.ribbon__item_active');
             if (active) {
                 active.classList.remove('ribbon__item_active');
             }
             event.target.classList.add('ribbon__item_active');
 
             event.target.dispatchEvent(new CustomEvent('ribbon-select', {
                 detail: event.target.dataset.id,
                 bubbles: true
             }));
         });
     }
 }