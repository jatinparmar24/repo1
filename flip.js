// section 1
document.querySelector(".hotel-hamburger").addEventListener("click", () => {
  document.querySelector(".hotel-nav-links").classList.toggle("active");
});

function showPopup(side) {
  document.getElementById(`popup-${side}`).classList.add("active");
}
function closePopup(side) {
  document.getElementById(`popup-${side}`).classList.remove("active");
}

// section 1


// section 2
const bubblesContainer = document.querySelector('.under-bubbles');

for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 20 + 10 + 'px';
  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.left = Math.random() * 100 + '%';
  bubble.style.animationDuration = Math.random() * 5 + 5 + 's';
  bubble.style.animationDelay = Math.random() * 5 + 's';
  bubblesContainer.appendChild(bubble);
}

// section 2
