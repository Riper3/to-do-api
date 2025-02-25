import newDeviceService from '../services/new-device';
import controllerModel from '../../../utils/controller';

const newDeviceController = async (req: any, res: any): Promise<any> => {
    await controllerModel(req, res, newDeviceService);
}

export default newDeviceController;