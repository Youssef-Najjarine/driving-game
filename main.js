const car = document.querySelector('.img1');
const dots1 = document.querySelector('.dots1');
const dots2 = document.querySelector('.dots2');
let rotatingObsticles = setInterval(handleObsticles, 30);
document.addEventListener('keydown', handleKeyDown);

function handleObsticles() {
  dot1Number += 10;
  dot2Number -= 10;
  if (dot1Number >= 90 && dot1Number <= 410) {
    dots1.style.top = `${dot1Number}px`;
    } else {
      dot1Number2 -= 10;
      dots1.style.top = `${dot1Number2}px`;
      if (dot1Number2 === 90) {
        dot1Number = 90;
        dot1Number2 = 410;
      }
    }
  if (dot2Number <= 850 && dot2Number >= 560) {
    dots2.style.top = `${dot2Number}px`;
  } else {
    dot2Number2 += 10;
    dots2.style.top = `${dot2Number2}px`;
    if (dot2Number2 === 850) {
      dot2Number = 850;
      dot2Number2 = 560;
    }
  }
  }

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
