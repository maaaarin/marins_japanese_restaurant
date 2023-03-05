"use strict";

/* Slider Functions */

// Slider Scroll
function sliderScroll(container, position) {
	let padding_container = parseFloat(
			window.getComputedStyle(container).getPropertyValue("padding-left")
		),
		width_child = container.children[position].getBoundingClientRect().x;
	container.scrollLeft += width_child - padding_container;
}

// Slider Bar
function sliderBar(slider, position) {
	for (let slide of slider.children) {
		if (slide.classList.contains("active")) {
			slide.classList.remove("active");
			break;
		}
	}
	slider.children[position].classList.add("active");
}

// Slider Responsive
function sliderResponsive(limit) {
	if (window.screen.width < 768) {
		return limit;
	} else if (window.screen.width >= 768 && window.screen.width < 992) {
		return limit - 1;
	} else if (window.screen.width >= 992) {
		return limit - 2;
	}
}

// Slide Controls
function sliderControls(
	next_slide,
	prev_slide,
	slider,
	container,
	position,
	limit
) {
	var limit_slide = sliderResponsive(limit);

	next_slide.addEventListener("click", () => {
		if (position !== limit_slide) {
			position++;
			sliderScroll(container, position);
		}
	});

	prev_slide.addEventListener("click", () => {
		if (position !== 0) {
			position--;
			sliderScroll(container, position);
		}
	});

	// On Resize
	window.addEventListener("resize", () => {
		position = 0;
		sliderScroll(container, position);
		if (slider) {
			sliderBar(slider, position);
		}
		limit_slide = sliderResponsive(limit);
	});
}

// Slider
function slider(
	container,
	limit,
	hasSlider,
	slider,
	hasControls,
	next_slide,
	prev_slide
) {
	let x,
		x_prev,
		touched,
		limit_slide = sliderResponsive(limit),
		position = 0;

	// Touch
	container.addEventListener("touchstart", (e) => {
		x_prev = e.touches[0].clientX;
		if (window.screen.width < 768) {
			touched = true;
		} else if (window.screen.width >= 768 && window.screen.width < 992) {
			touched = true;
		} else if (window.screen.width >= 992) {
			touched = false;
		}
	});

	// Slide
	container.addEventListener("touchmove", (e) => {
		x = e.touches[0].clientX;
		if (touched) {
			if (x < x_prev) {
				// Right or Next
				if (position !== limit_slide) {
					position++;
					sliderScroll(container, position);
					if (hasSlider) {
						sliderBar(slider, position);
					}
				}
			} else if (x > x_prev) {
				// Left or Prev
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
		position = 0;
		sliderScroll(container, position);
		if (slider) {
			sliderBar(slider, position);
		}
		limit_slide = sliderResponsive(limit);
	});

	// With Controls
	if (hasControls) {
		sliderControls(next_slide, prev_slide, slider, container, position, limit);
	}
}

// Categories Slider

var categories_container = document.querySelector(".categories-container"),
	limit_categories = categories_container.childElementCount - 1;

slider(categories_container, limit_categories);

// Cards Slider

var cards_container = document.querySelector(".cards-container"),
	cards_slider = document.querySelector(".cards-slider"),
	limit_cards = cards_container.childElementCount - 1;

slider(cards_container, limit_cards, true, cards_slider);

// Recommendations Slider

var recommendations_container = document.querySelector(
		".recommendations-container"
	),
	recommendations_slider = document.querySelector(".recommendations-slider"),
	limit_recommendations = recommendations_container.childElementCount - 2,
	recommendation_prev_slide = document.querySelector(".recommendation-prev"),
	recommendation_next_slide = document.querySelector(".recommendation-next");

slider(
	recommendations_container,
	limit_recommendations,
	true,
	recommendations_slider,
	true,
	recommendation_next_slide,
	recommendation_prev_slide
);

// Latest Slider

var latest_container = document.querySelector(".latest-container"),
	latest_slider = document.querySelector(".latest-slider"),
	limit_latest = latest_container.childElementCount - 2,
	latest_prev_slide = document.querySelector(".latest-prev"),
	latest_next_slide = document.querySelector(".latest-next");

slider(
	latest_container,
	limit_latest,
	true,
	latest_slider,
	true,
	latest_next_slide,
	latest_prev_slide
);

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
