const { DataTypes } = require("sequelize");
import sequelize from "../database";

const Pelicula = sequelize.define(
  "pelicula",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "pelicula",
  }
);

export default Pelicula;
