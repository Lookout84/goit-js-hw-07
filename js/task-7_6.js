const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('focus', getFocus);
inputRef.addEventListener('blur', getValid);

function getFocus() {
    inputRef.classList.add('validation-input');
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
}

function getValid() {
    inputRef.value.length === Number(inputRef.getAttribute('data-length')) 
    ? inputRef.classList.add('valid') 
    : inputRef.classList.add('invalid');
}