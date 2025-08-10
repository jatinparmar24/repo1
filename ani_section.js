// section 1
document.querySelectorAll('.quad-section').forEach(section => {
  const canvas = section.querySelector('.quad-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  canvas.width = section.offsetWidth;
  canvas.height = section.offsetHeight;

  // Resize canvas on window resize
  window.addEventListener('resize', () => {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  });

  section.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 3; i++) {
      particles.push({
        x: x,
        y: y,
        radius: Math.random() * 3 + 1,
        alpha: 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2
      });
    }
  });

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.x += p.dx;
      p.y += p.dy;
      p.alpha -= 0.02;
      if (p.alpha <= 0) particles.splice(i, 1);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,255,255,${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(drawParticles);
  }

  drawParticles();
});

// section 1


// section 2
function toggleMode() {
  const container = document.getElementById("scene-container");
  const timeMsg = document.getElementById("scene-time-message");
  const birds = document.getElementById("scene-birds");

  // Toggle day/night class
  container.classList.toggle("scene-night");

  // Update time message
  const isNight = container.classList.contains("scene-night");
  timeMsg.textContent = isNight ? "Good Night" : "Good Morning";

  // Trigger bird flutter
  birds.classList.add("scene-birds-flutter");
  setTimeout(() => {
    birds.classList.remove("scene-birds-flutter");
  }, 1000);
}

// Generate stars
function generateStars() {
  const starContainer = document.getElementById("scene-stars");
  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.classList.add("scene-star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";
    starContainer.appendChild(star);
  }
}

generateStars();


// section 2

// section 3
document.addEventListener("DOMContentLoaded", () => {
  const rocket = document.getElementById("spaceRocket");
  const capsule = document.getElementById("spaceCapsule");
  const intro = document.getElementById("spaceIntro");
  const hatch = capsule.querySelector(".space-hatch");

  setTimeout(() => {
    rocket.classList.add("center");

    setTimeout(() => {
      capsule.classList.add("drop");

      setTimeout(() => {
        hatch.classList.add("open");

        setTimeout(() => {
          intro.classList.add("show");
        }, 800);

      }, 2000);

    }, 3000);

  }, 5000);
});

// section 3

// section 4
let curtainColors = ['#d86f5b', '#5b8cd8', '#6fd89d'];
let curtainIndex = 0;

function changeCurtainColor() {
  curtainIndex = (curtainIndex + 1) % curtainColors.length;
  document.querySelectorAll('.interior-curtain').forEach(c => {
    c.style.background = curtainColors[curtainIndex];
  });
}

function toggleCupboard() {
  document.querySelector('.interior-door').classList.toggle('open');
  if (document.querySelector('.interior-door').classList.contains('open')) {
    document.querySelector('.interior-door').style.transform = 'translateX(100%)';
  } else {
    document.querySelector('.interior-door').style.transform = 'translateX(0)';
  }
}

function toggleDayNight() {
  document.querySelector('.interior-hero').classList.toggle('night');
}

document.addEventListener("mousemove", (e) => {
  const room = document.querySelector(".interior-room");
  const moveX = (e.clientX / window.innerWidth - 0.5) * 10;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 10;
  room.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

function updateClock() {
  const now = new Date();
  const sec = now.getSeconds() * 6;
  const min = now.getMinutes() * 6 + sec / 60;
  const hour = (now.getHours() % 12) * 30 + min / 12;
  document.querySelector('.interior-second').style.transform = `rotate(${sec}deg)`;
  document.querySelector('.interior-minute').style.transform = `rotate(${min}deg)`;
  document.querySelector('.interior-hour').style.transform = `rotate(${hour}deg)`;
}
setInterval(updateClock, 1000);
updateClock();

// section 4