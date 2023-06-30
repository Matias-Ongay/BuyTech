/*productos momentanes en el front */
const productos = [
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "250000$",
    id:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "250000$",
    id:2
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "250000$",
    id:3
  }
];
const carro = [];
const sliderWidth =document.querySelector(".slider-width");
const sliderWidth2 =document.querySelector(".slider-width2");
productos.forEach((producto) => {
  const containerProduct = document.createElement("div");
  containerProduct.className = "container-product";

  const image = document.createElement("div");
  image.className = "image";
  const img = document.createElement("img");
  img.src = producto.imagenSrc;
  img.alt = producto.nombre;
  image.appendChild(img);

  const descriptionBtn = document.createElement("button");
  descriptionBtn.className = "description";
  const p1 = document.createElement("p");
  p1.className = "text";
  p1.textContent = producto.nombre;
  const p2 = document.createElement("p");
  p2.className = "text";
  p2.textContent = producto.precio;
  descriptionBtn.appendChild(p1);
  descriptionBtn.appendChild(p2);

  containerProduct.appendChild(image);
  containerProduct.appendChild(descriptionBtn);
  sliderWidth.appendChild(containerProduct);


  const containerProduct2 = document.createElement("div");
  containerProduct2.className = "container-product2";

  const image2 = document.createElement("div");
  image2.className = "image";
  const img2 = document.createElement("img");
  img2.src = producto.imagenSrc;
  img2.alt = producto.nombre;
  image2.appendChild(img2);

  const descriptionBtn2 = document.createElement("button");
  descriptionBtn2.className = "description";
  const p12 = document.createElement("p");
  p12.className = "text";
  p12.textContent = producto.nombre;
  const p22 = document.createElement("p");
  p22.className = "text";
  p22.textContent = producto.precio;
  descriptionBtn2.appendChild(p12);
  descriptionBtn2.appendChild(p22);

  containerProduct2.appendChild(image2);
  containerProduct2.appendChild(descriptionBtn2);
  sliderWidth2.appendChild(containerProduct2);

  
  /*Evento para el carrito */
  descriptionBtn.addEventListener("click", () => {
    const nombreProducto = producto.nombre;
    const precioProducto = producto.precio;
    
    // Agregar el producto al carrito
    carro.push({ nombre: nombreProducto, precio: precioProducto });
    
    // Mostrar una confirmación o realizar otras acciones
    console.log("Producto agregado al carrito:", nombreProducto);
  });
  descriptionBtn2.addEventListener("click", () => {
    const nombreProducto = producto.nombre;
    const precioProducto = producto.precio;
    
    // Agregar el producto al carrito
    carro.push({ nombre: nombreProducto, precio: precioProducto });
    
    // Mostrar una confirmación o realizar otras acciones
    console.log("Producto agregado al carrito:", nombreProducto);
  });
});


/*carrusel de productos 1*/ 

let count = 0;
let inc = 0;
let margin = 0;
let slider = document.querySelector(".slider-width"); 
let itemDisplay = 0;

let itemSlide = 0; 

if (screen.width > 990) {
  itemDisplay = document.querySelector(".carrousel").getAttribute("item-display-d"); 
  margin = itemDisplay * 5;
} else if (screen.width > 700 && screen.width < 990) {
  itemDisplay = document.querySelector(".carrousel").getAttribute("item-display-t"); 
  margin = itemDisplay * 6.8;
} else if (screen.width > 280 && screen.width < 700) {
  itemDisplay = document.querySelector(".carrousel").getAttribute("item-display-m"); 
  margin = itemDisplay * 20;
}

let items = slider.querySelectorAll(".container-product");
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

/*carrusel de productos 2*/

// Carrusel 2
let count2 = 0;
let inc2 = 0;
let margin2 = 0;
let slider2 = document.querySelector(".slider-width2");
let itemDisplay2 = 0;
let itemSlide2 = 0;

