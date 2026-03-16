// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

// Form submission handling
const form = document.querySelector(".contact-form");
if (form) {
	form.addEventListener("submit", async function (e) {
		e.preventDefault();
		const data = new FormData(form);
		const response = await fetch(form.action, {
			method: form.method,
			body: data,
			headers: {
				Accept: "application/json",
			},
		});
		if (response.ok) {
			alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
			form.reset();
		} else {
			alert("Có lỗi xảy ra, vui lòng thử lại sau.");
		}
	});
}

document.addEventListener("DOMContentLoaded", function () {
	// Initialize Swiper
	const swiperElement = document.querySelector(".featured-product-slider");
	if (swiperElement) {
		const swiper = new Swiper(".featured-product-slider", {
			// Optional parameters
			loop: true,
			spaceBetween: 30,
			grabCursor: true,

			// Autoplay
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},

			// Responsive breakpoints
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				// when window width is >= 768px
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				// when window width is >= 1024px
				1024: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

			// If we need pagination
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}
});
