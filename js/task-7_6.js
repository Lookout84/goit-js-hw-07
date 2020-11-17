const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('focus', getFocus);

inputRef.addEventListener('blur', getValid);

function getFocus() {
    inputRef.classList.add('validation-input');
    inputRef.classList.remove('validation-input.valid');
    inputRef.classList.remove('validation-input.invalid');
}

function getValid() {
    if(inputRef.textContent.length == 6){
        inputRef.classList.remove('validation-input');
        inputRef.classList.add('validation-input.valid');
    } else 
    inputRef.classList.remove('validation-input');
    inputRef.classList.add('validation-input.invalid');
}
console.dir(inputRef)