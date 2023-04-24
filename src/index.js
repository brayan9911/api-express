import app from "./app";
import "./database";
import { PORT } from "./config";
//conection
const port = PORT;
app.listen(port, console.log("Conectado al puerto ", port));
