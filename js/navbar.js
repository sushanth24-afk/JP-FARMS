/* ===========================================
            STICKY NAVBAR
===========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "#1B4332";
        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        navbar.style.background = "rgba(0,0,0,.25)";
        navbar.style.padding = "20px 8%";
        navbar.style.boxShadow = "none";

    }

});

/* ===========================================
        MOBILE MENU
===========================================*/

const mobileNav = document.querySelector(".nav-links");
const menuButton = document.querySelector(".menu-btn");

if (menuButton && mobileNav) {

    menuButton.addEventListener("click", () => {

        mobileNav.classList.toggle("show");

    });

}

/* ===========================================
        CLOSE MENU AFTER CLICK
===========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (mobileNav) {

            mobileNav.classList.remove("show");

        }

    });

});

/* ===========================================
        NAVBAR LINK HOVER
===========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.color = "#D4A017";

    });

    link.addEventListener("mouseleave", () => {

        link.style.color = "white";

    });

});

/* ===========================================
        LOGO HOVER
===========================================*/

const logo = document.querySelector(".logo img");

if (logo) {

    logo.addEventListener("mouseenter", () => {

        logo.style.transition = ".4s";
        logo.style.transform = "scale(1.08)";

    });

    logo.addEventListener("mouseleave", () => {

        logo.style.transform = "scale(1)";

    });

}

console.log("Navbar Loaded ✅");