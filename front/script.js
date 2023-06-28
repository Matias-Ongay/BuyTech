/*carrusel de productos*/ 
const carouselInner = document.getElementById('carousel-inner');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const containerProducts = document.querySelectorAll('.container-product');

let currentIndex = 0;

containerProducts[currentIndex].classList.add('show');

nextButton.addEventListener('click', () => {
  containerProducts[currentIndex].classList.remove('show');
  currentIndex++;
  if (currentIndex >= containerProducts.length) {
    currentIndex = 0;
  }
  containerProducts[currentIndex].classList.add('show');
  carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;
});

prevButton.addEventListener('click', () => {
  containerProducts[currentIndex].classList.remove('show');
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = containerProducts.length - 1;
  }
  containerProducts[currentIndex].classList.add('show');
  carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;
});


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