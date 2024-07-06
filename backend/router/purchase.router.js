import 'dotenv/config'
import { Router } from "express";
import authUser from './../middlewares/auth.middleware.js'
import { getPurchasesList, createPurchase, getPurchaseByID, updatePurchaseByID, deletePurchase } from "./../controllers/purchase.controller.js";

const router = Router();

/** Traer la lista de compras GET*/
router.get("/", getPurchasesList);
// router.get("/", authUser, getPurchasesList);

/** Crear un compra POST*/
router.post("/create", createPurchase);

/** Mostrar un compra segun si ID GET*/
router.get("/:id", getPurchaseByID);
// router.get("/:id", authUser, getPurchaseByID);

/** Modificar un compra segun su ID PATCH*/
router.patch("/:id", updatePurchaseByID);
// router.patch("/:id", authUser, updatePurchaseByID);

/** Eliminar un compra segun su ID DELETE*/
router.delete("/:id", deletePurchase);
// router.delete("/:id", authUser, deletePurchase);

export default router;