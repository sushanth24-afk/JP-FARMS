/* ===========================================
            JP FARMS ANIMATIONS
===========================================*/

/* Fade In on Scroll */

const animatedElements = document.querySelectorAll(

".product-card, .about-image, .about-content, .why-card, .process-card, .gallery-grid img, .testimonial-card, .contact-left, .contact-right"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
            entry.target.style.transition="all .8s ease";

        }

    });

},{
    threshold:0.15
});

animatedElements.forEach(element=>{

    element.style.opacity="0";
    element.style.transform="translateY(50px)";

    observer.observe(element);

});

/* ===========================================
        HERO PARALLAX
===========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    let value = window.scrollY;

    if(hero){

        hero.style.backgroundPositionY = value * 0.4 + "px";

    }

});

/* ===========================================
        GALLERY ZOOM
===========================================*/

document.querySelectorAll(".gallery-grid img").forEach(image=>{

    image.addEventListener("click",()=>{

        image.classList.toggle("zoom");

    });

});

/* ===========================================
        COUNTER (Future Ready)
===========================================*/

function animateCounter(element,target){

    let count=0;

    const speed=Math.ceil(target/100);

    const update=()=>{

        count+=speed;

        if(count<target){

            element.innerText=count;

            requestAnimationFrame(update);

        }else{

            element.innerText=target;

        }

    };

    update();

}

/* ===========================================
        BUTTON GLOW
===========================================*/

document.querySelectorAll(".btn-primary").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 15px 35px rgba(212,160,23,.45)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="none";

    });

});

/* ===========================================
        FLOATING WHATSAPP
===========================================*/

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate(

[
{
transform:"translateY(0)"
},
{
transform:"translateY(-8px)"
},
{
transform:"translateY(0)"
}
],
{
duration:1800
}

);

},1800);

}

/* ===========================================
        PAGE LOADED
===========================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

console.log("Animations Loaded ✨");