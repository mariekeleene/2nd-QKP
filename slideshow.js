document.addEventListener("DOMContentLoaded", () => {

    const images = [
        "images/rollade.jpeg",
        "images/hamburger.jpeg",
        "images/varkenspoot.jpeg"
    ];

    const feed = document.getElementById("feed");
    const detailsBtn = document.getElementById("details-btn");
    const detailsText = document.getElementById("details-text");

    /* DETAILS TOGGLE */
    detailsBtn.addEventListener("click", () => {

        detailsText.classList.toggle("active");

        detailsBtn.textContent = detailsText.classList.contains("active")
            ? "CLOSE ▲"
            : "MORE INFO ▽";

    });

    /* ADD IMAGES */
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

    const button = document.getElementById("floating-back");

    function moveButton() {

        const w = window.innerWidth - button.offsetWidth;
        const h = window.innerHeight - button.offsetHeight;

        const x = Math.random() * w;
        const y = Math.random() * h;

        button.style.left = x + "px";
        button.style.top = y + "px";
    }

    /* move every 2 seconds */

    moveButton();
    setInterval(moveButton, 2000);

});