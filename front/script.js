/*carrusel de productos*/ 

let count = 0;
let inc = 0;
let margin = 0;
let slider = document.getElementById("slider-width"); // No se necesita el índice [0]
let itemDisplay = 0;

let itemSlide = 0; // Declarar e inicializar la variable itemSlide

if (screen.width > 990) {
  itemDisplay = document.getElementById("carousel").getAttribute("item-display-d"); // No se necesita el índice [0]
  margin = itemDisplay * 5;
} else if (screen.width > 700 && screen.width < 990) {
  itemDisplay = document.getElementById("carousel").getAttribute("item-display-t"); // No se necesita el índice [0]
  margin = itemDisplay * 6.8;
} else if (screen.width > 280 && screen.width < 700) {
  itemDisplay = document.getElementById("carousel").getAttribute("item-display-m"); // No se necesita el índice [0]
  margin = itemDisplay * 20;
}

let items = slider.getElementsByClassName("container-product"); // No se necesita el punto (.) en getElementsByClassName
let itemLeft = items.length % itemDisplay;
itemSlide = Math.floor(items.length / itemDisplay) - 1;

for (let i = 0; i < items.length; i++) {
  items[i].style.width = `${(screen.width / itemDisplay) - margin}px`;
}

function next() {
  if (inc !== itemSlide + itemLeft) {
    if (inc === itemSlide) {
      inc = inc + itemLeft;
      count = count - (screen.width / itemDisplay) * itemLeft;
    } else {
      inc++;
      count = count - screen.width;
    }
  }
  slider.style.left = `${count}px`;
}

function prev() {
  if (inc !== 0) {
    if (inc === itemLeft) {
      inc = inc - itemLeft;
      count = count + (screen.width / itemDisplay) * itemLeft;
    } else {
      inc--;
      count = count + screen.width;
    }
  }
  console.log(inc);
  slider.style.left = `${count}px`;
}


  
/*productos por la API*/ 
let products = [];

function displayProducts(productList){
    let productsHTML ='';
    productList.forEach(element => {
        productsHTML +=
        `<div class="conteiner-product">
            <div class="image">
            <img src="${element.image}" alt="rtx 3080">
            </div>
            <div class="description">
            <p class="text">${element.name}</p>
            <P class="text">${element.price}$</P>
            </div>

        </div>`
    });
    document.getElementById('carousel-inner').innerHTML=productsHTML;

}

window.onload = async() => {
    const productList =await (await fetch("/api/products")).json();
    console.log(productList);
    displayProducts(productList);
}