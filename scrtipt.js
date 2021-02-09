const magicElement = document.getElementById('btn');
const boxesElement = document.getElementById('boxes');
const boxes = document.querySelectorAll('.box');

magicElement.addEventListener('click', () => boxesElement.classList.toggle('big'));

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    boxes[i * 4 + j].style.backgroundPosition = `${-1 * j * 125}px ${-1 * i * 125}px`;
  }
}
