// For this part, I directly looked at the example I learned in the CodePath WEB101 class
// and modified it a bit to make it look as I wanted. I put a link to the PDF of that source
// in my README
let background = document.getElementById("background");
let greeting = document.getElementById("greeting");
let introduction = document.getElementById("introduction");
let pencilstars = document.getElementById("pencilstars");
let spideralexia = document.getElementById("spideralexia");

let scrollrates = {
    background: 0.05,
    pencilstars: 0.15,
    spideralexia: 0.1,
    greeting: 1,
    introduction: 1
}

const scrollAnimation = () => {
    let scrollamount = window.scrollY;

    background.style.top = scrollamount * scrollrates.background + 'px';
    pencilstars.style.top = scrollamount * scrollrates.pencilstars + 'px';
    // greeting.style.top = scrollamount * scrollrates.greeting + 'px';
    introduction.style.top = scrollamount * scrollrates.introduction + 'px';
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

window.addEventListener('scroll', scrollAnimation)