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

// section 3
    const heading = document.querySelector('.mix-heading');
    const subheading = document.querySelector('.mix-subheading');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          heading.classList.add('mix-visible');
          subheading.classList.add('mix-visible');
        }
      });
    });
    observer.observe(heading);

    // ===== Card 1 Popup =====
    const card1 = document.querySelector('.mix-card1');
    const popup = card1.querySelector('.mix-popup');
    card1.addEventListener('click', () => {
      popup.style.display = 'block';
      setTimeout(() => popup.style.display = 'none', 2000);
    });

    // ===== Card 3 Ball Jump =====
    const ball = document.querySelector('.mix-ball');
    const game = document.querySelector('.mix-game');
    let jumping = false;

    game.addEventListener('click', () => {
      if(jumping) return;
      jumping = true;
      let pos = 0;
      let up = setInterval(() => {
        if(pos >= 70){
          clearInterval(up);
          let down = setInterval(() => {
            if(pos <= 0){
              clearInterval(down);
              jumping = false;
            }
            pos -= 5;
            ball.style.bottom = pos + 'px';
          }, 30);
        }
        pos += 5;
        ball.style.bottom = pos + 'px';
      }, 30);
    });

// section 3

// section 4
const pages = document.querySelectorAll(".flip-page");
const nextBtn = document.getElementById("flip-next");
const prevBtn = document.getElementById("flip-prev");

let currentPage = 0;

// initialize all pages
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
  page.dataset.flipped = "false";
});

// Next button
function showNextPage() {
  if (currentPage < pages.length) {
    pages[currentPage].dataset.flipped = "true";
    currentPage++;
  }
}

// Previous button
function showPrevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].dataset.flipped = "false";
  }
}

nextBtn.addEventListener("click", showNextPage);
prevBtn.addEventListener("click", showPrevPage);

// section 4

// section 5
document.querySelectorAll(".gooey-btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.querySelectorAll(".gooey-blobs span").forEach(blob => {
      blob.style.width = 10 + Math.random() * 20 + "px";
      blob.style.height = blob.style.width;
    });
  });
});

// section 5