window.onload = function () {
	SetSlides();

	const imglist = [
		'https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/downloads/2024/lando-2024-mobile-wallpaper.jpg',
		'https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/formula-1/2024/schedule/singapore-grand-prix/post-race/singapore-gp-lando-victory-2023-mobile.jpg',
		'https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/downloads/2024/okx-mp4-livery-singapore-mobile-wallpaper.jpg',
		'https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/downloads/2024/2024-monza-lando-wallpaper-mobile.jpg',
		'https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/downloads/2024/miami-wallpaper-mobile.jpg'
	];
	document.querySelectorAll('.slide').forEach((element, index) => {
		element.style.backgroundImage = `url(${imglist[index]})`;
	});
}

function SetSlides() {
	const list = document.querySelector('.slides');
	const slide = list.querySelectorAll('.slide');
	let listScrollWidth = list.scrollWidth, listClientWidth = list.clientWidth;
	let startX = 0, nowX = 0, endX = 0, listX = 0;

	const onScrollStart = (e) => {
		startX = getClientX(e);
		window.addEventListener('mousemove', onScrollMove);
		window.addEventListener('touchmove', onScrollMove);
		window.addEventListener('mouseup', onScrollEnd);
		window.addEventListener('touchend', onScrollEnd);
	};
	const onScrollMove = (e) => {
		nowX = getClientX(e);
		listX = getTranslateX();
		if ((listX > 0) || (listX < listClientWidth - listScrollWidth)) {
			setTranslateX(listX + nowX / 2 - startX);
		} else setTranslateX(listX + nowX - startX);
	};
	const onScrollEnd = (e) => {
		listX = getTranslateX();
		if (listX > 0) {
			setTranslateX(0);
			slide.forEach(element => element.style.transition = `all 0.3s ease`);
			listX = 0;
		} else if (listX < listClientWidth - listScrollWidth) {
			setTranslateX(listClientWidth - listScrollWidth);
			slide.forEach(element => element.style.transition = `all 0.3s ease`);
			listX = listClientWidth - listScrollWidth;
		}

		window.removeEventListener('mousedown', onScrollStart);
		window.removeEventListener('touchstart', onScrollStart);
		window.removeEventListener('mousemove', onScrollMove);
		window.removeEventListener('touchmove', onScrollMove);
		window.removeEventListener('mouseup', onScrollEnd);
		window.removeEventListener('touchend', onScrollEnd);
		window.removeEventListener('click', onClick);

		setTimeout(() => {
			bindEvents();
			slide.forEach(element => element.style.transition = '');
		}, 300);
	};
	const onClick = (e) => { if (startX - endX !== 0) e.preventDefault(); };
	const getClientX = (e) => e.touches ? e.touches[0].clientX : e.clientX;
	const getTranslateX = () => parseInt(getComputedStyle(slide[0]).transform.split(/[^\-0-9]+/g)[5]);
	const setTranslateX = (x) => slide.forEach(element => element.style.transform = `translateX(${x}px)`);

	const bindEvents = () => {
		list.addEventListener('mousedown', onScrollStart);
		list.addEventListener('touchstart', onScrollStart);
		list.addEventListener('click', onClick);
	};
	bindEvents();

	window.addEventListener('resize', (e) => {
		listScrollWidth = list.scrollWidth, listClientWidth = list.clientWidth;
		if (listX < listClientWidth - listScrollWidth) {
			setTranslateX(listClientWidth - listScrollWidth);
			slide.forEach(element => element.style.transition = `all 0.3s ease`);
			listX = listClientWidth - listScrollWidth;
		}
		setTimeout(() => {
			bindEvents();
			slide.forEach(element => element.style.transition = '');
		}, 300);
	});
}

function SetSlidesSimple() {
	const Slides = document.querySelector('.slides');
	let isDragging = false, isDragged = false;
	let startX;

	Slides.addEventListener('mousedown', (event) => {
		isDragging = true;
		isDragged = false;
		startX = event.clientX;
	});

	document.addEventListener('mousemove', (event) => {
		if (isDragging) {
			const currentX = event.clientX;
			const deltaX = currentX - startX;
			Slides.scrollLeft -= deltaX;
			startX = currentX;
			isDragged = true;
		}
	});

	document.addEventListener('mouseup', () => isDragging = false);

	Slides.addEventListener('click', (event) => {
		if (isDragged) { event.preventDefault(); return; }
	});

	Slides.addEventListener('wheel', (event) => {
		event.preventDefault();
		Slides.scrollBy(event.deltaY, 0);
	});
}