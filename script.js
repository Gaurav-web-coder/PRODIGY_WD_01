/* ---------------- TYPING EFFECT ---------------- */
const texts = [
    "Computer Science Student",
    "C & C++ Programmer",
    "DSA Learner",
    "Frontend Developer",
    "Spotify Artist"
];

let index = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

function typeEffect() {
    if (charIndex < texts[index].length) {
        typing.textContent += texts[index][charIndex++];
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typing.textContent = texts[index].substring(0, --charIndex);
        setTimeout(eraseEffect, 60);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});

/* ---------------- SECTION FADE-IN ---------------- */
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            section.classList.add("show");
        }
    });
});

/* ---------------- PARALLAX EFFECT ---------------- */
const blob1 = document.querySelector(".blob1");
const blob2 = document.querySelector(".blob2");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    blob1.style.transform = `translate(${scrollY * 0.05}px, ${scrollY * -0.05}px)`;
    blob2.style.transform = `translate(${scrollY * -0.05}px, ${scrollY * 0.05}px)`;
});
function openResume() {
    document.getElementById("resumeModal").style.display = "flex";
}

function closeResume() {
    document.getElementById("resumeModal").style.display = "none";
}
