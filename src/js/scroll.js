//  Fading header text on scroll

let heroSection = document.querySelector('.hero .text-box');
let height = heroSection.clientHeight;

window.onscroll = function () {
    heroSection.style.opacity = 1 - ((window.pageYOffset-200) / (height) - 0.1);
}