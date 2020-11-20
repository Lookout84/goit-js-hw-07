const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulRef = document.getElementById("gallery");
function getClass(
  tag,
  addClass,
  addList,
  addBorder,
  addFlex,
  addGrid,
  addPadding,
  addHeight,
  addWidth
) {
  tag.classList.add(addClass);
  tag.style.list = addList;
  tag.style.border = addBorder;
  tag.style.display = addFlex;
  tag.style.grid = addGrid;
  tag.style.padding = addPadding;
  tag.style.height = addHeight;
  tag.style.width = addWidth;
}

getClass(
  ulRef,
  "js-list",
  "none",
  "2px solid red",
  "grid",
  "auto",
  "0",
  "100%",
  "50%"
);

//function createImg(arr) {
//  for (let i = 1; i <= arr.length; i++) {
//    const getUrlImages = (arr) => arr.map(({ url }) => url);
//    const getAltImages = (arr) => arr.map(({ alt }) => alt);
//    ulRef.insertAdjacentHTML(
//      "afterbegin",
//      `<li><img class='js-images'
//    src= '${getUrlImages(arr)[i - 1]}'
//    alt= '${getAltImages(arr)[i - 1]}'></img></li>`
//    );
//  }
//}
//const img = images.reduce(acc, ({url, alt}) => acc.push(...url, ...alt))

//console.dir(img)

const getImgRef = images.map(({ url, alt }) => {
 let li = document.createElement("li");
 li.insertAdjacentHTML(
   "afterbegin",
   `<img class = 'js-images' src = '${url}' alt = '${alt}'></img>`
 );
 return li;
});

ulRef.append(...getImgRef);
