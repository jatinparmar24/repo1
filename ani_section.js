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