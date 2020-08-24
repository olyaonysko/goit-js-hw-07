const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

function inputChange(event) {
  inputRef.value
    ? (outputRef.textContent = event.target.value)
    : (outputRef.textContent = 'незнайомець');
}

inputRef.addEventListener('input', inputChange);
