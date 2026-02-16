// Scroll-based parallax animation
let greeting = document.getElementById("greeting");
let introduction = document.getElementById("introduction");
let pencilstars = document.getElementById("pencilstars");

let scrollrates = {
    pencilstars: 0.15,
    greeting: 1,
    introduction: 1
};

const scrollAnimation = () => {
    let scrollamount = window.scrollY;
    if (pencilstars) pencilstars.style.top = scrollamount * scrollrates.pencilstars + 'px';

    // Fades out pencil stars after section 1 (to avoid having stars show up in future sections)
    const section1 = document.getElementById("home-section");
    if (section1 && pencilstars) {
        const sectionBottom = section1.offsetTop + section1.offsetHeight;
        const viewportBottom = scrollamount + window.innerHeight;
        if (viewportBottom >= sectionBottom) {
            pencilstars.style.opacity = "0";
        }
        else {
            pencilstars.style.opacity = "0.5";
        }
    }
};

window.addEventListener('scroll', scrollAnimation);

// Typing animation
document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi, I am Alex Ventura.";
    const typedText = document.getElementById("typed-text");
    const cursor = document.getElementById("cursor");
    let index = 0;

    function type() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 40); // Typing speed
        } else {
            // Stops the cursor from blinking after typing is done
            cursor.style.animation = "none";
            cursor.style.opacity = "1";
            cursor.style.display = "none";
        }
    }

    setTimeout(type, 1000); // Initial delay before typing starts
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "I specialize in designing for the music industry and writing internal documentation for non-technical users.";
    const target = document.getElementById("about-me");
    const scrollHint = document.getElementById("scroll-hint");
    let index = 0;

    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(type, 40); // Typing speed
        } else {
            scrollHint.classList.add("visible"); // Shows the scroll hint
        }
    }

    setTimeout(type, 3000);
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImage.src = img.src;
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        lightbox.style.display = 'none';
    }
});

document.getElementById('lightbox-close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});
