import 'dotenv/config'
import { Router } from "express";
import authUser from './../middlewares/auth.middleware.js'
import { getUsersList, createUser, getUserByID, updateUserByID, deleteUser, login, logout } from "./../controllers/user.controller.js";

const router = Router();

/** Traer la lista de usuarios GET*/
router.get("/", getUsersList);
// router.get("/", authUser, getUsersList);

/** Crear un usuario POST*/
router.post("/create", createUser);

/** Iniciar sesion del usuario POST*/
router.post("/login", login);

/** Cerrar sesion del usuario GET*/
router.post("/logout", logout);
// router.get("/logout", authUser, logout);

/** Mostrar un usuario segun si ID GET*/
router.get("/:id", getUserByID);
// router.get("/:id", authUser, getUserByID);

/** Modificar un usuario segun su ID PATCH*/
router.patch("/:id", updateUserByID);
// router.patch("/:id", authUser, updateUserByID);

/** Eliminar un usuario segun su ID DELETE*/
router.delete("/:id", deleteUser);
// router.delete("/:id", authUser, deleteUser);

export default router;