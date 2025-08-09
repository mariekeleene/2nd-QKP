const toggleBtn = document.getElementById("toggle-details");
const detailsPanel = document.getElementById("details-panel");

toggleBtn.addEventListener("click", () => {
    if (detailsPanel.style.display === "block") {
        detailsPanel.style.display = "none";
        toggleBtn.textContent = "Details +";
    } else {
        detailsPanel.style.display = "block";
        toggleBtn.textContent = "Details -";
    }
});
