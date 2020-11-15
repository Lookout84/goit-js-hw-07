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
    li.textContent = arr[i];
    ulRef.append(li);
    }
}
  //console.log(ingredientsRef);
  //const liEl = document.createElement('li');
  //const getElIngredients = ingredients.forEach(elem => elem);
  //liEl.textContent = getElIngredients;


  //const liEl = document.createElement('li');
  //liEl.textContent = ;

  //ingredientsRef.append(...ingredients);
  //console.log(liEl);

  createLi(ingredients)
  length
