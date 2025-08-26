import express from "express";
import { addProduct, getMyProducts } from "../controllers/productController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/", authMiddleware, addProduct);
router.get("/", authMiddleware, getMyProducts);

export default router;
