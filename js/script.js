'use strict'

// Header on Scroll

window.addEventListener('scroll', () => {
    if (window.scrollY > 0){
        document.getElementsByTagName('header')[0].classList.add('header-scroll');
    } else {
        document.getElementsByTagName('header')[0].classList.remove('header-scroll');
    }
});
