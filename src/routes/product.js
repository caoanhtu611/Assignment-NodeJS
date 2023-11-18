import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, getOneProduct, updateProduct } from "../controllers/product.js";

const routerProduct = Router();

routerProduct.post("/", createProduct);
routerProduct.get("/", getAllProduct);
routerProduct.get("/:id", getOneProduct);
routerProduct.delete("/:id", deleteProduct);
routerProduct.put("/:id", updateProduct);
export default routerProduct;