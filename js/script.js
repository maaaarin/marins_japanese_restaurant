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

var padding_cards_container = parseFloat(window.getComputedStyle(cards_container).getPropertyValue('padding-left'));

cards_container.addEventListener('touchmove', (e) => {
    x_cards = e.touches[0].clientX;
    if (touched_cards){
        if (x_cards < x_prev_cards) {
            // Right
            if (position_cards !== limit_cards){
                position_cards++;
                let width_card = cards_container.children[position_cards].getBoundingClientRect().x,
                    gap_card = cards_container.getBoundingClientRect().x;
                cards_container.scrollLeft += width_card - gap_card - padding_cards_container;
                cards_slider.children[position_cards-1].classList.remove('active');
                cards_slider.children[position_cards].classList.add('active');
            }
        } else if (x_cards > x_prev_cards) {
            // Left
            if (position_cards !== 0){
                position_cards--;
                let width_card = cards_container.children[position_cards].getBoundingClientRect().x,
                    gap_card = cards_container.getBoundingClientRect().x;
                cards_container.scrollLeft += width_card - gap_card - padding_cards_container;
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

var padding_recommendations_container = parseFloat(window.getComputedStyle(recommendations_container).getPropertyValue('padding-left'));

recommendations_container.addEventListener('touchmove', (e) => {
    x_recommendations = e.touches[0].clientX;
    if (touched_recommendations){
        if (x_recommendations < x_prev_recommendations) {
            // Right
            if (position_recommendations !== limit_recommendations){
                position_recommendations++;
                let width_product = recommendations_container.children[position_recommendations].getBoundingClientRect().x,
                    gap_product = recommendations_container.getBoundingClientRect().x;
                recommendations_container.scrollLeft += width_product - gap_product - padding_recommendations_container;
                recommendations_slider.children[position_recommendations-1].classList.remove('active');
                recommendations_slider.children[position_recommendations].classList.add('active');
            }
        } else if (x_recommendations > x_prev_recommendations) {
            // Left
            if (position_recommendations !== 0){
                position_recommendations--;
                let width_product = recommendations_container.children[position_recommendations].getBoundingClientRect().x,
                    gap_product = recommendations_container.getBoundingClientRect().x;
                recommendations_container.scrollLeft += width_product - gap_product - padding_recommendations_container;
                recommendations_slider.children[position_recommendations+1].classList.remove('active');
                recommendations_slider.children[position_recommendations].classList.add('active');
            }
        }
    }
    touched_recommendations = false;
    }
);

// Recommendations Slider

var latest_container = document.querySelector('.latest-container'),
    latest_slider = document.querySelector('.latest-slider'),
    latest_section = document.querySelector('.latest-section');

var position_latest = 0,
    limit_latest = (latest_container.childElementCount) - 2,
    x_latest,
    x_prev_latest,
    touched_latest;

latest_container.addEventListener('touchstart', (e) => {
    x_prev_latest = e.touches[0].clientX;
    touched_latest = true;
});

var padding_latest_container = parseFloat(window.getComputedStyle(latest_container).getPropertyValue('padding-left'));

latest_container.addEventListener('touchmove', (e) => {
    x_latest = e.touches[0].clientX;
    if (touched_latest){
        if (x_latest < x_prev_latest) {
            // Right
            if (position_latest !== limit_latest){
                position_latest++;
                let width_product = latest_container.children[position_latest].getBoundingClientRect().x,
                    gap_product = latest_container.getBoundingClientRect().x;
                latest_container.scrollLeft += width_product - gap_product - padding_latest_container;
                latest_slider.children[position_latest-1].classList.remove('active');
                latest_slider.children[position_latest].classList.add('active');
            }
        } else if (x_latest > x_prev_latest) {
            // Left
            if (position_latest !== 0){
                position_latest--;
                let width_product = latest_container.children[position_latest].getBoundingClientRect().x,
                    gap_product = latest_container.getBoundingClientRect().x;
                latest_container.scrollLeft += width_product - gap_product - padding_latest_container;
                latest_slider.children[position_latest+1].classList.remove('active');
                latest_slider.children[position_latest].classList.add('active');
            }
        }
    }
    touched_latest = false;
    }
);

// Categories Slider

var categories_container = document.querySelector('.categories-container'),
    categories_section = document.querySelector('.categories-section');

var position_categories = 0,
    limit_categories = (categories_container.childElementCount) - 1,
    x_categories,
    x_prev_categories,
    touched_categories;

categories_container.addEventListener('touchstart', (e) => {
    x_prev_categories = e.touches[0].clientX;
    touched_categories = true;
});

var padding_categories_container = parseFloat(window.getComputedStyle(categories_container).getPropertyValue('padding-left'));

categories_container.addEventListener('touchmove', (e) => {
    x_categories = e.touches[0].clientX;
    if (touched_categories){
        if (x_categories < x_prev_categories) {
            // Right
            if (position_categories !== limit_categories){
                position_categories++;
                let width_category = categories_container.children[position_categories].getBoundingClientRect().x,
                    gap_category = categories_container.getBoundingClientRect().x;
                categories_container.scrollLeft += width_category - gap_category - padding_categories_container;
            }
        } else if (x_categories > x_prev_categories) {
            // Left
            if (position_categories !== 0){
                position_categories--;
                let width_category = categories_container.children[position_categories].getBoundingClientRect().x,
                    gap_category = categories_container.getBoundingClientRect().x;
                categories_container.scrollLeft += width_category - gap_category - padding_categories_container;
            }
        }
    }
    touched_categories = false;
    }
);


// Header on Scroll

if (window.scrollY > 0){
    document.getElementsByTagName('header')[0].classList.add('header-scroll');
} else {
    document.getElementsByTagName('header')[0].classList.remove('header-scroll');
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 0){
        document.getElementsByTagName('header')[0].classList.add('header-scroll');
    } else {
        document.getElementsByTagName('header')[0].classList.remove('header-scroll');
    }
});
