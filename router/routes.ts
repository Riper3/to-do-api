import { Router } from 'express';
import tasksRouter from '../modules/tasks/routes';
import AuthRouter from '../modules/auth/routes';

const routes = Router();

routes.use('/tasks', tasksRouter);
routes.use('/auth', AuthRouter);

export default routes;