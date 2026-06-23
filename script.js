const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  nav.classList.toggle('max-h-96');
});

document.querySelectorAll('img').forEach(img => {
  img.onerror = function () {
    this.src = '대체_이미지_경로.png';
    this.onerror = null;
  };
});

const track = document.querySelector('#marquee-track');
const group = document.querySelector('#marquee-track>div');

while (track.offsetWidth < window.innerWidth * 2) {
    track.appendChild(group.cloneNode(true));
}

const distance = group.offsetWidth;

const marquee = gsap.to(track, {
    x: `-=${distance}`,
    duration: 12,
    ease: "none",
    repeat: -1,
    modifiers: {
        x: x => `${parseFloat(x) % distance}px`
    }
});