/* ===========================================
        JP FARMS MAIN SCRIPT
===========================================*/

// Current Year
const year = new Date().getFullYear();

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = year;
}

/* ===========================================
        SMOOTH SCROLL
===========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ===========================================
        ACTIVE NAVBAR LINK
===========================================*/

const sections = document.querySelectorAll("section");

const navMenuLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navMenuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================================
        BUTTON EFFECT
===========================================*/

const buttons = document.querySelectorAll(
".btn-primary,.btn-secondary,.product-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = ".3s";

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

/* ===========================================
        IMAGE HOVER
===========================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.filter = "brightness(105%)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.filter = "brightness(100%)";

    });

});

/* ===========================================
        PAGE LOADED
===========================================*/

/* ===========================================
        PRELOADER
===========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 1200);

    }

});

console.log("JP FARMS Loaded Successfully 🌿");
/* ===========================================
        EMAILJS CONTACT FORM
===========================================*/

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contact-form");
    
    console.log(contactForm);

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = contactForm.querySelector("button");

        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending...";

        emailjs.sendForm(

            "service_6luj5hm",

            "template_ngowaib",

            contactForm

        )

        .then(function () {

            alert("✅ Thank you! Your message has been sent successfully.");

            contactForm.reset();

            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

        })

        .catch(function (error) {

            console.error("EmailJS Error:", error);

            alert("❌ Failed to send message.\n\nCheck the browser console (F12 → Console) for details.");

            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

        });

    });

});

/* ===========================================
        END OF FILE
===========================================*/

console.log("EmailJS Ready ✅");