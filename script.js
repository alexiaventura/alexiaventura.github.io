// Scroll-based parallax animation
let background = document.getElementById("background");
let greeting = document.getElementById("greeting");
let introduction = document.getElementById("introduction");
let pencilstars = document.getElementById("pencilstars");

let scrollrates = {
    background: 0.05,
    pencilstars: 0.15,
    greeting: 1,
    introduction: 1
};

const scrollAnimation = () => {
    let scrollamount = window.scrollY;
    if (background) background.style.top = scrollamount * scrollrates.background + 'px';
    if (pencilstars) pencilstars.style.top = scrollamount * scrollrates.pencilstars + 'px';
    if (introduction) introduction.style.top = scrollamount * scrollrates.introduction + 'px';

    // Fades out pencil stars after section 1 (to avoid having stars show up with the about me section)
    const section1 = document.getElementById("home-section");
    if (section1 && pencilstars) {
        const sectionBottom = section1.offsetTop + section1.offsetHeight;
        const scrollBottom = scrollamount + window.innerHeight;

        if (scrollBottom > sectionBottom) {
            pencilstars.style.opacity = "0";
        } else {
            pencilstars.style.opacity = "0.5";
        }
    }
};

window.addEventListener('scroll', scrollAnimation);

// Slideshow animation
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");

    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Typing animation
document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi, I am Alexia Ventura.";
    const typedText = document.getElementById("typed-text");
    const cursor = document.getElementById("cursor");
    let index = 0;

    function type() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Typing speed
        } else {
            // Stops the cursor from blinking after typing is done
            cursor.style.animation = "none";
            cursor.style.opacity = "1";
            cursor.style.display = "none";
        }
    }

    setTimeout(type, 3000); // Initial delay before typing starts
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "I create content and help people with my knowledge and passion for technology, art, and inclusivity.";
    const target = document.getElementById("introduction");
    let index = 0;

    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Typing speed
        }
    }

    setTimeout(type, 7000);
});