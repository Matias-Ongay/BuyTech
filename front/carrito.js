/*productos momentanes en el front */
const productos = [
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:1,
    cantidad:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:2,
    cantidad:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:3,
    cantidad:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:4,
    cantidad:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:5,
    cantidad:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:6,
    cantidad:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:7,
    cantidad:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:8,
    cantidad:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:9,
    cantidad:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:10,
    cantidad:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:11,
    cantidad:1
  },
  {
    nombre: "RTX 3080 12G",
    imagenSrc: "./images/rtx 3080.jpg",
    precio: "$250000",
    id:12,
    cantidad:1
  }
];
let carro = [];
// Función para guardar el carrito en el localStorage
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carro));
}
console.log("Ruta actual:", window.location.pathname);
let isDifferentPage = false; // Variable que indica si es una página diferente
if (window.location.pathname !== "/front/") {
  isDifferentPage = true;
  console.log("etro")
}
// Función para cargar el carrito desde el localStorage
function cargarCarrito() {
  const carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    carro = JSON.parse(carritoGuardado);
  }
}

const clasificacionesBtn = document.querySelector('.clasificaciones-btn');
      
const sliderWidth =document.querySelector(".slider-width");
const sliderWidth2 =document.querySelector(".slider-width2");
const listadoProductos=document.querySelector(".productos-listado");
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
    const descriptionBtn2 = document.createElement("button");
      descriptionBtn2.className = "description";
      const p12 = document.createElement("p");
      p12.className = "text";
      p12.textContent = producto.nombre;
      const p22 = document.createElement("p");
      p22.className = "text";
      p22.textContent = producto.precio;
    if (isDifferentPage) {
      console.log("PRODUCTOS")
      listadoProductos.appendChild(containerProduct);
      

    }else{
      console.log("ELSE")
      sliderWidth.appendChild(containerProduct);
      const containerProduct2 = document.createElement("div");
      containerProduct2.className = "container-product2";
    
      const image2 = document.createElement("div");
      image2.className = "image";
      const img2 = document.createElement("img");
      img2.src = producto.imagenSrc;
      img2.alt = producto.nombre;
      image2.appendChild(img2);
    
      
      descriptionBtn2.appendChild(p12);
      descriptionBtn2.appendChild(p22);
    
      containerProduct2.appendChild(image2);
      containerProduct2.appendChild(descriptionBtn2);
      sliderWidth2.appendChild(containerProduct2);
  
    }
   
  
  
    
    
    /*Evento para el carrito */
    descriptionBtn.addEventListener("click", () => {
      const nombreProducto = producto.nombre;
      const precioProducto = producto.precio;
      const idProducto = producto.id;
      
      // Verificar si el producto ya está en el carrito
      const productoExistente = carro.find((item) => item.id === idProducto);
      if (productoExistente) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        productoExistente.cantidad += 1;
        console.log("Cantidad actualizada:", productoExistente.cantidad);
      } else {
        // Si el producto no está en el carrito, agregarlo
        const cantidadProducto = producto.cantidad;
        carro.push({ nombre: nombreProducto, precio: precioProducto, id: idProducto, cantidad: cantidadProducto });
        console.log("Producto agregado al carrito:", nombreProducto);
      }
      guardarCarrito();
    });
    descriptionBtn2.addEventListener("click", () => {
      const nombreProducto = producto.nombre;
      const precioProducto = producto.precio;
      const idProducto = producto.id;
      
      // Verificar si el producto ya está en el carrito
      const productoExistente = carro.find((item) => item.id === idProducto);
      if (productoExistente) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        productoExistente.cantidad += 1;
        console.log("Cantidad actualizada:", productoExistente.cantidad);
      } else {
        // Si el producto no está en el carrito, agregarlo
        const cantidadProducto = producto.cantidad;
        carro.push({ nombre: nombreProducto, precio: precioProducto, id: idProducto, cantidad: cantidadProducto });
        console.log("Producto agregado al carrito:", nombreProducto);
      }
      guardarCarrito();
    });
  });

/*carrito pop up */

