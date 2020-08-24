const inputRef = document.querySelector('#controls input');
const boxesRef = document.querySelector('#boxes');
const renderButtonRef = document.querySelector('button[data-action="render"]');
const destroyButtonRef = document.querySelector(
  'button[data-action="destroy"]',
);

renderButtonRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyButtonRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const newBox = document.createElement('div');

    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = generateColor();
    boxesRef.append(newBox);
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