if (screen.width > 990) {
  itemDisplay2 = document.querySelector(".carrousel2").getAttribute("item-display-d");
  margin2 = itemDisplay2 * 5;
} else if (screen.width > 700 && screen.width < 990) {
  itemDisplay2 = document.querySelector(".carrousel2").getAttribute("item-display-t");
  margin2 = itemDisplay2 * 6.8;
} else if (screen.width > 280 && screen.width < 700) {
  itemDisplay2 = document.querySelector(".carrousel2").getAttribute("item-display-m");
  margin2 = itemDisplay2 * 20;
}

let items2 = slider2.querySelectorAll(".container-product2");
let itemLeft2 = items2.length % itemDisplay2;
itemSlide2 = Math.floor(items2.length / itemDisplay2) - 1;

for (let i = 0; i < items2.length; i++) {
  items2[i].style.width = `${(screen.width / itemDisplay2) - margin2}px`;
}

function next2() {
  if (inc2 !== itemSlide2 + itemLeft2) {
    if (inc2 === itemSlide2) {
      inc2 = inc2 + itemLeft2;
      count2 = count2 - (screen.width / itemDisplay2) * itemLeft2;
    } else {
      inc2++;
      count2 = count2 - screen.width;
    }
  }
  slider2.style.left = `${count2}px`;
}

function prev2() {
  if (inc2 !== 0) {
    if (inc2 === itemLeft2) {
      inc2 = inc2 - itemLeft2;
      count2 = count2 + (screen.width / itemDisplay2) * itemLeft2;
    } else {
      inc2--;
      count2 = count2 + screen.width;
    }
  }
  console.log(inc2);
  slider2.style.left = `${count2}px`;
}
/*carrito pop up */

function eliminarProductoCarrito(index) {
  // Eliminar el producto del array carrito utilizando splice()
  carro.splice(index, 1);
}
const carrito=document.getElementById('carrito');
carrito.addEventListener('click', openPop);
const pop=document.getElementById('pop');
function openPop(){
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');
  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');
  const closeButton = document.createElement('button');
  const popupTop =document.createElement('p');
  popupTop.classList.add('poptop');
  const productContent = document.createElement('div');
  productContent.classList.add('product-content')
  const textProduct = document.createElement('p');
  textProduct.classList.add('text-product')
  closeButton.classList.add('popup-close');
  closeButton.innerHTML = 'CERRAR';
  closeButton.addEventListener('click', () => {
    popupContainer.remove();
  });
  pop.appendChild(popupContainer);
  popupContainer.appendChild(closeButton);
  popupContainer.appendChild(popupContent);
  popupContent.appendChild(popupTop);
  popupContent.appendChild(productContent);
  productContent.appendChild(textProduct);
  carro.forEach((producto,index) => {
    // Crear elementos para cada producto
    const productoContainer = document.createElement('div');
    productoContainer.classList.add('producto-container');
  
    const nombreProducto = document.createElement('p');
    nombreProducto.textContent = producto.nombre;
  
    const precioProducto = document.createElement('p');
    precioProducto.textContent = `$${producto.precio}`;
  
    const cantidadProducto = document.createElement('input');
    cantidadProducto.type = 'number';
    cantidadProducto.value = producto.cantidad;
  
    const eliminarProducto = document.createElement('button');
    eliminarProducto.textContent = 'Eliminar';
    eliminarProducto.addEventListener('click', () => {
      // Lógica para eliminar el producto del carrito
      eliminarProductoCarrito(index);
      // ...
      // También puedes eliminar el elemento del DOM si lo deseas
      productoContainer.remove();
    });
  
    // Agregar los elementos al contenedor del producto
    productoContainer.appendChild(nombreProducto);
    productoContainer.appendChild(precioProducto);
    productoContainer.appendChild(cantidadProducto);
    productoContainer.appendChild(eliminarProducto);
  
    // Agregar el contenedor del producto al contenedor principal
    productContent.appendChild(productoContainer);
  });
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