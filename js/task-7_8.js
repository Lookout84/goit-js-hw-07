const divControlsRef = document.getElementById('controls');
const divBoxes = document.getElementById('boxes');
const inputRef = document.querySelectorAll('#controls input[type="number"]')
const btnRender = document.querySelectorAll('#controls button[data-action="render"]');

btnRender.value = Number(inputRef.value);

btnRender.addEventListener('change', createBoxes);



function getValue(){
    console.log(inputRef.value);
}

function createBoxes(amount) {
    btnRender.value = Number(inputRef.value);
    amount = btnRender.value;
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

console.dir(inputRef);
console.dir(btnRender);
//console.log(amount)