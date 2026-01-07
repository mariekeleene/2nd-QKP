const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

/* Canvas size */
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* Image size */
const IMG_SIZE = 80;

/* Images */
const imageSources = [
    "images/lift.jpeg",
    "images/achtergrond50.jpg"
];

const images = [];
let loaded = 0;

/* Preload images */
imageSources.forEach(src => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
        loaded++;
        if (loaded === imageSources.length) startAnimation();
    };
    images.push(img);
});

/* Movement */
let x = 100;
let y = 100;
let dx = 1;
let dy = 1;

/* Trail */
const trail = [];
const spacing = 40;
let frameCounter = 0;

/* Image switching */
let currentImage = 0;
let imageSwitchCounter = 0;
const switchEvery = 500;

function startAnimation() {
    function animate() {
        /* Update position */
        x += dx;
        y += dy;

        /* Bounce */
        if (x + IMG_SIZE > canvas.width || x < 0) dx *= -1;
        if (y + IMG_SIZE > canvas.height || y < 0) dy *= -1;

        frameCounter++;
        imageSwitchCounter++;

        /* Add to trail */
        if (frameCounter % spacing === 0) {
            trail.push({ x, y, img: images[currentImage] });
        }

        /* Draw trail (no clearRect on purpose) */
        trail.forEach(pos => {
            ctx.drawImage(pos.img, pos.x, pos.y, IMG_SIZE, IMG_SIZE);
        });

        /* Draw current */
        ctx.drawImage(images[currentImage], x, y, IMG_SIZE, IMG_SIZE);

        /* Switch image */
        if (imageSwitchCounter >= switchEvery) {
            currentImage = (currentImage + 1) % images.length;
            imageSwitchCounter = 0;
        }

        /* Collision check */
        checkCollision();

        requestAnimationFrame(animate);
    }

    animate();
}

/* Collision with artwork links */
function checkCollision() {
    const links = document.querySelectorAll(".artwork-link");

    const imgRect = {
        left: x,
        right: x + IMG_SIZE,
        top: y,
        bottom: y + IMG_SIZE
    };

    links.forEach(link => {
        const rect = link.getBoundingClientRect();

        const overlap = !(
            imgRect.right < rect.left ||
            imgRect.left > rect.right ||
            imgRect.bottom < rect.top ||
            imgRect.top > rect.bottom
        );

        link.classList.toggle("highlight", overlap);
    });
}
