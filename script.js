const slider = document.getElementById("slider");
const images = document.querySelectorAll(".slider img");
let index = 0;
const totalImages = images.length;

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % totalImages;
    updateSlider();
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + totalImages) % totalImages;
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(${-index * 600}px)`;
}

// Automatic Slideshow
setInterval(() => {
    index = (index + 1) % totalImages;
    updateSlider();
}, 5000);
