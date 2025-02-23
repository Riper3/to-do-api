interface ResObject {
    response: string;
    data?: any;
    error?: any;
}

const controllerModel = async (req: any, res: any, service: any) => {
    const response: ResObject = {
        response: ''
    };

    try {
      const data = await service(req);

      response.response = 'successful';
      response.data = data;
  
      res.status(200).json(response);
  
    } catch (error) {
      response.response = 'error';
      response.error = error;
  
      res.status(400).json(response);
  
    }
  }
  
export default controllerModel;