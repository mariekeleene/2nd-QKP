function initSlideshow(images) {
    let currentIndex = 0;

    const img = document.getElementById("gallery-image");
    const counter = document.getElementById("page-counter");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const detailsBtn = document.getElementById("details-btn");
    const detailsText = document.getElementById("details-text");

    function update() {
        img.src = images[currentIndex];
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    prev.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        update();
    };

    next.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        update();
    };

    detailsBtn.onclick = () => {
        detailsText.classList.toggle("show");
        detailsBtn.textContent =
            detailsText.classList.contains("show")
                ? "Click Here ▲"
                : "Click Here ▽";
    };

    update();
}
