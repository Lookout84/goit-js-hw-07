# goit-js-hw-07

1. Напиши скрипт, який виконає наступні операції.

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).

Наприклад, для першої категорії вийде:

Категорія: Тварини
Кількість елементів: 4

2. В HTML є пустий список ul#ingredients.

<ul id="ingredients"></ul>
В JS є масив рядків.

const ingredients = [
'Картопля',
'Гриби',
'Часник',
'Помідори',
'Зелень',
'Приправи',
];
Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().

3. Напиши скрипт для створення галереї зображень по масиву даних.

В HTML є список ul#gallery.

<ul id="gallery"></ul>
Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.

// function getLiRef() {
// let li = document.createElement("li");
// li.insertAdjacentHTML("afterbegin", imgTag);

const imgTag = images.reduce((acc, item) => {
return [...acc, `src ='${item.url}' alt = '${item.alt}'`];
// let li = document.createElement("li");
// let img = document.createElement("img");
// img.insertAdjacentHTML(
// "afterbegin",
// `src = '${item.url}' alt ='${item.alt}'`
// );
// li.insertAdjacentHTML("afterbegin", img);
// let img = [
// acc,
// `<img class = 'js-images' src = '${item.url}' alt = '${item.alt}'></img>`,
// ];
// return li;
}, []);

// }
// let li = document.createElement("li");
// li.insertAdjacentHTML("afterbegin", imgTag);
// return li;

console.log(imgTag);

// ulRef.insertAdjacentHTML("afterbegin", `<li>${imgTag}</li>`);

// let li = document.createElement("li");
// li.insertAdjacentHTML(
// "afterbegin",
// `<img class = 'js-images' ${getImgRef}></img>`
// );

// console.log(li);

// function getLiRef() {
// const img = images.reduce((acc, item) => {
// return [
// ...acc,
// `<img class = 'js-images' src = '${item.url}' alt = '${item.alt}'></img>`,
// ];
// }, []);
// const li = document.createElement("li");
// li.insertAdjacentHTML("afterbegin", img);
// return li;
// }

4. Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
Створи функції increment і decrement для збільшення і зменшення значення лічильника.
Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

5. Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

<input type="text" placeholder="Ваше ім'я?" id="name-input" />
<h1>Привіт, <span id="name-output">незнайомець</span>!</h1>

6. Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символів"
/>
Скільки символів має бути в інпут, вказується в його атрибуті data-length.
Якщо введена відповідна кількість, то border інпут стає зеленим, якщо неправильне - червоним.
Для додавання стилів, використовуй CSS-класи valid і invalid.

#validation-input {
border: 3px solid #bdbdbd;
}

#validation-input.valid {
border-color: #4caf50;
}

#validation-input.invalid {
border-color: #f44336;
}

7. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>

8. Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

Кожен створений div:

Має випадковий rgb колір фону
Розміри найпершого div - 30px на 30px
Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px
Створи функцію destroyBoxes(), яка очищає div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Створити</button>
  <button type="button" data-action="destroy">Очистити</button>
</div>

<div id="boxes"></div>
