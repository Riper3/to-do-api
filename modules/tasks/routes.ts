import { Router } from 'express';
import getAll from './services/get-all';

const tasksRouter = Router();

tasksRouter.get('/get-all', getAll);

export default tasksRouter;