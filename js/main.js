/* Open */
function openMenu() {
    document.getElementById("myMenu").style.height = "100%";
}

/* Close */
function closeMenu() {
    document.getElementById("myMenu").style.height = "0%";
}

/* Tab */
function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("weWorkWith__tabs__item");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("weWorkWith__tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("tablink__active");
    }
    document.getElementById(cityName).classList.add("active");
    evt.currentTarget.classList.add("tablink__active");
}

// Auto-click the first tab on page load
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".weWorkWith__tablink").click();
});

// Accordion
var coll = document.getElementsByClassName("accordion__btn");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


// Modal

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Carousel

const carousel = document.getElementById('carousel');
const cards = carousel.querySelectorAll('.product__card');
const gap = 10;

window.addEventListener('load', () => {
    const cardWidth = cards[0].offsetWidth + gap;

    function scrollCarousel(direction) {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        const currentScroll = carousel.scrollLeft;

        let targetScroll = currentScroll + direction * cardWidth;

        if (direction === 1 && currentScroll >= maxScrollLeft - 1) {
            // Go to start
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else if (direction === -1 && currentScroll <= 0) {
            // Go to end
            carousel.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
            carousel.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
        }
    }

    window.scrollCarousel = scrollCarousel;
});