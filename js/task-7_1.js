const categoriesRef = document.querySelectorAll("#categories");
const tittleRef = document.querySelectorAll("h2");
const itemRef = document.querySelectorAll("li.item");
const howItem = document.querySelectorAll("li.item").length;

console.log(`У списку ${howItem} категорії.`);

tittleRef.forEach((elem) => {
  console.log(
    `Категорія:`,
    elem.textContent,
    `\nКількість елементів:`,
    elem.nextElementSibling.children.length
  );
});
