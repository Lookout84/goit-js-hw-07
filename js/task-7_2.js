const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ulRef = document.getElementById("ingredients");

ingredients.map(function (item) {
  let li = document.createElement("li");
  ulRef.appendChild(li);
  li.innerHTML += item;
});
