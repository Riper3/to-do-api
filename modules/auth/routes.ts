import { Router } from 'express';
import newDeviceController from './controllers/new-device';

const authRouter = Router();

authRouter.post('/new-device', newDeviceController);

export default authRouter;