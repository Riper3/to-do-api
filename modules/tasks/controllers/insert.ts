import insertService from '../services/insert';
import controllerModel from '../../../utils/controller';

const insertController = async (req: any, res: any): Promise<any> => {
    await controllerModel(req, res, insertService);
}

export default insertController;