import { Router } from "express";
import { login, save } from "../controllers/AdminController.js";

const adminRouter = Router();

adminRouter.post("/admin", save);
adminRouter.post("/admin/login", login);

export default adminRouter;