export default class StepSlider {
    constructor({ steps, value = 0 }) {
        this.steps = steps;
        this.value = value;
        this.elem = this.render();
        this.thumb = this.elem.querySelector(".slider__thumb");
        this.progress = this.elem.querySelector(".slider__progress");
        this.sliderSegment = (1 / (this.steps - 1)) * 100;
        this.sliderValue = this.elem.querySelector(".slider__value");
        this.span = this.elem.querySelectorAll(".slider__steps span");
    }
    render() {
        const slider = document.createElement("div");
        slider.className = "slider";
        const sliderThumb = document.createElement("div");
        sliderThumb.className = "slider__thumb";
        sliderThumb.style.left = "0%";
        const sliderValue = document.createElement("span");
        sliderValue.className = "slider__value";
        sliderValue.textContent = `${this.value}`;
        sliderThumb.append(sliderValue);
        const sliderProgress = document.createElement("div");
        sliderProgress.className = "slider__progress";
        sliderProgress.style.width = "0%";
        const sliderSteps = document.createElement("div");
        sliderSteps.className = "slider__steps";
        for (let i = 0; i < this.steps; i++) {
            let stepItem = document.createElement("span");
            if (i === 0) {
                stepItem.className = "slider__step-active";
            }
            sliderSteps.append(stepItem);
        }
        slider.append(sliderThumb, sliderProgress, sliderSteps);
        sliderThumb.ondragstart = () => false;
        slider.addEventListener("click", this.onClick);
        document.addEventListener("pointerdown", this.onPointerDown);
        document.addEventListener("pointerup", this.onPointerUp);
        return slider;
    }
    customEvent = () => {
        const sliderChange = new CustomEvent("slider-change", {
            detail: this.value,
            bubbles: true,
        });
        this.elem.dispatchEvent(sliderChange);
    };
    coordsChange = (event) => {
        let clickX = event.clientX - this.elem.getBoundingClientRect().x;
        let nearValue = Math.round(
            (clickX * (this.steps - 1)) / this.elem.clientWidth
        );
        this.value = nearValue;
        this.sliderValue.textContent = this.value;
        this.span.forEach((item, index) => {
            item.className = "";
            if (index === this.value) {
                item.className = "slider__step-active";
            }
        });
    };
    onClick = (event) => {
        let clickX = event.clientX - this.elem.getBoundingClientRect().x;
        let nearValue = Math.round(
            (clickX * (this.steps - 1)) / this.elem.clientWidth
        );
        this.value = nearValue;
        this.sliderValue.textContent = this.value;
        this.span.forEach((item, index) => {
            item.className = "";
            if (index === this.value) {
                item.className = "slider__step-active";
            }
        });
        this.thumb.style.left = this.sliderSegment * this.value + "%";
        this.progress.style.width = this.sliderSegment * this.value + "%";
        const sliderChange = new CustomEvent("slider-change", {
            detail: this.value,
            bubbles: true,
        });
        this.elem.dispatchEvent(sliderChange);
    };
    onPointerDown = (event) => {
        event.preventDefault();
        document.addEventListener("pointermove", this.onPointerMove);
    };
    onPointerMove = (event) => {
        event.preventDefault();
        let clickX = event.clientX - this.elem.getBoundingClientRect().x;
        let nearValue = Math.round(
            (clickX * (this.steps - 1)) / this.elem.clientWidth
        );

        this.span.forEach((item, index) => {
            item.className = "";
            if (index === this.value) {
                item.className = "slider__step-active";
            }
        });
        if (
            event.clientX <
            this.elem.getBoundingClientRect().x + this.elem.clientWidth
        ) {
            this.thumb.style.left = (clickX / this.elem.clientWidth) * 100 + "%";
            this.progress.style.width = (clickX / this.elem.clientWidth) * 100 + "%";
            this.value = nearValue;
            this.sliderValue.textContent = this.value;
            this.elem.classList.add("slider_dragging");
        } else {
            this.thumb.style.left = "100%";
            this.progress.style.width = "100%";
            this.sliderValue.textContent = this.steps - 1;
        }
    };
    onPointerUp = () => {
        this.thumb.style.left = this.sliderSegment * this.value + "%";
        this.progress.style.width = this.sliderSegment * this.value + "%";
        this.elem.classList.remove("slider_dragging");
        const sliderChange = new CustomEvent("slider-change", {
            detail: this.value,
            bubbles: true,
        });
        this.elem.dispatchEvent(sliderChange);
        document.removeEventListener("pointermove", this.onPointerMove);
    };
}