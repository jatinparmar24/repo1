// section 1
const particlesContainer = document.querySelector('.particles');

for (let i = 0; i < 40; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = 5 + Math.random() * 10 + 's';
  p.style.animationDelay = Math.random() * 10 + 's';
  particlesContainer.appendChild(p);
}

document.querySelectorAll('.corner').forEach(corner => {
  corner.addEventListener('mousemove', (e) => {
    const rect = corner.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    corner.style.transform = `translate(${x*15}px, ${y*15}px) scale(1.1)`;
  });
  corner.addEventListener('mouseleave', () => {
    corner.style.transform = 'translate(0,0) scale(1)';
  });
});

setInterval(() => {
  const corners = document.querySelectorAll('.corner');
  const randomCorner = corners[Math.floor(Math.random() * corners.length)];
  randomCorner.classList.add('idle-anim');
  setTimeout(() => randomCorner.classList.remove('idle-anim'), 1000);
}, 4000);

// section 1

// section 3
// JS for Dropdown Toggle
document.querySelectorAll(".dd-dropdown .dd-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    const parent = this.parentElement;
    parent.classList.toggle("open");
  });
});

// section 3