const express = require('express')
const app = express()//inicializa la app
const port = 3000//puerto que se va a usar
//arreglo de productos
const products = [
    {
        id:1,
        name:"RTX 3080",
        price: 50,
        image:"./images/rtx 3080.jpg",
        stock:400
    },
    {
        id:2,
        name:"RTX 3080",
        price: 50,
        image:"./images/rtx 3080.jpg",
        stock:400
    },
    {
        id:3,
        name:"RTX 3080",
        price: 50,
        image:"./images/rtx 3080.jpg",
        stock:400
    },
    {
        id:4,
        name:"RTX 3080",
        price: 50,
        image:"./images/rtx 3080.jpg",
        stock:400
    },
    {
        id:5,
        name:"RTX 3080",
        price: 50,
        image:"./images/rtx 3080.jpg",
        stock:400
    },
    {
        id:6,
        name:"RTX 3080",
        price: 50,
        image:"./images/rtx 3080.jpg",
        stock:400
    },
    {
        id:7,
        name:"RTX 3080",
        price: 50,
        image:"./images/rtx 3080.jpg",
        stock:400
    },
    {
        id:8,
        name:"RTX 3080",
        price: 50,
        image:"./images/rtx 3080.jpg",
        stock:400
    },
];
//retorno de productos
app.get('/api/products', (req, res) => {
  res.send(products)
});

app.use("/", express.static("front"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})