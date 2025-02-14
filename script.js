setTimeout(
    () => {
      document
        .querySelector('.not-loaded')
        .classList
        .remove('not-loaded');
      document
        .querySelector('.message')
        .style
        .opacity = 1;

      const images = ['traded.png', 'traded1.png', 'traded2.png', 'traded3.png', 'traded4.png'];
      const container = document.querySelector('.container');

      for (let i = 0; i < 3; i++) { // Multiply the images
        images.forEach((src) => {
          const img = document.createElement('img');
          img.src = src;
          img.classList.add('floating-image');
          img.style.left = `${Math.random() * 100}vw`;
          img.style.top = `${Math.random() * 100}vh`; // Ensure images are more evenly distributed
          img.style.animationDuration = `${Math.random() * 10 + 5}s`;
          img.style.width = '15vmin'; // Make the images slightly bigger
          img.style.height = '15vmin'; // Make the images slightly bigger
          container.appendChild(img);
          makeDraggable(img); // Make the image draggable
        });
      }
    },
    1000,
  );

function makeDraggable(element) {
  let isDragging = false;
  let offsetX, offsetY;

  element.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;
    element.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      element.style.left = `${e.clientX - offsetX}px`;
      element.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    element.style.cursor = 'grab';
  });

  // Mobile touch events
  element.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - element.getBoundingClientRect().left;
    offsetY = touch.clientY - element.getBoundingClientRect().top;
    element.style.cursor = 'grabbing';
  });

  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      element.style.left = `${touch.clientX - offsetX}px`;
      element.style.top = `${touch.clientY - offsetY}px`;
    }
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
    element.style.cursor = 'grab';
  });
}