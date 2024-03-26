import express from "express";
import {
  addproduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controller/product";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", addproduct);
router.put("/products", updateProduct);
router.delete("/products", deleteProduct);
export default router;
