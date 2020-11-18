const divControlsRef = document.getElementById('controls');
const divBoxes = document.getElementById('boxes');
const inputRef = document.querySelector('#controls input[type="number"]')
const btnRender = document.querySelector('#controls button[data-action="render"]');


btnRender.addEventListener('input', createBoxes);

function createBoxes(amount) {
    //amount = inputRef.value;
    let x = 30;
    let y = 30;
    for ( let i = 1; i <= amount; i++) {
    x += 10;
    y += 10;
    const div = document.createElement('div');
    div.style.height = x + 'px';
    div.style.width = y + 'px';
    div.style.margin = x + 'px';
    div.style.backgroundColor = 'red';
    divBoxes.append(div);
    }
}

console.log(inputRef.value);
console.dir(btnRender)

createBoxes(5)