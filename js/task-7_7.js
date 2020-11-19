const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');

inputRef.addEventListener('input', fontSizeChange)

function fontSizeChange () {
    spanRef.style.fontSize = `${inputRef.value}px`
}