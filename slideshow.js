const images = [
    "images/kip1.jpeg",
    "images/rollade.jpeg",
    "images/kotelet.jpeg"
];

let currentIndex = 0;

const galleryImage = document.getElementById("gallery-image");
const pageCounter = document.getElementById("page-counter");

const detailsBtn = document.getElementById("details-btn");
const detailsText = document.getElementById("details-text");



function updateGallery() {
    galleryImage.src = images[currentIndex];
    pageCounter.textContent = `${currentIndex + 1}/${images.length}`;
}

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
});

document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});


detailsBtn.addEventListener("click", () => {
    detailsText.classList.toggle("show");
    if (detailsText.classList.contains("show")) {
        detailsBtn.textContent = "Details -";
    } else {
        detailsBtn.textContent = "Details +";
    }
});

updateGallery();
