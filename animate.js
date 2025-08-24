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

// section 4
const showOptionsBtn = document.getElementById("showOptionsBtn");
const navDropdown = document.getElementById("navDropdown");
const optionsContainer = document.getElementById("optionsContainer");
const detailsBox = document.getElementById("detailsBox");

const dropdownData = {
  courses: {
    "Web Development": "Learn HTML, CSS, JavaScript, and React to build modern websites.",
    "Data Science": "Master Python, Machine Learning, and Data Analysis.",
    "UI/UX": "Design engaging and user-friendly interfaces."
  },
  services: {
    "Consulting": "We provide business and tech consulting solutions.",
    "Design": "Creative design services for brands and startups.",
    "Marketing": "Digital marketing strategies to grow your business."
  },
  products: {
    "Laptops": "High-performance laptops for work and gaming.",
    "Mobiles": "Latest smartphones with advanced features.",
    "Accessories": "Headphones, keyboards, and other gadgets."
  }
};

showOptionsBtn.addEventListener("click", () => {
  const value = navDropdown.value;
  optionsContainer.innerHTML = "";
  detailsBox.innerHTML = "";
  detailsBox.classList.remove("show"); 

  if (dropdownData[value]) {
    Object.keys(dropdownData[value]).forEach(item => {
      let btn = document.createElement("button"); 
      btn.textContent = item;

      btn.addEventListener("click", () => {
        detailsBox.innerHTML = `<p>${dropdownData[value][item]}</p>`;
        detailsBox.classList.add("show");
      });

      optionsContainer.appendChild(btn);
    });
  } else {
    optionsContainer.innerHTML = "<p>Please select a category.</p>";
  }
});


// section 4

// section 5
  function showMessage(card, boxNumber) {
    document.querySelectorAll(".box-card").forEach(box => box.classList.remove("active"));
    card.classList.add("active");
    launchConfetti();
  }

  function closeMessage(event) {
    event.stopPropagation(); 
    const card = event.target.closest(".box-card");
    card.classList.remove("active");
  }

  function launchConfetti() {
    const confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-30px";
    confetti.style.fontSize = "24px";
    confetti.style.animation = "fall 3s linear forwards";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fall {
      to { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

// section 5