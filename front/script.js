let products = [];

/*function displayProducts(productList){
    let productsHTML ='';
    productList.forEach(element => {
        productosHTML +=

        
    });

}*/

window.onload = async() => {
    const productList =await (await fetch("/api/products")).json();
    console.log(productList);
}