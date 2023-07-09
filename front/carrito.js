/*productos momentanes en el front */

let carro = [];
// Función para guardar el carrito en el localStorage
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carro));
}
console.log("Ruta actual:", window.location.pathname);
let isDifferentPage = false; // Variable que indica si es una página diferente
console.log(isDifferentPage)
if (window.location.pathname !== "/" && window.location.pathname !== "/index.html" ) {
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
//search bar
function limpiarProductos() {
  if (isDifferentPage) {
    const listadoProductos = document.querySelector(".productos-listado");
    while (listadoProductos.firstChild) {
      listadoProductos.firstChild.remove();
    }
  }
}
const clasificacionesLista = document.querySelector('.clasificaciones-lista');
const inputBusqueda = document.querySelector('.search-input');
const clasificacionesBtn = document.querySelector('.clasificaciones-btn');
if(isDifferentPage && window.location.pathname !== "/nosotros.html"){
  console.log("wtf")
  
  inputBusqueda.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      buscarProductos();
    }
  });
  clasificacionesLista.addEventListener('click', (event) => {
    if (event.target.classList.contains('clasificacion')) {
      const categoriaSeleccionada = event.target.textContent;
      buscarProductos(categoriaSeleccionada);
     
    }
  });
}
function buscarProductos(categoriaSeleccionada){
  
  limpiarProductos();
  const valorBusqueda = inputBusqueda.value.trim().toLowerCase();
  if(isDifferentPage  && categoriaSeleccionada){
    console.log("categoriaSeleccionada")
    const productosFiltrados = productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(valorBusqueda) &&
        producto.categoria === categoriaSeleccionada
    );
    mostrarProductos(productosFiltrados,valorBusqueda);

  }else if(isDifferentPage && valorBusqueda.length > 0){
    mostrarProductos(productos,valorBusqueda);
    console.log("Busqueda")
  }else{
    mostrarProductos(productos);
    console.log("categoriaSeleccionada")
  }
}
//creacion de los contenedores de productos      
const sliderWidth =document.querySelector(".slider-width");
const sliderWidth2 =document.querySelector(".slider-width2");
const listadoProductos=document.querySelector(".productos-listado");

function mostrarProductos(productos, valorBusqueda = '') {
  if(isDifferentPage && valorBusqueda.length > 0){
    const productosFiltrados = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(valorBusqueda)
    );
    productosFiltrados.forEach((producto)=>{
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
        const categorias=producto.categoria;
        
        // Verificar si el producto ya está en el carrito
        const productoExistente = carro.find((item) => item.id === idProducto);
        if (productoExistente) {
          // Si el producto ya está en el carrito, incrementar la cantidad
          productoExistente.cantidad += 1;
          console.log("Cantidad actualizada:", productoExistente.cantidad);
        } else {
          // Si el producto no está en el carrito, agregarlo
          const cantidadProducto = producto.cantidad;
          carro.push({ nombre: nombreProducto, precio: precioProducto, id: idProducto, cantidad: cantidadProducto,categorias:categorias });
          console.log("Producto agregado al carrito:", nombreProducto);
        }
        guardarCarrito();
      });
    })
  }else {
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
      if (isDifferentPage && window.location.pathname !== "/nosotros.html") {
        console.log("PRODUCTOS")
        listadoProductos.appendChild(containerProduct);

      }else if( window.location.pathname !== "/nosotros.html"){
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
        const categorias=producto.categoria;
        
        // Verificar si el producto ya está en el carrito
        const productoExistente = carro.find((item) => item.id === idProducto);
        if (productoExistente) {
          // Si el producto ya está en el carrito, incrementar la cantidad
          productoExistente.cantidad += 1;
          console.log("Cantidad actualizada:", productoExistente.cantidad);
        } else {
          // Si el producto no está en el carrito, agregarlo
          const cantidadProducto = producto.cantidad;
          carro.push({ nombre: nombreProducto, precio: precioProducto, id: idProducto, cantidad: cantidadProducto,categorias:categorias });
          console.log("Producto agregado al carrito:", nombreProducto);
        }
        guardarCarrito();
      });
      descriptionBtn2.addEventListener("click", () => {
        const nombreProducto = producto.nombre;
        const precioProducto = producto.precio;
        const idProducto = producto.id;
        const categorias=producto.categoria;
        
        // Verificar si el producto ya está en el carrito
        const productoExistente = carro.find((item) => item.id === idProducto);
        if (productoExistente) {
          // Si el producto ya está en el carrito, incrementar la cantidad
          productoExistente.cantidad += 1;
          console.log("Cantidad actualizada:", productoExistente.cantidad);
        } else {
          // Si el producto no está en el carrito, agregarlo
          const cantidadProducto = producto.cantidad;
          carro.push({ nombre: nombreProducto, precio: precioProducto, id: idProducto, cantidad: cantidadProducto,categorias:categorias });
          console.log("Producto agregado al carrito:", nombreProducto);
        }
        guardarCarrito();
      });
    });
  
  }
}

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
  //contenedores de pago y envios
  const pago=document.createElement('div');
  pago.classList.add('contenedor-pago');
  const mp=document.createElement('button');
  mp.classList.add('boton-pago');
  const textoPago = document.createElement('p');
  textoPago.textContent = 'Finalizar compra';
  const imagenuala=document.createElement('img');
  imagenuala.src='./images/pagar.png';
  popupContent.appendChild(pago);
  pago.appendChild(mp);
  mp.appendChild(textoPago);
  mp.appendChild(imagenuala);
}
//Carrito para toda la pagina
if (isDifferentPage && window.location.pathname !== "/nosotros.html"){
  const clasificacionesLista = document.querySelector('.clasificaciones-lista');
      clasificacionesBtn.addEventListener('click', () => {
        clasificacionesLista.style.display = (clasificacionesLista.style.display === 'block') ? 'none' : 'block';
      });
}



window.onload = async() => {
  const productos=await(await fetch("/api/productos")).json();
    cargarCarrito();
    mostrarProductos(productos);
    console.log(productos)
    const productosCargadosEvent = new Event("productosCargados");
    document.dispatchEvent(productosCargadosEvent);  
}