window.onload = function () {
	const Slides = document.querySelector('.slides');
	let isDragging = false;
	let startX;

	Slides.addEventListener('mousedown', (event) => {
		isDragging = true;
		startX = event.clientX;
	});

	document.addEventListener('mousemove', (event) => {
		if (isDragging) {
			const currentX = event.clientX;
			const deltaX = currentX - startX;
			Slides.scrollLeft -= deltaX;
			startX = currentX;
		}
	});

	document.addEventListener('mouseup', () => isDragging = false);

	Slides.addEventListener('wheel', (e) => {
		e.preventDefault();
		Slides.scrollBy(e.deltaY, 0);
	});

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