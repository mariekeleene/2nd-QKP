const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Afbeelding laden
const img = new Image();
img.src = "images/garnaal.png"; // pad naar kip-afbeelding

// Startpositie en snelheid
let x = 100, y = 100;
let dx = 2, dy = 2;
let imgWidth = 80, imgHeight = 80;

// Trail opslaan
let trail = [];

// Tekenen van de afbeelding en trail
function draw() {
    // oude posities opslaan voor de trail
    trail.push({ x, y });

    // trail beperkt houden (optioneel → stel lengte in)
    if (trail.length > 200) {
        trail.shift();
    }

    // Trail tekenen (blijft zichtbaar, geen fade)
    trail.forEach(pos => {
        ctx.drawImage(img, pos.x, pos.y, imgWidth, imgHeight);
    });

    // huidige positie tekenen
    ctx.drawImage(img, x, y, imgWidth, imgHeight);
}

// Animatie loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // positie bijwerken
    x += dx;
    y += dy;

    // bounce check
    if (x + imgWidth > canvas.width || x < 0) dx *= -1;
    if (y + imgHeight > canvas.height || y < 0) dy *= -1;

    draw();
    checkCollision();

    requestAnimationFrame(animate);
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

img.onload = animate;
