const slides = document.querySelectorAll(".hero>li");

const dots = document.querySelectorAll(".next-main-slider-dots>span");

const interval = 5;

let activeSlide = 0;

const reset = () => {
	dots.forEach((dot) => dot.removeAttribute("class"));
	dots[activeSlide].className = "active-dot";

	slides.forEach((slide) => (slide.style.display = "none"));
	slides[activeSlide].style.display = "block";
};

reset();

setInterval(() => {
	reset();

	if (activeSlide < slides.length - 1) {
		activeSlide++;
	} else {
		activeSlide = 0;
	}
}, interval * 1000);

dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		activeSlide = index;
		reset();
	});
});

// прикольная пюшка меняющая нав при скроле
const checkpoint = 500;
let nav_bg = "trasparent";
let opacity = 1;

window.addEventListener("scroll", () => {
	const currentScroll = window.scrollY;
	if (currentScroll <= checkpoint) {
		opacity = 1 - currentScroll / checkpoint;
	} else {
		opacity = 0;
	}

	if (currentScroll<=280) {
		nav_bg = "transparent";
	}else {
		nav_bg = 'black'
	}

	document.querySelector(".header-nav").style.background = nav_bg;
	// прозрачность картинки на фоне при скроле
	slides.forEach(
		(slide) =>
			(slide.getElementsByTagName("img")[0].style.opacity = opacity)
	);
});

const menu = document.querySelector(".mobile-button");
const submenu = document.querySelector(".items-mobile");

menu.addEventListener("click", (event) => {
	event.preventDefault();

	if (submenu.classList.contains('open')) {
		submenu.classList.remove('open');
	} else {
		submenu.classList.add('open');
	}
});

