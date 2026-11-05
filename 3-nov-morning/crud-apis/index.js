import express from "express";
import welcomeRouter from './src/routers/WelcomeRouter.js';
import productRouter from "./src/routers/ProductRouter.js";
import adminRouter from "./src/routers/AdminRouter.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", welcomeRouter);
app.use("/", productRouter);
app.use("/", adminRouter);

app.listen(7500);