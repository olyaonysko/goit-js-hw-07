const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function handleFontSize() {
  textRef.style.fontSize = inputRef.value + 'px';
}

inputRef.addEventListener('input', handleFontSize);
