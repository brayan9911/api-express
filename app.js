import * as Controller from './controller'
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    autor: "Brayan Cañon",
    descripcion: "Mi primera API",
  });
});

app.get("/pelicula", Controller.obtenerTodos);

app.get("/pelicula/:id", Controller.obtenerUno);

app.post("/pelicula", Controller.crearUno);

app.put("/pelicula/:id", Controller.actualizarUno);

app.delete("/pelicula/:id", Controller.eliminarUno);

export default app;
