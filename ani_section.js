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