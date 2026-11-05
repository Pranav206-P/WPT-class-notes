import { Router } from "express";
import { save, getAll, getById, deleteById } from "../controllers/ProductController.js";

const productRouter = Router();

productRouter.post("/product", save);

productRouter.get("/product", getAll);

productRouter.get("/product/:id", getById );

productRouter.delete("/product/:id", deleteById);

export default productRouter;