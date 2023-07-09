const express = require('express')
const app = express()//inicializa la app
const port = 3000//puerto que se va a usar
//arreglo de productos
const productos = [
    {
      nombre: "AMD",
      imagenSrc: "images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Placa de video",
      id:1,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "./images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Placa de video",
      id:2,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "./images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Placa de video",
      id:3,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "./images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Placa de video",
      id:4,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "./images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Procesadores",
      id:5,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "./images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Memorias Ram",
      id:6,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "./images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Memorias Ram",
      id:7,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "./images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Almacenamiento",
      id:8,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "./images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Almacenamiento",
      id:9,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "./images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Fuente",
      id:10,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "./images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Fuente",
      id:11,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "images/rtx 3080.jpg",
      precio: "$250000",
      categoria:"Gabinete",
      id:12,
      cantidad:1
    }
  ];
//retorno de productos
app.get('/api/productos', (req, res) => {
  res.send(productos)
});

app.use("/", express.static("front"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})