import { Router } from 'express';
import { welcome } from '../controllers/WelcomeController.js'

const welcomeRouter = Router();

welcomeRouter.get("/", welcome);

export default welcomeRouter;