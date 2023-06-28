const express = require('express')
const app = express()//inicializa la app
const port = 3000//puerto que se va a usar
//arreglo de productos
const products = [
    {
        id:1,
        name:"name",
        price: 50,
        image:"images.jpg",
        stock:400
    },
    {
        id:2,
        name:"name",
        price: 50,
        image:"images.jpg",
        stock:400
    },
    {
        id:3,
        name:"name",
        price: 50,
        image:"images.jpg",
        stock:400
    },
    {
        id:4,
        name:"name",
        price: 50,
        image:"images.jpg",
        stock:400
    },
    {
        id:5,
        name:"name",
        price: 50,
        image:"images.jpg",
        stock:400
    },
    {
        id:6,
        name:"name",
        price: 50,
        image:"images.jpg",
        stock:400
    },
    {
        id:7,
        name:"name",
        price: 50,
        image:"images.jpg",
        stock:400
    },
    {
        id:8,
        name:"name",
        price: 50,
        image:"images.jpg",
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