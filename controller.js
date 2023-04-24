import Pelicula from "./models/peliculas";

export const obtenerTodos = async (req, res) => {
  const pelicula = await Pelicula.findAll();
  res.json(pelicula);
};

export const obtenerUno = async (req, res) => {
  const pelicula = await Pelicula.findByPk(req.params.id);
  res.json(pelicula);
};

export const crearUno = async (req, res) => {
  await Pelicula.create(req.body);
  res.json({ message: "Pelicula creada" });
};

export const actualizarUno = async (req, res) => {
  const pelicula = await Pelicula.findByPk(req.params.id);
  await pelicula.update(req.body);
  res.json({ message: "pelicula actualizada" });
};

export const eliminarUno = async (req, res) => {
  const pelicula = await Pelicula.findByPk(req.params.id);
  await pelicula.destroy();
  res.json({ message: "pelicula eliminada" });
};
