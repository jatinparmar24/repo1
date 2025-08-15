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

// section 3
const SEASONS = [
  {
    key: "season-spring",
    name: "Spring",
    emoji: "🌸",
    title: "Spring Blossoms",
    desc: "Gentle warmth, fresh air, and petals dancing in the breeze as nature wakes up.",
    time: "March — May",
    acts: "Festivals, nature walks",
    vibe: "Fresh, floral, breezy"
  },
  {
    key: "season-summer",
    name: "Summer",
    emoji: "☀️",
    title: "Summer Bliss",
    desc: "Sunlit days, cool ripples on the water, and birds gliding across clear skies.",
    time: "June — August",
    acts: "Beaches, hiking, stargazing",
    vibe: "Bright, vibrant, energetic"
  },
  {
    key: "season-autumn",
    name: "Autumn",
    emoji: "🍂",
    title: "Autumn Colors",
    desc: "Amber canopies, crisp air, and leaves drifting like confetti on quiet paths.",
    time: "September — November",
    acts: "Scenic drives, harvest fairs",
    vibe: "Cozy, golden, nostalgic"
  },
  {
    key: "season-winter",
    name: "Winter",
    emoji: "❄️",
    title: "Winter Wonderland",
    desc: "Hushed landscapes, warm cups, and snow that shimmers under soft light.",
    time: "December — February",
    acts: "Bonfires, story nights",
    vibe: "Serene, calm, magical"
  }
];

let index = 0;
const hero = document.querySelector(".season-hero");
const eyebrow = document.querySelector(".season-eyebrow");
const title = document.querySelector(".season-title");
const sub = document.querySelector(".season-sub");
const infoTime = document.querySelector(".season-info-time");
const infoActs = document.querySelector(".season-info-acts");
const infoVibe = document.querySelector(".season-info-vibe");
const switchBtn = document.querySelector(".season-switch");

function applySeason(i) {
  const s = SEASONS[i];

  hero.classList.remove(...SEASONS.map(x => x.key));
  hero.classList.add(s.key);

  eyebrow.textContent = `${s.emoji} ${s.name}`;
  title.textContent = s.title;
  sub.textContent = s.desc;
  infoTime.textContent = s.time;
  infoActs.textContent = s.acts;
  infoVibe.textContent = s.vibe;
}

switchBtn.addEventListener("click", () => {
  index = (index + 1) % SEASONS.length;
  applySeason(index);
});

applySeason(index);

// section 3


// section 4
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".space-hamburger");
  const navLinks = document.querySelector(".space-nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("space-nav-active");
    hamburger.classList.toggle("space-toggle");
  });

  const planetInfo = {
    Mercury: {
      text: "Mercury is the smallest planet and closest to the Sun.",
      color: "linear-gradient(180deg, #b0b0b0, #5a5a5a)",
      bg: "radial-gradient(circle, #1a1a1a, #000)"
    },
    Venus: {
      text: "Venus has a thick atmosphere and is the hottest planet.",
      color: "linear-gradient(180deg, #f5deb3, #d2b48c)",
      bg: "radial-gradient(circle, #33220e, #000)"
    },
    Earth: {
      text: "Our home planet, the only one known to support life.",
      color: "linear-gradient(180deg, #2e8b57, #1e90ff)",
      bg: "radial-gradient(circle, #0b0f2f, #000)"
    },
    Mars: {
      text: "The Red Planet, with the largest volcano in the solar system.",
      color: "linear-gradient(180deg, #ff4500, #8b0000)",
      bg: "radial-gradient(circle, #1a0d0d, #000)"
    },
    Jupiter: {
      text: "The largest planet, famous for its Great Red Spot.",
      color: "linear-gradient(180deg, #d2b48c, #8b4513)",
      bg: "radial-gradient(circle, #2b1b0e, #000)"
    },
    Saturn: {
      text: "Known for its beautiful rings made of ice and rock.",
      color: "linear-gradient(180deg, #f5deb3, #deb887)",
      bg: "radial-gradient(circle, #2b1b0e, #000)"
    },
    Uranus: {
      text: "An ice giant with a unique sideways rotation.",
      color: "linear-gradient(180deg, #00ffff, #00008b)",
      bg: "radial-gradient(circle, #0b1b3f, #000)"
    },
    Neptune: {
      text: "The farthest planet, deep blue and windy.",
      color: "linear-gradient(180deg, #4169e1, #00008b)",
      bg: "radial-gradient(circle, #0b1b3f, #000)"
    }
  };

  const planets = document.querySelectorAll(".space-planet");
  const infoTitle = document.querySelector(".space-info-title");
  const infoText = document.querySelector(".space-info-text");
  const spaceSection = document.querySelector(".space-hero");

  planets.forEach(planet => {
    planet.addEventListener("click", () => {
      const name = planet.dataset.name;
      infoTitle.textContent = name;
      infoText.textContent = planetInfo[name].text;
      planet.style.background = planetInfo[name].color;
      spaceSection.style.background = planetInfo[name].bg;
    });
  });
});

// section 4