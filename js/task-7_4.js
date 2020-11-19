const spanRef = document.getElementById("value");
const btnDecrement = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const btnIncrement = document.querySelector(
  '#counter button[data-action="increment"]'
);

let counterValue = Number(spanRef.textContent);

btnDecrement.addEventListener("click", decrement);
function decrement() {
  counterValue += Number(btnDecrement.textContent);
  spanRef.textContent = counterValue.toString();
}

btnIncrement.addEventListener("click", increment);
function increment() {
  counterValue += Number(btnIncrement.textContent);
  spanRef.textContent = counterValue.toString();
}
