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

//const ulRef = document.getElementById('gallery');
//ulRef.classList.add('js-list');
//ulRef.style.list = 'none';
//ulRef.style.border = '2px solid red';
//ulRef.style.display = 'grid';
//ulRef.style.grid = 'auto';
//ulRef.style.padding = '0';
//ulRef.style.height = '100%';
//ulRef.style.width = '50%';
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

function createImg(arr) {
  for (let i = 1; i <= arr.length; i++) {
    const getUrlImages = (arr) => arr.map(({ url }) => url);
    const getAltImages = (arr) => arr.map(({ alt }) => alt);
    ulRef.insertAdjacentHTML(
      "afterbegin",
      `<li><img class='js-images' 
    src= '${getUrlImages(arr)[i - 1]}' 
    alt= '${getAltImages(arr)[i - 1]}'></img></li>`
    );
  }
}

createImg(images);

const imgRef = document.querySelectorAll("img");

//imgRef.style.height = '100%';
//imgRef.style.width = addWidth;
//imgRef.classList.add('js-images');
//getClass (imgRef,'', '', '','', '', '0', '100%', '50%');
//console.log(imgRef)
//imgRef.style.width = '100%';
