console.log("Portfolio Loaded Successfully");
const roles = [
    "Software Developer",
    "AI Enthusiast",
    "Java Developer",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (!isDeleting) {
        currentText = roles[roleIndex].substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === roles[roleIndex].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        currentText = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    typingElement.textContent = currentText;
    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();