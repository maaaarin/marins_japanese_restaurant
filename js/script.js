'use strict'

// Apps Slider

var apps_container = document.querySelector('.apps-container'),
    apps_slider = document.querySelector('.apps-slider'),
    apps_section = document.querySelector('.apps-section');

var position = 0,
    limit = (apps_container.childElementCount) - 1,
    x,
    x_prev,
    touched;

apps_container.addEventListener('touchstart', (e) => {
    x_prev = e.touches[0].clientX;
    touched = true;
});

apps_container.addEventListener('touchmove', (e) => {
    x = e.touches[0].clientX;
    if (touched){
        if (x < x_prev) {
            // Derecha
            if (position !== limit){
                position++;
                let width_app = apps_container.children[position].getBoundingClientRect().x,
                    gap_app = apps_container.getBoundingClientRect().x;
                apps_container.scrollLeft += width_app - gap_app;
                apps_slider.children[position-1].classList.remove('active');
                apps_slider.children[position].classList.add('active');
                console.log(position)
            }
        } else if (x > x_prev) {
            // Izquierda
            if (position !== 0){
                position--;
                let width_app = apps_container.children[position].getBoundingClientRect().x,
                    gap_app = apps_container.getBoundingClientRect().x;
                apps_container.scrollLeft += width_app - gap_app;
                apps_slider.children[position+1].classList.remove('active');
                apps_slider.children[position].classList.add('active');
                console.log(position)
            }
        }
    }
    touched = false;
    }
);


// Header on Scroll

window.addEventListener('scroll', () => {
    if (window.scrollY > 0){
        document.getElementsByTagName('header')[0].classList.add('header-scroll');
    } else {
        document.getElementsByTagName('header')[0].classList.remove('header-scroll');
    }
});
