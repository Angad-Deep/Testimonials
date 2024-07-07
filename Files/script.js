var menuOpen = false;
var testimonialsOpen = false;
var internOpen = false;

function toggleMenu() {
    var menu = document.getElementById("more");
    var testimonialsContainer = document.querySelector('.testimonials-container');
    var mq649 = window.matchMedia('(min-width: 380px) and (max-width: 649px)');

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        testimonialsContainer.style.marginTop = "0";
        menuOpen = false;
    } else {
        menu.style.display = "flex";
        document.querySelector('.button').style.display = "none";
        menuOpen = true;
    }
    updateContainerMargins();
    updateFooterMargin();
}

function moreTestimonials() {
    var menu = document.getElementById("more-testimonials");
    var testimonialsContainer = document.querySelector('.testimonials-container');
    var internContainer = document.querySelector('.intern-container');
    var mq649 = window.matchMedia('(min-width: 380px) and (max-width: 649px)');

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        testimonialsContainer.style.marginTop = menuOpen ? "292vh" : "0";
        testimonialsOpen = false;
    } else {
        menu.style.display = "flex";
        document.querySelector('.testimonials-button').style.display = "none";
        testimonialsOpen = true;
    }
    updateContainerMargins();
    updateFooterMargin();
}

function moreInternExperiences() {
    var menu = document.getElementById("more-intern-exp");
    var internContainer = document.querySelector('.intern-container');

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        internContainer.style.marginTop = testimonialsOpen ? "575vh" : "0";
        internOpen = false;
    } else {
        menu.style.display = "flex";
        document.querySelector('.intern-exp-button').style.display = "none";
        internOpen = true;
    }
    updateContainerMargins();
    updateFooterMargin();
}

function updateFooterMargin() {
    var footerContainer = document.querySelector('.footer-1');
    var mq800to1100 = window.matchMedia('(min-width: 800px) and (max-width: 1100px)');
    var mq1101to1450 = window.matchMedia('(min-width: 1101px) and (max-width: 1450px)');
    var mq649 = window.matchMedia('(min-width: 380px) and (max-width: 649px)');
    
    footerContainer.style.marginTop = "0";

    if (menuOpen) {
        if (mq649.matches) {
            footerContainer.style.marginTop = "0";
        } else {
            footerContainer.style.marginTop = "0";
        }
    }

    if (testimonialsOpen) {
        if (mq649.matches) {
            footerContainer.style.marginTop = parseInt(footerContainer.style.marginTop) + 0 + "vh";
        } else {
            footerContainer.style.marginTop = parseInt(footerContainer.style.marginTop) + 0 + "vh";
        }
    }

    if (internOpen) {
        if (mq800to1100.matches) {
            footerContainer.style.marginTop = parseInt(footerContainer.style.marginTop) + 590 + "vh";
        } else if (mq1101to1450.matches) {
            footerContainer.style.marginTop = parseInt(footerContainer.style.marginTop) + 500 + "vh";
        } else {
            footerContainer.style.marginTop = parseInt(footerContainer.style.marginTop) + 942 + "vh";
        }
    }
}

function updateContainerMargins() {
    var testimonialsContainer = document.querySelector('.testimonials-container');
    var internContainer = document.querySelector('.intern-container');
    var mq649 = window.matchMedia('(min-width: 380px) and (max-width: 649px)');
    var mq800to1100 = window.matchMedia('(min-width: 800px) and (max-width: 1100px)');
    var mq1101to1450 = window.matchMedia('(min-width: 1101px) and (max-width: 1450px)');
    
    internContainer.style.marginTop = "0";

    if (menuOpen) {
        if (mq649.matches) {
            testimonialsContainer.style.marginTop += "660vh";
        } else if (mq800to1100.matches){
            testimonialsContainer.style.marginTop = "235vh";
        } else {
            testimonialsContainer.style.marginTop = "292vh";
        }
    }

    if (testimonialsOpen) {
        if (mq649.matches) {
            internContainer.style.marginTop = "1165vh";
        } else if (mq800to1100.matches) {
            internContainer.style.marginTop = "475vh";
        } else if (mq1101to1450.matches) {
            internContainer.style.marginTop = "570vh";
        } else {
            internContainer.style.marginTop = "570vh";
        }
    }
}

window.matchMedia('(min-width: 800px) and (max-width: 1100px)').addEventListener('change', updateFooterMargin);
window.matchMedia('(min-width: 1101px) and (max-width: 1450px)').addEventListener('change', updateFooterMargin);
window.matchMedia('(min-width: 380px) and (max-width: 649px)').addEventListener('change', updateFooterMargin);

document.addEventListener("DOMContentLoaded", function() {
    var BackToTop = document.getElementById("back-to-top");

    if (BackToTop) {
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                BackToTop.style.display = "block";
            } else {
                BackToTop.style.display = "none";
            }
        };

        BackToTop.addEventListener("click", function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    } else {
        console.error("Element with ID 'back-to-top' not found.");
    }
});

let isPast25vh = false;
let menuIconTimeout;
let menuIconPosition = 'absolute';

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const headerImg = document.getElementById('header-img');
    const menuIcon = document.getElementById('menuIcon');
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth <= 649;

    const scrollRangeMobile = {
        min: 8 * viewportHeight / 100,
        max: 18 * viewportHeight / 100
    };

    const scrollRangeDesktop = {
        min: 15 * viewportHeight / 100,
        max: 18 * viewportHeight / 100
    };

    function toggleMenuIcon(display, delay) {
        clearTimeout(menuIconTimeout);
        setTimeout(() => {
            menuIcon.style.opacity = display ? '1' : '0';
        }, delay);
    }

    if ((isMobile && scrollPosition >= scrollRangeMobile.min && scrollPosition <= scrollRangeMobile.max) ||
        (!isMobile && scrollPosition >= scrollRangeDesktop.min && scrollPosition <= scrollRangeDesktop.max)) {
        header.classList.remove('initial-header', 'new-header');
        header.style.top = '-100px';
        menuIcon.style.position = 'absolute'; 
        menuIcon.style.top = '0px'; 
        menuIcon.style.marginRight = '0px';
        toggleMenuIcon(false, 0);
        isPast25vh = false;
    } else if ((isMobile && scrollPosition >= scrollRangeMobile.max) ||
               (!isMobile && scrollPosition >= scrollRangeDesktop.max)) {
        header.classList.remove('initial-header');
        header.classList.add('new-header');
        header.style.top = '0';
        headerImg.title = "Edulrns";
        menuIcon.style.position = 'fixed'; 
        menuIcon.style.marginTop = '20px'; 
        menuIcon.style.marginRight = '20px';
        toggleMenuIcon(true, 500);
        isPast25vh = true;
    } else if ((isMobile && scrollPosition <= scrollRangeMobile.min) ||
               (!isMobile && scrollPosition <= scrollRangeDesktop.min)) {
        header.classList.remove('new-header');
        header.classList.add('initial-header');
        header.style.top = '0';
        headerImg.title = "Luneblaze";
        menuIcon.style.position = 'absolute';
        menuIcon.style.top = '0px';
        menuIcon.style.marginRight = '0px';
        toggleMenuIcon(true, 0);
    } else {
        header.classList.remove('new-header', 'initial-header');
        header.style.top = '-100px';
        menuIcon.style.position = 'absolute'; 
        menuIcon.style.top = '-100px'; 
        menuIcon.style.marginRight = '0px';

        toggleMenuIcon(false, 0);
        isPast25vh = false;
    }
});
