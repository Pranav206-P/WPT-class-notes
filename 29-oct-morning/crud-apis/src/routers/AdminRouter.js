import { Router } from "express";
import { save } from "../controllers/AdminController.js";

const adminRouter = Router();

adminRouter.post("/admin", save);

export default adminRouter;