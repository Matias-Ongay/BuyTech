/*productos momentanes en el front */

let carro = [];
let envio=[];
envio[0]=0;

let contador=document.querySelector('.cart-counter');
let contadorProductos=parseInt(contador);
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
      descriptionBtn.addEventListener("click", function(){
        descriptionBtn.style.backgroundColor="rgba(0, 0, 0, 0.75)";
        p1.innerHTML = 'Agregado';
        p2.innerHTML='al carrito'
        setTimeout(function() {
          p1.textContent = producto.nombre;
          p2.textContent=producto.precio;
          descriptionBtn.style.backgroundColor="#782424"
        }, 2000);
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
      p2.textContent = `$${producto.precio}`;
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
        p22.textContent = `$${producto.precio}`;
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
      descriptionBtn.addEventListener("click", function(){
        
        descriptionBtn.style.backgroundColor="rgba(0, 0, 0, 0.75)";
        p1.innerHTML = 'Agregado';
        p2.innerHTML='al carrito';
        setTimeout(function() {
          p1.textContent = producto.nombre;
          p2.textContent=`$${producto.precio}`;
          descriptionBtn.style.backgroundColor="#782424"
        }, 2000);
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
          contadorProductos=contadorProductos+1;
          contador.textContent=contadorProductos;
          // Asegurar que contadorProductos no sea menor que 0
          contadorProductos = Math.max(0, contadorProductos);

          // Actualizar el valor del elemento 'contador' en el DOM
          contador.textContent = contadorProductos;
        }
        guardarCarrito();
      });
      descriptionBtn2.addEventListener("click", function() {
        descriptionBtn2.style.backgroundColor="rgba(0, 0, 0, 0.75)";
        p12.innerHTML = 'Agregado';
        p22.innerHTML='al carrito';
        setTimeout(function(){
          p12.textContent = producto.nombre;
          p22.textContent=`$${producto.precio}`;
          descriptionBtn2.style.backgroundColor="#782424"

        }, 2000);

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
          contadorProductos=contadorProductos+1;
          contador.textContent=contadorProductos;
        }
        guardarCarrito();
      });
    });
  
  }
}

/*carrito pop up */

