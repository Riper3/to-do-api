import getService from '../services/get';
import controllerModel from '../../../utils/controller';

const getController = async (req: any, res: any): Promise<any> => {
    await controllerModel(req, res, getService);
}

export default getController;