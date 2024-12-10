window.onload = function () {

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