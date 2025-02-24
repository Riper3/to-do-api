import updateService from '../services/update';
import controllerModel from '../../../utils/controller';

const updateController = async (req: any, res: any): Promise<any> => {
    await controllerModel(req, res, updateService);
}

export default updateController;