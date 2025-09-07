// section 1 
    const cube = document.getElementById('cube');
    let xRotation = 0;
    let yRotation = 0;

    document.addEventListener('keydown', (event) => {
      const key = event.key;

      if (key === "ArrowUp") {
        xRotation += 90;
      } else if (key === "ArrowDown") {
        xRotation -= 90;
      } else if (key === "ArrowLeft") {
        yRotation -= 90;
      } else if (key === "ArrowRight") {
        yRotation += 90;
      }

      cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });

// section 1 



// section 2
  const canvas = document.querySelector('.solar-system .stars');
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.2
    });
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(animateStars);
  }
  animateStars(); 
// section 2

// section 3
const buttons = document.querySelectorAll(".controls button");
const sky = document.querySelector(".sky");
const ground = document.querySelector(".ground");
const leaves = document.querySelector(".leaves");
const fallingContainer = document.querySelector(".falling");
const blobs = document.querySelectorAll(".blob");

function setSeason(season) {
  fallingContainer.innerHTML = "";

  switch (season) {
    case "spring":
      sky.style.background = "linear-gradient(to top, #a0d8ef, #e6f7ff)";
      ground.style.background = "#7cfc00";
      blobs.forEach(b => b.style.background = "pink");
      createFalling("🌸", 15);
      break;

    case "summer":
      sky.style.background = "linear-gradient(to top, #00bfff, #87cefa)";
      ground.style.background = "#228b22";
      blobs.forEach(b => b.style.background = "green");
      break;

    case "autumn":
      sky.style.background = "linear-gradient(to top, #f4a460, #fddca5)";
      ground.style.background = "#cd853f";
      const autumnColors = ["orange", "goldenrod", "brown"];
      blobs.forEach(b => {
        b.style.background = autumnColors[Math.floor(Math.random() * autumnColors.length)];
      });
      createFalling("🍂", 15);
      break;

    case "winter":
      sky.style.background = "linear-gradient(to top, #b0c4de, #f0f8ff)";
      ground.style.background = "#fff";
      blobs.forEach(b => b.style.background = "#dcdcdc");
      createFalling("❄️", 15);
      break;
  }
}


// Create falling emojis
function createFalling(symbol, count) {
  for (let i = 0; i < count; i++) {
    let elem = document.createElement("div");
    elem.textContent = symbol;
    elem.style.position = "absolute";
    elem.style.left = Math.random() * 100 + "vw";
    elem.style.top = "-10vh";
    elem.style.fontSize = Math.random() * 20 + 20 + "px";
    elem.style.animation = `fall ${Math.random() * 3 + 3}s linear infinite`;
    elem.style.animationDelay = Math.random() * 5 + "s";
    fallingContainer.appendChild(elem);
  }
}

// Event listeners
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    setSeason(btn.dataset.season);
  });
});

// Default season
setSeason("spring");

// section 3

// section 4
const clockWrap = document.getElementById("clockWrap");
const clockTime = document.getElementById("clockTime");
const button = document.querySelectorAll(".clock-btn");

const modes = {
  morning: {
    vars: {
      "--sky-start": "#9ad0ff",
      "--sky-end": "#fff6b7",
      "--sun-left": "20%",
      "--sun-top": "30%",
      "--moon-left": "85%",
      "--moon-top": "20%",
      "--cloud-opacity": "1",
      "--stars-opacity": "0",
      "--birds-opacity": "1",
      "--hill-top": "#5fb87f",
      "--hill-bottom": "#2d8b57"
    },
    timeRange: [5, 11],
    label: "Morning"
  },
  afternoon: {
    vars: {
      "--sky-start": "#87ceeb",
      "--sky-end": "#fefbd7",
      "--sun-left": "75%",
      "--sun-top": "25%",
      "--moon-left": "85%",
      "--moon-top": "20%",
      "--cloud-opacity": "1",
      "--stars-opacity": "0",
      "--birds-opacity": "0",
      "--hill-top": "#4faf7a",
      "--hill-bottom": "#267a4f"
    },
    timeRange: [12, 16],
    label: "Afternoon"
  },
  evening: {
    vars: {
      "--sky-start": "#ff9966",
      "--sky-end": "#ff5e62",
      "--sun-left": "50%",
      "--sun-top": "60%",
      "--moon-left": "70%",
      "--moon-top": "25%",
      "--cloud-opacity": "0.6",
      "--stars-opacity": "0.2",
      "--birds-opacity": "0",
      "--hill-top": "#406344",
      "--hill-bottom": "#1e3924"
    },
    timeRange: [17, 19],
    label: "Evening"
  },
  night: {
    vars: {
      "--sky-start": "#0f2027",
      "--sky-end": "#203a43",
      "--sun-left": "20%",
      "--sun-top": "80%",
      "--moon-left": "40%",
      "--moon-top": "25%",
      "--cloud-opacity": "0.2",
      "--stars-opacity": "1",
      "--birds-opacity": "0",
      "--hill-top": "#2d2d3a",
      "--hill-bottom": "#1c1c25"
    },
    timeRange: [20, 23], 
    altRange: [0, 4],
    label: "Night"
  }
};

function randomTime(range, alt = null) {
  let hour;
  if (alt && Math.random() < 0.3) {
    hour = Math.floor(Math.random() * (alt[1] - alt[0] + 1)) + alt[0];
  } else {
    hour = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
  }
  const minute = Math.floor(Math.random() * 60);
  const hh = String(hour).padStart(2, "0");
  const mm = String(minute).padStart(2, "0");
  return `${hh}:${mm}`;
}

function applyMode(modeKey) {
  const mode = modes[modeKey];
  if (!mode) return;

  Object.entries(mode.vars).forEach(([key, val]) => {
    clockWrap.style.setProperty(key, val);
  });

  const sun = clockWrap.querySelector(".clock-sun");
  const moon = clockWrap.querySelector(".clock-moon");
  sun.style.opacity = (modeKey === "night") ? "0" : "1";
  moon.style.opacity = (modeKey === "night" || modeKey === "evening") ? "1" : "0";

  const time = randomTime(mode.timeRange, mode.altRange);
  clockTime.textContent = `${time} — ${mode.label}`;
}

button.forEach(btn => {
  btn.addEventListener("click", () => {
    const setMode = btn.getAttribute("data-set");
    applyMode(setMode);
  });
});

applyMode("morning");

// section 4