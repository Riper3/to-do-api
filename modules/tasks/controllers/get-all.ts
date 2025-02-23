import getAllService from '../services/get-all';
import controllerModel from '../../../utils/controller';

const getAllController = async (req: any, res: any): Promise<any> => {
    await controllerModel(req, res, getAllService);
}

export default getAllController;