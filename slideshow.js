document.addEventListener("DOMContentLoaded", () => {

    const images = [
        "images/rollade.jpeg",
        "images/hamburger.jpeg",
        "images/varkenspoot.jpeg",
        "images/3.mp4"
    ];

    const feed = document.getElementById("feed");
    const detailsBtn = document.getElementById("details-btn");
    const detailsText = document.getElementById("details-text");

    /* DETAILS TOGGLE */
    detailsBtn.addEventListener("click", () => {

        detailsText.classList.toggle("active");

        detailsBtn.textContent = detailsText.classList.contains("active")
            ? "close ▲"
            : "more information ▽";

    });

    /* ADD IMAGES AND VIDEOS */
    function addImages() {
        images.forEach(src => {

            const extension = src.split(".").pop().toLowerCase();

            /* VIDEO */
            if (["mp4", "mov", "webm", "ogg"].includes(extension)) {

                const video = document.createElement("video");

                video.src = src;
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.playsInline = true;
                video.controls = false;
                video.loading = "lazy";

                feed.appendChild(video);

            }

            /* IMAGE */
            else {

                const img = document.createElement("img");

                img.src = src;
                img.loading = "lazy";

                feed.appendChild(img);
            }

        });
    }

    /* INIT */
    addImages();
    addImages();

    /* INFINITE SCROLL */
    window.addEventListener("scroll", () => {

        if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 300
        ) {
            addImages();
        }

    });

    /* FLOATING BACK BUTTON */
    const button = document.getElementById("floating-back");

    function moveButton() {

        const w = window.innerWidth - button.offsetWidth;
        const h = window.innerHeight - button.offsetHeight;

        const x = Math.random() * w;
        const y = Math.random() * h;

        button.style.left = x + "px";
        button.style.top = y + "px";
    }

    /* MOVE EVERY 8 SECONDS */
    moveButton();
    setInterval(moveButton, 8000);

});