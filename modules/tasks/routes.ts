import { Router } from 'express';
import getAllController from './controllers/get-all';
import insertController from './controllers/insert';
import updateController from './controllers/update';

const tasksRouter = Router();

tasksRouter.get('/get-all', getAllController);
tasksRouter.post('/insert', insertController);
tasksRouter.put('/update/:id', updateController);

export default tasksRouter;