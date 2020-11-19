const divBoxes = document.getElementById('boxes');
const inputRef = document.querySelector('#controls input[type="number"]')
const btnRender = document.querySelector('#controls button[data-action="render"]');
const btnDestroy = document.querySelector('#controls button[data-action="destroy"]');


btnRender.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    amount = Number(inputRef.value);
    let x = 20;
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    for ( let i = 1; i <= amount; i++) {
    x += 10;
    const div = document.createElement('div');
    div.style.height = x + 'px';
    div.style.width = x + 'px';
    div.style.margin = '10px';
    div.style.padding = 0;
    div.style.backgroundColor = `rgb(${r / i}, ${g / i}, ${b / i})`;
    divBoxes.append(div);
    }
}

function destroyBoxes() {
    while (divBoxes.lastElementChild) {
        divBoxes.removeChild(divBoxes.lastElementChild);
    }
}
