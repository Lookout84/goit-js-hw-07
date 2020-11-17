const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('focus', getFocus);

inputRef.addEventListener('blur', getValid);

function getFocus() {
    inputRef.classList.add('validation-input');
}

function getValid() {
    if(inputRef.textContent.length == inputRef.attributes.data-length.value){
        inputRef.classList.add('validation-input.valid');
    } else 
}
console.dir(inputRef)