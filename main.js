const car = document.querySelector('.img1');

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {

  let keyPressed = event.which;
  const keyboardButton = { left: 37, up: 38, right: 39, down: 40, space: 32};
  if (keyPressed === keyboardButton.left) {
    carDirection = 'left';
    car.classList.add('left');
    car.classList.remove('up');
    car.classList.remove('down');
  } else if (keyPressed === keyboardButton.up) {
    carDirection = 'up';
    car.classList.add('up');
    car.classList.remove('left');
    car.classList.remove('down');
  } else if (keyPressed === keyboardButton.right) {
    carDirection = 'right';
    car.classList.remove('up');
    car.classList.remove('left');
    car.classList.remove('down');
  } else if (keyPressed === keyboardButton.down) {
    carDirection = 'down';
    car.classList.remove('up');
    car.classList.remove('left');
    car.classList.add('down');
  }

if (spaceNumber === 0) {

  if (keyPressed === keyboardButton.space) {

    let startEngine = setInterval(handleSetInterval, 16);
    spaceNumber = startEngine;
   }
} else if (keyPressed === keyboardButton.space && spaceNumber > 0) {
  clearInterval(spaceNumber);
  spaceNumber = 0;
}
}



function handleSetInterval() {
  if (carDirection === 'right') {
    acceleration.left += 10;
    car.style.left = `${acceleration.left}px`;
  } else if (carDirection === 'down') {
    acceleration.top += 10;
    car.style.top = `${acceleration.top}px`;
  } else if (carDirection === 'left') {
    acceleration.left -= 10;
    car.style.left = `${acceleration.left}px`;
  } else if (carDirection === 'up') {
    acceleration.top -= 10;
    car.style.top = `${acceleration.top}px`;
  }

  if (acceleration.left === 1900) {
    acceleration.left = -200;
  } else if (acceleration.left === -200) {
    acceleration.left = 1900;
  } else if (acceleration.top === -200) {
    acceleration.top = 900;
  } else if (acceleration.top === 1000) {
    acceleration.top = -200;
  }
}
