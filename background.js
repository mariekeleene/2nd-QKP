const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let img = new Image();
img.src = "images/kip1.jpeg"; // <-- vervang door jouw afbeelding

let x = 100, y = 100;   // startpositie
let dx = 3, dy = 2;     // snelheid
let imgWidth = 120, imgHeight = 120;

// Animation loop
function animate() {
    // ❌ geen ctx.fillRect meer → trail blijft zichtbaar
    ctx.drawImage(img, x, y, imgWidth, imgHeight);

    x += dx;
    y += dy;

    // bounce tegen de randen
    if (x + imgWidth > canvas.width || x < 0) dx = -dx;
    if (y + imgHeight > canvas.height || y < 0) dy = -dy;

    requestAnimationFrame(animate);
}

img.onload = () => {
    animate();
};

// Tekstkleur aanpassen afhankelijk van vulling
function updateTextColor() {
    const imageData = ctx.getImageData(canvas.width/2, canvas.height/2, 1, 1);
    const [r, g, b] = imageData.data;
    const brightness = (r*0.299 + g*0.587 + b*0.114);

    document.querySelectorAll(".artwork-link").forEach(link => {
        link.style.color = (brightness < 128) ? "white" : "black";
    });

    requestAnimationFrame(updateTextColor);
}
updateTextColor();

// Resize fix
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
