const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

  const ulRef = document.getElementById('ingredients');

  function createLi (arr) {
    for ( let i = 1; i <= arr.length; i++) {
    const li = document.createElement("li");
    li.textContent = arr[i-1];
    ulRef.append(li);
    }
}
  
createLi(ingredients);