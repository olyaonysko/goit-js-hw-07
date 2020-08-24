let counterValue = 0;
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

function increment() {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
