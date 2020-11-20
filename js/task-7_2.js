const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ulRef = document.getElementById("ingredients");

const arrLi = ingredients.map(function (item) {
  let li = document.createElement("li");
  li.textContent += item;
  return li;
});

ulRef.append(...arrLi);
