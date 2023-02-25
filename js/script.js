'use strict'

// Cards Slider

var cards_container = document.querySelector('.cards-container'),
    cards_slider = document.querySelector('.cards-slider'),
    cards_section = document.querySelector('.cards-section');

var position_cards = 0,
    limit_cards = (cards_container.childElementCount) - 1,
    x_cards,
    x_prev_cards,
    touched_cards;

cards_container.addEventListener('touchstart', (e) => {
    x_prev_cards = e.touches[0].clientX;
    touched_cards = true;
});

cards_container.addEventListener('touchmove', (e) => {
    x_cards = e.touches[0].clientX;
    if (touched_cards){
        if (x_cards < x_prev_cards) {
            // Right
            if (position_cards !== limit_cards){
                position_cards++;
                let width_card = cards_container.children[position_cards].getBoundingClientRect().x,
                    gap_card = cards_container.getBoundingClientRect().x;
                cards_container.scrollLeft += width_card - gap_card;
                cards_slider.children[position_cards-1].classList.remove('active');
                cards_slider.children[position_cards].classList.add('active');
            }
        } else if (x_cards > x_prev_cards) {
            // Left
            if (position_cards !== 0){
                position_cards--;
                let width_card = cards_container.children[position_cards].getBoundingClientRect().x,
                    gap_card = cards_container.getBoundingClientRect().x;
                cards_container.scrollLeft += width_card - gap_card;
                cards_slider.children[position_cards+1].classList.remove('active');
                cards_slider.children[position_cards].classList.add('active');
            }
        }
    }
    touched_cards = false;
    }
);

// Recommendations Slider

var recommendations_container = document.querySelector('.recommendations-container'),
    recommendations_slider = document.querySelector('.recommendations-slider'),
    recommendations_section = document.querySelector('.recommendations-section');

var position_recommendations = 0,
    limit_recommendations = (recommendations_container.childElementCount) - 2,
    x_recommendations,
    x_prev_recommendations,
    touched_recommendations;

recommendations_container.addEventListener('touchstart', (e) => {
    x_prev_recommendations = e.touches[0].clientX;
    touched_recommendations = true;
});

recommendations_container.addEventListener('touchmove', (e) => {
    x_recommendations = e.touches[0].clientX;
    if (touched_recommendations){
        if (x_recommendations < x_prev_recommendations) {
            // Right
            if (position_recommendations !== limit_recommendations){
                position_recommendations++;
                let width_product = recommendations_container.children[position_recommendations].getBoundingClientRect().x,
                    gap_product = recommendations_container.getBoundingClientRect().x;
                recommendations_container.scrollLeft += width_product - gap_product;
                recommendations_slider.children[position_recommendations-1].classList.remove('active');
                recommendations_slider.children[position_recommendations].classList.add('active');
            }
        } else if (x_recommendations > x_prev_recommendations) {
            // Left
            if (position_recommendations !== 0){
                position_recommendations--;
                let width_product = recommendations_container.children[position_recommendations].getBoundingClientRect().x,
                    gap_product = recommendations_container.getBoundingClientRect().x;
                recommendations_container.scrollLeft += width_product - gap_product;
                recommendations_slider.children[position_recommendations+1].classList.remove('active');
                recommendations_slider.children[position_recommendations].classList.add('active');
            }
        }
    }
    touched_recommendations = false;
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
