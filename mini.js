// section 1
const hamburger = document.getElementById("hamburger");
const links = document.querySelector(".daily-links");

hamburger.addEventListener("click", () => {
  links.classList.toggle("show");
});
// section 1

// section 2
const toggle = document.querySelector(".dm-toggle");
const navLinks = document.querySelector(".dm-nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// section 2

// section 3
const nav = document.querySelector('.fert-nav');
const hamburgers = document.querySelector('.fert-hamburger');

hamburgers.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// section 3