function eliminarProductoCarrito(index) {
  // Eliminar el producto del array carrito utilizando splice()
  carro.splice(index, 1);
  guardarCarrito();

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
  popupTop.textContent="Tu carrito";
  const productContent = document.createElement('div');
  productContent.classList.add('product-content')
  const textProduct = document.createElement('p');
  textProduct.classList.add('text-product')
  textProduct.textContent="Productos"
  closeButton.classList.add('popup-close');
  closeButton.innerHTML = 'CERRAR';
  closeButton.addEventListener('click', () => {
    popupContainer.remove();
  });
  const totalContainer=document.createElement('div');
    totalContainer.classList.add('contenedor-total');
    const valorTotal = carro.reduce((total, producto) => {
      const precio = parseFloat(producto.precio.replace('$', ''));
      const cantidad = producto.cantidad;
      return total + (precio * cantidad);
    }, 0);
    const totalText = document.createElement('p');
    totalText.textContent = `Total: $${valorTotal.toFixed(2)}`;
    function actualizarValorTotal() {
      const valorTotal = carro.reduce((total, producto) => {
        const precio = parseFloat(producto.precio.replace('$', ''));
        const cantidad = producto.cantidad;
        return total + (precio * cantidad);
      }, 0);
    
      totalText.textContent = `Total: $${valorTotal.toFixed(2)}`;
      guardarCarrito();
    }
  pop.appendChild(popupContainer);
  popupContainer.appendChild(popupContent);
  popupContent.appendChild(popupTop);
  popupTop.appendChild(closeButton);
  popupContent.appendChild(productContent);
  productContent.appendChild(textProduct);
  popupContent.appendChild(totalContainer);
  totalContainer.appendChild(totalText);
  carro.forEach((producto,index) => {
    // Crear elementos para cada producto
    const productoContainer = document.createElement('div');
    productoContainer.classList.add('producto-container');
    const nombreProducto = document.createElement('p');
    nombreProducto.textContent = producto.nombre;
    const precioProducto = document.createElement('p');
    precioProducto.textContent = `$${(parseFloat(producto.precio.replace('$', '')) * producto.cantidad).toFixed(2)}`;

    const cantidadContainer = document.createElement('div');
    cantidadContainer.classList.add('cantidad-container');
    const cantidadProducto = document.createElement('input');
    cantidadProducto.setAttribute('type', 'number');
    cantidadProducto.value = producto.cantidad.toString();
    const botonAumentar = document.createElement('button');
    botonAumentar.classList.add('botones');
    botonAumentar.textContent = '+';
    const botonDisminuir = document.createElement('button');
    botonDisminuir.classList.add('botones');
    botonDisminuir.textContent = '-';
    botonAumentar.addEventListener('click', () => {
      producto.cantidad += 1;
      cantidadProducto.value = producto.cantidad.toString();
      precioProducto.textContent = `$${(parseFloat(producto.precio.toString().replace('$', '')) * producto.cantidad).toFixed(2)}`;
      actualizarValorTotal(); // Actualizar el valor total al aumentar la cantidad
    });
  
    botonDisminuir.addEventListener('click', () => {
      if (producto.cantidad > 1) {
        producto.cantidad -= 1;
        cantidadProducto.value = producto.cantidad.toString();
        precioProducto.textContent = `$${(parseFloat(producto.precio.toString().replace('$', '')) * producto.cantidad).toFixed(2)}`;
        actualizarValorTotal(); // Actualizar el valor total al disminuir la cantidad
      }
    });
    
    

  
    const eliminarProducto = document.createElement('button');
    eliminarProducto.classList.add('eliminar');
    eliminarProducto.textContent = 'X';
    eliminarProducto.addEventListener('click', () => {
      // Lógica para eliminar el producto del carrito
      eliminarProductoCarrito(index);
      actualizarValorTotal();
      // ...
      // También puedes eliminar el elemento del DOM si lo deseas
      productoContainer.remove();
    });
    // Agregar los elementos al contenedor del producto
    
    
    productoContainer.appendChild(nombreProducto);
    productoContainer.appendChild(precioProducto);
    cantidadContainer.appendChild(botonDisminuir);
    cantidadContainer.appendChild(cantidadProducto);
    cantidadContainer.appendChild(botonAumentar);
    productoContainer.appendChild(cantidadContainer);
    productoContainer.appendChild(eliminarProducto);

    // Agregar el contenedor del producto al contenedor principal
    productContent.appendChild(productoContainer);
  });
}

//Clasificacion de productos
if (isDifferentPage){
  const clasificacionesLista = document.querySelector('.clasificaciones-lista');
      clasificacionesBtn.addEventListener('click', () => {
        clasificacionesLista.style.display = (clasificacionesLista.style.display === 'block') ? 'none' : 'block';
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
    cargarCarrito();
    const productList =await (await fetch("/api/products")).json();
    console.log(productList);
    displayProducts(productList);
}
