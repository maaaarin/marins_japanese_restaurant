"use strict";

// Slider functions

function sliderScroll(container, position) {
	let padding_container = parseFloat(
			window.getComputedStyle(container).getPropertyValue("padding-left")
		),
		width_child = container.children[position].getBoundingClientRect().x;
	container.scrollLeft += width_child - padding_container;
}

function sliderBar(slider, position) {
	for (let slide of slider.children) {
		if (slide.classList.contains("active")) {
			slide.classList.remove("active");
			break;
		}
	}
	slider.children[position].classList.add("active");
}

function slider(container, limit, position, slider) {
	var x,
		x_prev,
		touched,
		limit_slide = sliderResponsive(limit);

	// Touch
	container.addEventListener("touchstart", (e) => {
		x_prev = e.touches[0].clientX;
		touched = true;
	});

	// Slide
	container.addEventListener("touchmove", (e) => {
		x = e.touches[0].clientX;
		if (touched) {
			if (x < x_prev) {
				// Right
				if (position !== limit_slide) {
					position++;
					sliderScroll(container, position);
					if (slider) {
						sliderBar(slider, position);
					}
				}
			} else if (x > x_prev) {
				// Left
				if (position !== 0) {
					position--;
					sliderScroll(container, position);
					if (slider) {
						sliderBar(slider, position);
					}
				}
			}
		}
		touched = false;
	});

	// On Resize
	window.addEventListener("resize", () => {
		sliderScroll(container, 0);
		if (slider) {
			sliderBar(slider, 0);
		}
		position = 0;
		limit_slide = sliderResponsive(limit);
	});
}

// Categories Slider

var categories_container = document.querySelector(".categories-container"),
	limit_categories = categories_container.childElementCount - 1;

slider(categories_container, limit_categories, 0, false);

// Cards Slider

var cards_container = document.querySelector(".cards-container"),
	cards_slider = document.querySelector(".cards-slider"),
	limit_cards = cards_container.childElementCount - 1;

slider(cards_container, limit_cards, 0, cards_slider);

// Recommendations Slider

var recommendations_container = document.querySelector(
		".recommendations-container"
	),
	recommendations_slider = document.querySelector(".recommendations-slider"),
	limit_recommendations = recommendations_container.childElementCount - 2;

slider(
	recommendations_container,
	limit_recommendations,
	0,
	recommendations_slider
);

// Latest Slider

var latest_container = document.querySelector(".latest-container"),
	latest_slider = document.querySelector(".latest-slider"),
	limit_latest = latest_container.childElementCount - 2;

slider(latest_container, limit_latest, 0, latest_slider);

// Sliders Responsive

function sliderResponsive(limit) {
	if (window.screen.width < 768) {
		return limit;
	} else if (window.screen.width >= 768) {
		return limit - 1;
	} else if (window.screen.width >= 992) {
		return limit - 2;
	}
}

// Header on Scroll

if (window.scrollY > 0) {
	document.getElementsByTagName("header")[0].classList.add("header-scroll");
} else {
	document.getElementsByTagName("header")[0].classList.remove("header-scroll");
}

window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		document.getElementsByTagName("header")[0].classList.add("header-scroll");
	} else {
		document
			.getElementsByTagName("header")[0]
			.classList.remove("header-scroll");
	}
});
