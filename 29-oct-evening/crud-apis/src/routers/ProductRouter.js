import { Router } from "express";
import { save, getAll, getById, deleteById } from "../controllers/ProductController.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

const productRouter = Router();

productRouter.post("/product", verifyToken,  save);

productRouter.get("/product", verifyToken, getAll);

productRouter.get("/product/:id", verifyToken,  getById );

productRouter.delete("/product/:id", verifyToken, deleteById);

export default productRouter;