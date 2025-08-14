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
