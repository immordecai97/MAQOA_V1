import { Router } from "express";
import { getCategoriesList, createCategory } from "./../controllers/category.controller.js";
const router = Router()

router.get('/', getCategoriesList)
router.post('/create', createCategory)

export default router