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
