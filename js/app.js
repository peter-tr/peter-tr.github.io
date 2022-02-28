const navSlide = () => {
    //gets the burger class and nav-links class
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');

    let navLinks = document.querySelectorAll('.nav-links li');
    let burgerLines = document.querySelectorAll('.burger div');

    //anonymous function to bind clicking burger to showing the nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //loop through the navLinks
        navLinks.forEach((link, index) => {
            //checks whether the navlinks have an animations
            //if so, remove animation, if not add animation
            if (!link.style.animation) {
                //string format to set transition and delay each nav link
                link.style.animation = `navLinkSlide 0.6s ease forwards ${index / 5 + 0.5}s`;
            } else {
                link.style.animation = "";
            }
        });
        burgerLines.forEach((link, index) => {

            link.classList.toggle('toggleBurger');

        })

    });

}

//binds image to the image map resizer function
$(document).ready(function (e) {
    $("map").imageMapResize();
});


//slide show
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    //cycles through the image, repeats if reach the end of the index
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//invoke function
const app = () => {
    navSlide();
}

app();
