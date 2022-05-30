import createElement from '../../assets/lib/create-element.js';

export default class Modal {
    constructor() {
        this.elem = document.querySelector('.container');
        this.render();
        this.open();
        this.setTitle();
        this.setBody();
        this.close();
    }

    render() {
        this.elem = createElement(`
            <div class="modal">
                <div class="modal__overlay"></div>
                <div class="modal__inner">
                    <div class="modal__header">
                        <button type="button" class="modal__close">
                            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
                        </button>
                        <h3 class="modal__title">
                        </h3>
                    </div>
                    <div class="modal__body">
                    </div>
                </div>
            </div>
        `);        
    }
    
    open() {
        document.body.append(this.elem);
        document.body.classList.add('is-modal-open');
    
        this.elem.querySelector('.modal__close').addEventListener('click', () => this.close());
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') this.close();
        })
    }

    close() {
        this.elem.remove();
        document.body.classList.remove('is-modal-open');
    }

    setTitle(title) {
        this.elem.querySelector('.modal__title').innerHTML = title;
    }

    setBody(modalBody) {
        this.elem.querySelector('.modal__body').innerHTML = '';
        this.elem.querySelector('.modal__body').append(modalBody);
    }

}
