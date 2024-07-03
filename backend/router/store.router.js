import 'dotenv/config'
import { Router } from "express";
import authUser from './../middlewares/auth.middleware.js'
import { getStoresList, createStore, getStoreByID, updateStoreByID, deleteStore } from "./../controllers/store.controller.js";

const router = Router();

/** Traer la lista de tiendas GET*/
router.get("/", getStoresList);
// router.get("/", authUser, getStoresList);

/** Crear un tienda POST*/
router.post("/create", createStore);

/** Mostrar un tienda segun si ID GET*/
router.get("/:id", getStoreByID);
// router.get("/:id", authUser, getStoreByID);

/** Modificar un tienda segun su ID PATCH*/
router.patch("/:id", updateStoreByID);
// router.patch("/:id", authUser, updateStoreByID);

/** Eliminar un tienda segun su ID DELETE*/
router.delete("/:id", deleteStore);
// router.delete("/:id", authUser, deleteStore);

export default router;