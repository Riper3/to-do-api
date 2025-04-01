import { Router } from 'express';
import getController from './controllers/get';
import insertController from './controllers/insert';
import updateController from './controllers/update';

const tasksRouter = Router();

tasksRouter.get('/get', getController);
tasksRouter.post('/insert', insertController);
tasksRouter.put('/update/:id', updateController);

export default tasksRouter;