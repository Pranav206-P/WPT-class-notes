import { Router } from "express";
import { save, getAll, getById, deleteById, update } from "../controllers/ProductController.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

const productRouter = Router();

productRouter.post("/product",  save);

productRouter.get("/product", getAll);

productRouter.get("/product/:id", getById );

productRouter.delete("/product/:id", deleteById);

productRouter.put("/product/:id", update);

export default productRouter;