import { request, Router } from "express";
import { ConsultarProductos } from "../public/services/conexion.js";


const router = Router();
router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
router.get("/cartelera", (req, res) => {
  res.render("cartelera", { title: "Cartelera" });
});
router.get("/catalogo", (req, res) => {
  res.render("catalogo", { title: "Catálogo" });
});

router.get("/api/productos", async (req, res) =>{
    console.log("API Productos");
    try {
        const productos = await ConsultarProductos();
        console.log(productos); 
        if (productos.length > 0){
            res.json(productos);
        } else {
            res.status(404).json({message: "No se encontraron productos"});
        }
    } catch (error) {
        console.log(error);
    }
})

export default router; 
