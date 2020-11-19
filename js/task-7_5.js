const inputRef = document.getElementById('name-input');
const spanRef = document.getElementById('name-output');

inputRef.addEventListener('input', event => {
if ( event.target.value === "") {
    spanRef.textContent = 'незнайомець';
} else {
    spanRef.textContent = event.target.value.trim();
}
});
