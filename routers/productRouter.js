import { Router } from "express";
import { get_all_products } from "../controllers/productController.js";

const productRouter = Router();


productRouter.get("/all", get_all_products)

export default productRouter;