export default class StepSlider {
    constructor({ steps, value = 0 }) {
        this.steps = steps;
        this.value = value;
        this.elem;
        this.render();
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
        slider.addEventListener("click", this.onClick);
        this.elem = slider;
    }

    onClick = (event) => {
        const thumb = this.elem.querySelector(".slider__thumb");
        const progress = this.elem.querySelector(".slider__progress");
        const sliderValue = this.elem.querySelector(".slider__value");
        const steps = this.elem.querySelectorAll(".slider__steps span");
        const sliderSegment = (1 / (this.steps - 1)) * 100;
        let clickX = event.clientX - this.elem.getBoundingClientRect().x;
        let clickValue = Math.round(
            (clickX * (this.steps - 1)) / this.elem.clientWidth
        );
        this.value = clickValue;
        thumb.style.left = sliderSegment * this.value + "%";
        progress.style.width = sliderSegment * this.value + "%";
        sliderValue.textContent = this.value;
        steps.forEach((item, index) => {
            item.className = "";
            if (index === this.value) {
                item.className = "slider__step-active";
            }
        });
        const sliderChange = new CustomEvent("slider-change", {
            detail: this.value,
            bubbles: true,
        });
        event.target.dispatchEvent(sliderChange);
    };
}
