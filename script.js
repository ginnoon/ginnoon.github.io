window.onload = function () {
	const scrollableContainer = document.querySelector('.slides');
	const slides = document.querySelectorAll('.slide');
	const slideWidth = 100; // 각 슬라이드의 너비 (px 단위)
	
	let isDragging = false;
	let startX;
	
	// 각 슬라이드의 너비 설정
	slides.forEach(slide => {
		slide.style.width = `${slideWidth}px`;
	});
	
	scrollableContainer.addEventListener('mousedown', (event) => {
		isDragging = true;
		startX = event.clientX;
	});
	
	document.addEventListener('mousemove', (event) => {
		if (isDragging) {
			const currentX = event.clientX;
			const deltaX = currentX - startX;
			scrollableContainer.scrollLeft -= deltaX;
			startX = currentX;
		}
	});
	
	document.addEventListener('mouseup', () => {
		isDragging = false;
	});
}