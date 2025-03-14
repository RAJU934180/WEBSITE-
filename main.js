// Function to show Minecraft generator (default view)
function showMinecraft() {
    document.getElementById("minecraft-generator").classList.add("active");
    document.getElementById("crunchyroll-generator").classList.remove("active");
    toggleMenu(); // Close menu after clicking
}

// Function to show Crunchyroll generator
function showCrunchyroll() {
    document.getElementById("minecraft-generator").classList.remove("active");
    document.getElementById("crunchyroll-generator").classList.add("active");
    toggleMenu(); // Close menu after clicking
}

// Show Minecraft generator by default on page load
document.addEventListener("DOMContentLoaded", function() {
    showMinecraft();
});

// Function to toggle navigation menu
function toggleMenu() {
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("active");
}

// Ensure menu stays closed on page load
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".nav-menu").classList.remove("active");
});

// Minecraft Shortened Links
const minecraftLinks = [
    "https://linkpays.in/w8JvUD",
    "https://linkpays.in/w8JvUD",
    "https://linkpays.in/w8JvUD"
];

// Crunchyroll Shortened Links
const crunchyrollLinks = [
    "https://linkpays.in/YOUR_CRUNCHYROLL_LINK",
    "https://linkpays.in/YOUR_CRUNCHYROLL_LINK",
    "https://linkpays.in/YOUR_CRUNCHYROLL_LINK"
];

// Function to redirect to a random Minecraft account link
function redirectToRandomLink() {
    const randomIndex = Math.floor(Math.random() * minecraftLinks.length);
    window.location.href = minecraftLinks[randomIndex];
}

// Function to redirect to a random Crunchyroll account link
function redirectToCrunchyrollLink() {
    const randomIndex = Math.floor(Math.random() * crunchyrollLinks.length);
    window.location.href = crunchyrollLinks[randomIndex];
}
