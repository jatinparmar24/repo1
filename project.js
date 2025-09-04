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