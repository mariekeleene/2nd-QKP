document.addEventListener("DOMContentLoaded", () => {

    const images = [
        "images/rollade.jpeg",
        "images/hamburger.jpeg",
        "images/varkenspoot.jpeg"
    ];

    const feed = document.getElementById("feed");
    const detailsBtn = document.getElementById("details-btn");
    const detailsText = document.getElementById("details-text");

    const btn = document.getElementById("details-btn");
    const details = document.getElementById("details-text");

    btn.addEventListener("click", () => {
        details.classList.toggle("active");
    });

    /* TOGGLE */
    detailsBtn.addEventListener("click", () => {
        detailsText.classList.toggle("show");
        detailsBtn.textContent = detailsText.classList.contains("show")
            ? "close ▲"
            : "click here if you want to see more than image ▽";
    });

    function addImages() {
        images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.loading = "lazy";
            feed.appendChild(img);
        });
    }

    /* INIT */
    addImages();
    addImages();

    /* INFINITE SCROLL */
    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
            addImages();
        }
    });
});
