const getAll = async (req: any, res: any): Promise<any> => {
    res.status(200).json({response: []});
}

export default getAll;