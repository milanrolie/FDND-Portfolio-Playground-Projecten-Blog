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


// ================ Justus opdracht =================

const infoRight = document.querySelector(".more-info-card");
const infoRightBtn = document.querySelector(".js-right")


function toggleSideContent() {
    infoRight.classList.toggle('active'),
        infoRightBtn.classList.toggle('active');
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