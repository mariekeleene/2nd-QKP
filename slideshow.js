let currentIndex = 0;

const galleryImage = document.getElementById("gallery-image");
const pageCounter = document.getElementById("page-counter");

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
});

document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});

function updateGallery() {
    galleryImage.src = images[currentIndex];
    pageCounter.textContent = `${currentIndex + 1}/${images.length}`;
}
