// section 1
const cursor = document.querySelector(".cursor-light");
document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

const counters = document.querySelectorAll(".count");
const speed = 50;
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(update, 40);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// section 1

// section 2

document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".be-scroll-section");
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }

    const parallax = section.querySelector(".be-scroll-parallax");
    if (parallax) {
      let offset = window.scrollY * 0.2; // move slower than scroll
      parallax.style.transform = `translateY(${offset}px)`;
    }
  });
});

// section 2