function eliminarProductoCarrito(productoId) {
   // Buscar el índice del producto en el carrito
   const index = carro.findIndex(producto => producto.id === productoId);
   // Verificar si el producto se encontró en el carrito
   if (index !== -1) {
     // Eliminar el producto del carrito utilizando splice()
     carro.splice(index, 1);
     console.log("Producto eliminado");
     guardarCarrito();
     contadorProductos=contadorProductos-1;
     contador.textContent=contadorProductos;
     // Asegurar que contadorProductos no sea menor que 0
     contadorProductos = Math.max(0, contadorProductos);

     // Actualizar el valor del elemento 'contador' en el DOM
     contador.textContent = contadorProductos;
 
     // Actualizar los elementos del carrito en el DOM
     const productosContainer = document.getElementsByClassName('producto-container');
     for (let i = 0; i < productosContainer.length; i++) {
       const productoContainer = productosContainer[i];
       const id = productoContainer.getAttribute('data-producto-id');
       if (id === productoId) {
         productoContainer.remove();
         break;
       }
     }
   }
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
  const totalContainer = document.createElement('div');
totalContainer.classList.add('contenedor-total');
const valorTotal = carro.reduce((total, producto) => {
  const precio = Math.round(parseFloat(producto.precio.replace('$', '')));

  const cantidad = producto.cantidad;
  return total + (precio * cantidad);
}, 0);
const totalText = document.createElement('p');
totalText.textContent = `Total: $${valorTotal}`;

function actualizarValorTotal() {
  const valorTotal = carro.reduce((total, producto) => {
    const precio = Math.round(parseFloat(producto.precio.replace('$', '')));
    const cantidad = producto.cantidad;
    return total + (precio * cantidad);
  }, 0);

  totalText.textContent = `Total: $${valorTotal+parseInt(precioGuardado)}`;
  guardarCarrito();
}

pop.appendChild(popupContainer);
popupContainer.appendChild(popupContent);
popupContent.appendChild(popupTop);
popupTop.appendChild(closeButton);
popupContent.appendChild(productContent);
productContent.appendChild(textProduct);

//datos de facturacion
const contenedorEnvio=document.createElement('div');
contenedorEnvio.classList.add('contenedor-envio');
const direccionFacturacion=document.createElement('p');
direccionFacturacion.textContent='Direccion de facturacion';
const codigoPostal=document.createElement('div');
const postal=document.createElement('p');
postal.textContent='Codigo Postal : ';
const inputPostal=document.createElement('input')
const calleNumero=document.createElement('div');
const calle=document.createElement('p');
calle.textContent='Calle y Numero : ';
const inputCalle=document.createElement('input');
const calcularEnvio=document.createElement('button');
calcularEnvio.textContent='Calcular Costo';
popupContent.appendChild(contenedorEnvio);
contenedorEnvio.appendChild(direccionFacturacion);
contenedorEnvio.appendChild(codigoPostal);
codigoPostal.appendChild(postal);
codigoPostal.appendChild(inputPostal);
contenedorEnvio.appendChild(calleNumero);
contenedorEnvio.appendChild(calcularEnvio);
calleNumero.appendChild(calle);
calleNumero.appendChild(inputCalle);
popupContent.appendChild(totalContainer);
totalContainer.appendChild(totalText);
let codigoPostalValue = '';
let calleValue = '';
function guardarValoresInputs() {
  localStorage.setItem('codigoPostal', inputPostal.value);
  localStorage.setItem('calle', inputCalle.value);
}
function restaurarValoresInputs() {
  codigoPostalValue = localStorage.getItem('codigoPostal');
  calleValue = localStorage.getItem('calle');
  inputPostal.value = codigoPostalValue;
  inputCalle.value = calleValue;
}
function envio1(){
  function generarNumeroAleatorioRedondeado() {
    const min = 3000;
    const max = 5500;
    const random = Math.random();
    const range = max - min + 1;
    const numeroAleatorio = Math.round(random * range) + min;
    return numeroAleatorio;
  }
  const productoContainer = document.createElement('div');
  productoContainer.classList.add('producto-container');
  const nombreProducto = document.createElement('p');
  nombreProducto.textContent ="Envio";
  const precioProducto = document.createElement('p');
  
 
  const precioSinDecimales = generarNumeroAleatorioRedondeado();
  localStorage.setItem('precioGuardado', precioSinDecimales);
  precioProducto.textContent = `$${precioSinDecimales}`;
  const cantidadContainer = document.createElement('div');
  cantidadContainer.classList.add('cantidad-container');
  
  const eliminarProducto = document.createElement('button');
  eliminarProducto.classList.add('eliminar');
  eliminarProducto.textContent = 'X';
  eliminarProducto.addEventListener('click', () => {
    
    productoContainer.remove();
    
  });
  // Agregar los elementos al contenedor del producto
  productoContainer.appendChild(nombreProducto);
  productoContainer.appendChild(precioProducto);
  productoContainer.appendChild(cantidadContainer);
  productoContainer.appendChild(eliminarProducto);

  // Agregar el contenedor del producto al contenedor principal
  productContent.appendChild(productoContainer);
  envio[0]=precioSinDecimales;
  guardarValoresInputs();
  actualizarValorTotal();
  totalText.textContent = `Total: $${valorTotal+precioSinDecimales}`
  envio[0]=precioSinDecimales;
}
calcularEnvio.addEventListener('click',()=>{
  const codigoPostalInputValue = inputPostal.value;
  const calleInputValue = inputCalle.value;
  if(inputCalle.value && inputPostal.value){
    if (codigoPostalInputValue !== codigoPostalValue || calleInputValue !== calleValue) {
     
    codigoPostalValue=inputPostal.value;
    calleValue=inputCalle.value;
    console.log('Código Postal:', codigoPostalValue);
    envio1();
    }
    }else{
    alert('Para calcular el envio completa todos los campos');
  }
})
restaurarValoresInputs();
function carro1(){
  carro.forEach((producto, index) => {
    // Crear elementos para cada producto
    const productoContainer = document.createElement('div');
    productoContainer.classList.add('producto-container');
    const nombreProducto = document.createElement('p');
    nombreProducto.textContent = producto.nombre;
    const precioProducto = document.createElement('p');
    
    // Redondear el precio sin decimales
    const precioSinDecimales = Math.round(parseFloat(producto.precio.replace('$', ''))) * producto.cantidad;
    precioProducto.textContent = `$${precioSinDecimales}`;
  
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
  
      // Actualizar el precio del producto sin decimales al aumentar la cantidad
      const precioSinDecimales = Math.round(parseFloat(producto.precio.replace('$', ''))) * producto.cantidad;
      precioProducto.textContent = `$${precioSinDecimales}`;
  
      actualizarValorTotal(); // Actualizar el valor total al aumentar la cantidad
    });
  
    botonDisminuir.addEventListener('click', () => {
      if (producto.cantidad > 1) {
        producto.cantidad -= 1;
        cantidadProducto.value = producto.cantidad.toString();
  
        // Actualizar el precio del producto sin decimales al disminuir la cantidad
        const precioSinDecimales = Math.round(parseFloat(producto.precio.replace('$', ''))) * producto.cantidad;
        precioProducto.textContent = `$${precioSinDecimales}`;
  
        actualizarValorTotal(); // Actualizar el valor total al disminuir la cantidad
      }
    });
  
    const eliminarProducto = document.createElement('button');
    eliminarProducto.classList.add('eliminar');
    eliminarProducto.textContent = 'X';
    eliminarProducto.addEventListener('click', () => {
      const productoId = producto.id;
      // Lógica para eliminar el producto del carrito
      productoContainer.remove();
  
      eliminarProductoCarrito(productoId);
      actualizarValorTotal();
      // ...
      // También puedes eliminar el elemento del DOM si lo deseas
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
carro1();
//cargar envio en el carrito una vez ya puesto los inputs 
const productoContainer = document.createElement('div');
  productoContainer.classList.add('producto-container');
  const nombreProducto = document.createElement('p');
  nombreProducto.textContent ="Envio";
  const precioProducto = document.createElement('p');
 const precioGuardado = localStorage.getItem('precioGuardado');
 precioProducto.textContent = `$${precioGuardado}`;
  const cantidadContainer = document.createElement('div');
  cantidadContainer.classList.add('cantidad-container');
  
  const eliminarProducto = document.createElement('button');
  eliminarProducto.classList.add('eliminar');
  eliminarProducto.textContent = 'X';
  eliminarProducto.addEventListener('click', () => {
    // Lógica para eliminar el producto del carrito
    productoContainer.remove();

    eliminarProductoCarrito();
    actualizarValorTotal();
    // ...
    // También puedes eliminar el elemento del DOM si lo deseas
  });
  // Agregar los elementos al contenedor del producto
  productoContainer.appendChild(nombreProducto);
  productoContainer.appendChild(precioProducto);
  productoContainer.appendChild(cantidadContainer);
  productoContainer.appendChild(eliminarProducto);

  // Agregar el contenedor del producto al contenedor principal
  productContent.appendChild(productoContainer);
  guardarValoresInputs();
  
  actualizarValorTotal();
  totalText.textContent = `Total: $${valorTotal+parseInt(precioGuardado)}`
  envio[0]=precioGuardado;
  //contenedores de pago 
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
  async function pay() {
    const data = { productos: carro, envio: envio };
    const response = await fetch("/api/pay", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const preference = await response.json();
  
    const script = document.createElement("script");
    script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.type = "text/javascript";
    script.dataset.preferenceId = preference.preferenceId;
    pago.appendChild(script);
  }
  
  mp.addEventListener("click", () => {
    pay();
    carro = [];
    guardarCarrito();
  });
  
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
    
    function buscarProductos(productos,categoriaSeleccionada){
  
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
    if(isDifferentPage && window.location.pathname !== "/nosotros.html"){
      inputBusqueda.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
          buscarProductos(productos);
        }
      });
      clasificacionesLista.addEventListener('click', (event) => {
        if (event.target.classList.contains('clasificacion')) {
          const categoriaSeleccionada = event.target.textContent;
          buscarProductos(productos,categoriaSeleccionada);
        }
      });
    }
    mostrarProductos(productos);
    contadorProductos=carro.length;
    contador.textContent=contadorProductos;
    console.log(contadorProductos)
    const productosCargadosEvent = new Event("productosCargados");
    document.dispatchEvent(productosCargadosEvent);  
}
