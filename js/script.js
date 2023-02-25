'use strict'

// cards Slider

var cards_container = document.querySelector('.cards-container'),
    cards_slider = document.querySelector('.cards-slider'),
    cards_section = document.querySelector('.cards-section');

var position = 0,
    limit = (cards_container.childElementCount) - 1,
    x,
    x_prev,
    touched;

cards_container.addEventListener('touchstart', (e) => {
    x_prev = e.touches[0].clientX;
    touched = true;
});

cards_container.addEventListener('touchmove', (e) => {
    x = e.touches[0].clientX;
    if (touched){
        if (x < x_prev) {
            // Right
            if (position !== limit){
                position++;
                let width_card = cards_container.children[position].getBoundingClientRect().x,
                    gap_card = cards_container.getBoundingClientRect().x;
                cards_container.scrollLeft += width_card - gap_card;
                cards_slider.children[position-1].classList.remove('active');
                cards_slider.children[position].classList.add('active');
                console.log(position)
            }
        } else if (x > x_prev) {
            // Left
            if (position !== 0){
                position--;
                let width_card = cards_container.children[position].getBoundingClientRect().x,
                    gap_card = cards_container.getBoundingClientRect().x;
                cards_container.scrollLeft += width_card - gap_card;
                cards_slider.children[position+1].classList.remove('active');
                cards_slider.children[position].classList.add('active');
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
