window.onload = function () {
	var swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		spaceBetween: 8,
		grabCursor : true,
	});

	const imglist = [
		'https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/downloads/2024/lando-2024-desktop-wallpaper.jpg',
		'https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/formula-1/2024/schedule/singapore-grand-prix/post-race/singapore-gp-lando-victory-2023-desktop.jpg',
		'https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/downloads/2024/2024-monza-lando-wallpaper-desktop.jpg',
		'https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/downloads/2024/miami-wallpaper-desktop.jpg'
	];
	document.querySelectorAll('.swiper-slide').forEach((element, index) => {
		element.style.backgroundImage = `url(${imglist[index]})`;
	});

	document.querySelectorAll('button.style2').forEach(element => {
		element.addEventListener('click', (event) => {
			event.target.classList.add('active');
			setTimeout(() => event.target.classList.remove('active'), 200);
		});
		const effects = document.createElement('div');
		effects.classList.add('functional', 'effects');
		element.appendChild(effects);
	});
}