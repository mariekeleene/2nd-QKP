const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// meerdere afbeeldingen laden
const imageSources = [
    "images/kip1.jpeg",
    "images/kip2.jpeg",
    "images/kip3.jpeg"
];

const images = [];
let loaded = 0;

// preload alle afbeeldingen
imageSources.forEach(src => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
        loaded++;
        if (loaded === imageSources.length) startAnimation();
    };
    images.push(img);
});

let x = 100;
let y = 100;
let dx = 1;
let dy = 1;

const trail = []; // blijft gewoon oneindig groeien
const spacing = 40;
let frameCounter = 0;

let currentImage = 0;
let imageSwitchCounter = 0;
const switchEvery = 500; // om de 500 frames wisselen

function startAnimation() {
    function animate() {
        // GEEN clearRect meer → oude kipjes blijven staan

        // positie update
        x += dx;
        y += dy;

        // botsen tegen de randen
        if (x + 80 > canvas.width || x < 0) dx *= -1;
        if (y + 80 > canvas.height || y < 0) dy *= -1;

        frameCounter++;
        imageSwitchCounter++;

        // voeg kipje toe
        if (frameCounter % spacing === 0) {
            trail.push({ x, y, img: images[currentImage] });
        }

        // teken alle kipjes (blijven voor altijd zichtbaar)
        trail.forEach(pos => {
            ctx.drawImage(pos.img, pos.x, pos.y, 80, 80);
        });

        // teken huidige bewegende kip
        ctx.drawImage(images[currentImage], x, y, 80, 80);

        // wissel afbeelding na een tijdje
        if (imageSwitchCounter >= switchEvery) {
            currentImage = (currentImage + 1) % images.length;
            imageSwitchCounter = 0;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// Collision check met tekst
function checkCollision() {
    const links = document.querySelectorAll(".artwork-link");

    links.forEach(link => {
        const rect = link.getBoundingClientRect();

        // afbeelding-rect in viewport coördinaten
        const imgRect = {
            left: x,
            right: x + imgWidth,
            top: y,
            bottom: y + imgHeight
        };

        // overlap berekenen
        const overlap = !(imgRect.right < rect.left ||
            imgRect.left > rect.right ||
            imgRect.bottom < rect.top ||
            imgRect.top > rect.bottom);

        if (overlap) {
            link.classList.add("highlight");
        } else {
            link.classList.remove("highlight");
        }
    });
}

// Herbereken canvas bij resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// img.onload = animate;
