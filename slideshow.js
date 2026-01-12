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
    detailsText.classList.toggle("show");
    detailsBtn.textContent = detailsText.classList.contains("show")
        ? "Click Here ▲"
        : "Click Here ▽";
});

/* ADD IMAGES TO FEED */
function addImages() {
    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Artwork";
        feed.appendChild(img);
    });
}

/* INITIAL LOAD */
addImages();
addImages(); // meteen wat extra content

/* INFINITE SCROLL */
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        addImages();
    }
});
