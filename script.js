window.paceOptions = {
	className: 'my-custom-class'
};

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
		grabCursor: true,
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

	document.querySelectorAll('button, a[button]').forEach(element => {
		element.addEventListener('click', (event) => {
			const target = event.currentTarget;
			target.classList.add('active');
			setTimeout(() => target.classList.remove('active'), 100);
		});
		const effects = document.createElement('div');
		effects.classList.add('functional', 'effects');
		element.appendChild(effects);
	});

	document.querySelectorAll('button.toggle, a[button].toggle').forEach(element => {
		element.addEventListener('click', (event) => {
			const target = event.currentTarget;
			const eventOn = new Event('on'), eventOff = new Event('off');
			if (target.classList.toggle('on')) target.dispatchEvent(eventOn);
			else target.dispatchEvent(eventOff);
		});
	});

	document.querySelectorAll('button[icon], a[button][icon]').forEach(element => {
		const icon = document.createElement('span');
		icon.classList.add('material-symbols-outlined');
		icon.innerText = element.getAttribute('icon');
		element.prepend(icon);
	});


	const cbs = document.querySelectorAll('checkbox');

	cbs.forEach(e => {
		const label = document.createElement('label');
		label.textContent = e.textContent;

		const input = document.createElement('input');
		input.type = 'checkbox';

		const circle = document.createElement('div');
		circle.classList.add('circle');

		const checkboxBg = document.createElement('div');
		checkboxBg.classList.add('checkboxBg');

		const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.setAttribute('focusable', 'false');
		svg.setAttribute('viewBox', '0 0 24 24');
		svg.setAttribute('aria-hidden', 'true');
		svg.classList.add('checkboxCheckmark');

		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('fill', 'none');
		path.setAttribute('d', 'M1.73,12.91 8.1,19.28 22.79,4.59');
		path.classList.add('checkboxPath');

		svg.appendChild(path);
		checkboxBg.appendChild(svg);

		label.appendChild(input);
		label.appendChild(circle);
		label.appendChild(checkboxBg);

		// e.appendChild(label);
		e.parentNode.replaceChild(label, e);
	});
};