import { Router } from "express";
import routerProduct from "./product.js";

const router = Router();

router.use("/products", routerProduct)
export default router;