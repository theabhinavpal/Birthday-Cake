// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const flame = document.getElementById("flame");
    const smoke = document.getElementById("smoke");
    const blowButton = document.getElementById("blowButton");

    // Add event listener to blow out the candle
    blowButton.addEventListener("click", () => {
        if (flame && smoke) {
            flame.style.opacity = 0; // Hide the flame
            smoke.style.opacity = 1; // Show the smoke
            setTimeout(() => {
                alert("The candle is off! 🎉");
            }, 1000);
        } else {
            console.error("Flame or smoke element not found.");
        }
    });
});
