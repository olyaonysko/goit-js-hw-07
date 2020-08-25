const inputRef = document.querySelector('#validation-input');
const validLength = Number(inputRef.dataset.length);
inputRef.addEventListener('blur', event => {
  if (event.target.value.length === validLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
});
