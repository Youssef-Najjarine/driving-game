const car = document.querySelector('img');


document.addEventListener('keydown', handleKeyDown);

let carDirection = 'right';


function handleKeyDown(event) {
  let keyPressed = event.key;
  let arrowPressed = event.which;
  const arrow = { left: 37, up: 38, right: 39, down: 40 };
  if (arrowPressed === arrow.left) {
    car.classList.add('left');
    car.classList.remove('up');
    car.classList.remove('down');
  } else if (arrowPressed === arrow.up) {
    car.classList.add('up');
    car.classList.remove('left');
    car.classList.remove('down');
  } else if (arrowPressed === arrow.right) {
    car.classList.remove('up');
    car.classList.remove('left');
    car.classList.remove('down');
  } else if (arrowPressed === arrow.down) {
    car.classList.remove('up');
    car.classList.remove('left');
    car.classList.add('down');
  }
}
