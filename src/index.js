import express from "express";
import { dirname, join } from "path";
import { Router } from "express";
import { fileURLToPath } from "url";
import router from "./routes/index.js";
import { ConsultarProductos, getConexion } from "./public/services/conexion.js";
import cors from "cors";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(
  cors({
    origin: ["http://localhost:3000", "https://api-peli-movie.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

console.log(__dirname);
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(join(__dirname, 'public')));
app.use(router);
getConexion();
ConsultarProductos();

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
