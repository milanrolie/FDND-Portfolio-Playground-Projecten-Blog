const circle = document.getElementById('circle');
const circleStyle = circle.style;
const cursorText = document.querySelector(".cursor-text");

document.addEventListener('mousemove', e => {
    window.requestAnimationFrame(() => {
        if (e.target.classList.contains('main-image')) {
            circle.classList.add('biggercircle', 'has-line')
            cursorText.innerHTML = "view project";
        } else {
            circle.classList.remove('biggercircle', 'has-line')
            cursorText.innerHTML = " ";
        }
        if (e.target.classList.contains('wrapper-track') || e.target.closest('.wrapper-track')) {
            circle.classList.add('hotpink')
        } else {
            circle.classList.remove('hotpink')
        }
        if (e.target.classList.contains('contact')) {
            circle.classList.add('smallercircle')
            // cursorText.innerHTML = "mail me!";

        } else {
            circle.classList.remove('smallercircle')
            // cursorText.innerHTML = " ";
        }
        circleStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
        circleStyle.left = `${e.clientX - circle.offsetWidth / 2}px`;
    });
});

// ============================ SAMEN MET CODEPEN =======================


"use strict";
const leftArrow = document.querySelector(".left-control"),
    rightArrow = document.querySelector(".right-control"),
    slider = document.querySelector(".slider");

/**
 * @brief Scroll to the right
 */
function scrollRight() {
    if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
        slider.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else {
        slider.scrollBy({
            left: window.innerWidth,
            behavior: "smooth"
        });
    }
}

/**
 * @brief Scroll to the left
 */
function scrollLeft() {
    slider.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth"

    });


}
// Scroll Events
slider.addEventListener("click", function (ev) {
    if (ev.target === leftArrow) {
        scrollLeft();
        resetTimer();
    }
});

slider.addEventListener("click", function (ev) {
    if (ev.target === rightArrow) {
        scrollRight();
        resetTimer();
    }
});


// ================ opdracht =================

const infoRight = document.querySelector(".more-info-card");
const infoRightBtn = document.querySelector(".js-right")
// const leftBarText = Document.querySelector(".left-bar-text")
// const leftBarImage = Document.querySelector(".left-bar-image")



function toggleSideContent() {
    infoRight.classList.toggle('active'),
        infoRightBtn.classList.toggle('active');
    leftBarText.classList.toggle('active');
    leftBarImage.classList.toggle('active');



}






// ============= GEKKE SLIDER SAMEN MET TUTORIAL =============

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
}


window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

// ================= MOUSE ANIMATIONS ===============

const mouseCircle = document.querySelector('.circle')
const imageHover = document.querySelector(".main-image")

imageHover.addEventListener('mouseenter', biggerCircle)


function biggerCircle() {
    mouseCircle.classList.add('biggercircle')
}

imageHover.addEventListener('mouseleave', smallerCircle)


function smallerCircle() {
    mouseCircle.classList.remove('biggercircle')
}