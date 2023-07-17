const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const mercadopago = require("mercadopago");
mercadopago.configure({
  access_token: "TEST-2151549529356634-070820-0c1e544cab1acaf67ff492edaf71895f-165197919",
});
//arreglo de productos
const productos = [
    {
      nombre: "RTX 3070 8G",
      imagenSrc: "images/rtx3070.png",
      precio: "225000",
      categoria:"Placa de video",
      id:1,
      cantidad:1
    },
    {
      nombre: "RTX 3080 12G",
      imagenSrc: "images/rtx 3080.jpg",
      precio: "250000",
      categoria:"Placa de video",
      id:2,
      cantidad:1
    },
    {
      nombre: "GTX 1660 SUPER 6G",
      imagenSrc: "images/GTX1660.jpg",
      precio: "175000",
      categoria:"Placa de video",
      id:3,
      cantidad:1
    },
    {
      nombre: "RX 6750xt 12G",
      imagenSrc: "images/rx6750xt.jpg",
      precio: "200000",
      categoria:"Placa de video",
      id:4,
      cantidad:1
    },
    {
      nombre: "Intel I7 11gen",
      imagenSrc: "images/i7.jpg",
      precio: "170000",
      categoria:"Procesadores",
      id:5,
      cantidad:1
    },
    {
      nombre: "Intel I5 12gen",
      imagenSrc: "images/i5.jpg",
      precio: "150000",
      categoria:"Procesadores",
      id:6,
      cantidad:1
    },
    {
      nombre: "Rizen 5600x",
      imagenSrc: "images/5600x.jpg",
      precio: "123000",
      categoria:"Procesadores",
      id:7,
      cantidad:1
    },
    {
      nombre: "Rizen 5800x3d",
      imagenSrc: "images/5800x3d.jpg",
      precio: "200000",
      categoria:"Procesadores",
      id:8,
      cantidad:1
    },
    {
      nombre: "Ram Corsair 3600mhz 8g",
      imagenSrc: "images/ramcorsair.jpg",
      precio: "25000",
      categoria:"Memorias Ram",
      id:9,
      cantidad:1
    },
    {
      nombre: "Ram Fury 3200mhz 8g",
      imagenSrc: "images/ramfury.jpg",
      precio: "20000",
      categoria:"Memorias Ram",
      id:10,
      cantidad:1
    },
    {
      nombre: "Disco Interno m.2 1T",
      imagenSrc: "images/m.2.jpg",
      precio: "32000",
      categoria:"Almacenamiento",
      id:11,
      cantidad:1
    },
    {
      nombre: "Disco Solido ssd 480G",
      imagenSrc: "images/solido.jpg",
      precio: "25000",
      categoria:"Almacenamiento",
      id:12,
      cantidad:1
    },
    {
      nombre: "Fuente Corsair 750w",
      imagenSrc: "images/fuentec.jpg",
      precio: "52000",
      categoria:"Fuente",
      id:13,
      cantidad:1
    },
    {
      nombre: "Fuente Thermal 600w",
      imagenSrc: "images/thermaltake.png",
      precio: "34000",
      categoria:"Fuente",
      id:14,
      cantidad:1
    },
    {
      nombre: "Gabinete Corsair",
      imagenSrc: "images/gabinetec.jpg",
      precio: "62000",
      categoria:"Gabinete",
      id:15,
      cantidad:1
    },
    {
      nombre: "Gabinete Cooler Master",
      imagenSrc: "images/gabinetecooler.jpg",
      precio: "34000",
      categoria:"Gabinete",
      id:16,
      cantidad:1
    }
  ];
//retorno de productos
app.get("/api/productos", (req, res) => {
  res.send(productos);
});

app.post("/api/pay", async (req, res) => {
  const productos = req.body;
  const items = productos.map((producto) => {
    return {
      id: producto.id,
      title: producto.nombre,
      quantity: producto.cantidad,
      unit_price: parseFloat(producto.precio),
    };
  });

  const preference = {
    items: items,
    back_urls: {
      "success":"localhost:3000/index.html",
      "failure":"localhost:3000/index.html",
      "pending":"localhost:3000/index.html",
    },
    auto_return:"approved",
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    const preferenceId = response.body.id;
    res.json({ preferenceId: preferenceId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al generar la preferencia" });
  }
});
app.use("/", express.static("front"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});