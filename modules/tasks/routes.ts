import { Router } from 'express';
import getAllController from './controllers/get-all';

const tasksRouter = Router();

tasksRouter.get('/get-all', getAllController);

export default tasksRouter;