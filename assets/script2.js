

// прикольная пюшка меняющая нав при скроле
const checkpoint = 500;
let nav_bg = "trasparent";
let opacity = 1;

window.addEventListener("scroll", () => {
	const currentScroll = window.scrollY;
	if (currentScroll <= checkpoint) {
		nav_bg = "transparent";
		opacity = 1 - currentScroll / checkpoint;
	} else {
		nav_bg = "black";
		opacity = 0;
	}

	document.querySelector(".header-nav").style.background = nav_bg;
	// прозрачность картинки на фоне при скроле
	// slides.forEach(
	// 	(slide) =>
	// 		(slide.getElementsByTagName("img")[0].style.opacity = opacity)
	// );
});

const menu = document.querySelector(".mobile-button");
const submenu = document.querySelector(".items-mobile");

let is_open = 0;

menu.addEventListener("click", (event) => {
	event.preventDefault();

	if (!is_open) {
		submenu.style.display = "block";
		is_open = 1;
	} else {
		submenu.style.display = "none";
		is_open = 0;
	}
});


//Tabs


const tabs_titles = document.querySelectorAll('.tabs-titles>li');
const tabs = document.querySelectorAll('.tabs>div');
let active_tab = 0;
if (tabs_titles.length > 0) {

    const resetTabs = () => {
        tabs_titles.forEach((tab_t, index) => {
            tabs[index].style.display = 'none';
            tab_t.classList.remove('active-tab');
        });
    };
    
    resetTabs();
    tabs[active_tab].style.display = 'block';
    tabs_titles[active_tab].classList.add('active-tab');
    
    tabs_titles.forEach((tab_t, index) => {
        tab_t.addEventListener('click', (event) => {
            event.preventDefault();
            active_tab = index;
            resetTabs();
            tabs[index].style.display = 'block';
            tab_t.classList.add('active-tab');
        });
    });
}



