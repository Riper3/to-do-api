import { Router } from 'express';
import tasksRouter from '../modules/tasks/routes';

const routes = Router();

routes.use('/tasks', tasksRouter);

export default routes;