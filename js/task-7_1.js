const categoriesRef = document.querySelectorAll('#categories');
console.log(categoriesRef);

const howItem = document.querySelectorAll('li.item').length;
//const howItem = itemRef.reduce(acc, item)
console.log(`У списку ${howItem} категорії.`);

categoriesRef.forEach((elem) => {console.log(elem.textContent)});


const tittleRef = document.querySelectorAll('h2');

const getNameCategories = tittleRef.forEach((elem) => {return elem.textContent});

const itemRef = document.querySelectorAll('#categories ul');

console.log(itemRef);

const getHowElements = itemRef.forEach((elem) => {elem.children.length});

console.log(`Категорія: ${getNameCategories}\nКількість елементів: ${getHowElements}`)