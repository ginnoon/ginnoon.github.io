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
}