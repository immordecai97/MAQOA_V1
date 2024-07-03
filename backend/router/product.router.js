import { Router } from "express";
import authUser from './../middlewares/auth.middleware.js'
import { getProductsList, createProduct, getProductByID, updateProductByID, deleteProduct } from "./../controllers/product.controller.js";

const router = Router();

/** Traer la lista de productos GET*/
router.get("/", getProductsList);
// router.get("/", authUser, getProductsList);

/** Crear un producto POST*/
router.post("/create", createProduct);
// router.post("/create", authUser, createProduct);

/** Mostrar un producto segun si ID GET*/
router.get("/:id", getProductByID);
// router.get("/:id", authUser, getProductByID);

/** Modificar un producto segun su ID PATCH*/
router.patch("/:id", updateProductByID);
// router.patch("/:id", authUser, updateProductByID);

/** Eliminar un producto segun su ID DELETE*/
router.delete("/:id", deleteProduct);
// router.delete("/:id", authUser, deleteProduct);

export default router;