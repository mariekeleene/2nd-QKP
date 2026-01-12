function initSlideshow(images) {
    let currentIndex = 0;
    const galleryImage = document.getElementById("gallery-image");
    const pageCounter = document.getElementById("page-counter");
    const detailsBtn = document.getElementById("details-btn");
    const detailsText = document.getElementById("details-text");

    function updateImage() {
        galleryImage.src = images[currentIndex];
        pageCounter.textContent = `${currentIndex + 1}/${images.length}`;
    }

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    detailsBtn.addEventListener("click", () => {
        detailsText.classList.toggle("show");
        detailsBtn.textContent = detailsText.classList.contains("show") ? "Click Here ▲" : "Click Here ▽";
    });

    updateImage(); // show first image
}