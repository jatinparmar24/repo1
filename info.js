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