// Mobile menu
const toggleBtn = document.getElementById("toggle-btn");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});

// Typing animation
const text = ["Web Developer", "Designer", "Programmer"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    const typingEl = document.getElementById("typing");

    if (charIndex < text[index].length) {
        typingEl.textContent += text[index][charIndex];
        charIndex++;
        setTimeout(typeEffect, 120);
    } else {
        setTimeout(() => {
            typingEl.textContent = "";
            charIndex = 0;
            index = (index + 1) % text.length;
            typeEffect();
        }, 1500);
    }
}
typeEffect();

// Fade-in sections when scrolling
const faders = document.querySelectorAll(".fade-section");

function showOnScroll() {
    const trigger = window.innerHeight * 0.8;

    faders.forEach((section) => {
        const rect = section.getBoundingClientRect().top;
        if (rect < trigger) section.classList.add("show");
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// Contact form alert
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent!");
});
 document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent!");

    // Reset the form
    e.target.reset();
});
