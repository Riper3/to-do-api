import query from '../../../utils/query';

const updateService = async (req: any, res: any): Promise<any> => {
    const taskId = req.params.id;

    if(!Number(taskId)) throw new Error("IdShouldBeANumber");

    const sql: string = `UPDATE tasks SET status = 1 ^ status WHERE user_id = ? AND task_id = ?`;

    const updatedTask: any = await query(sql, [1, taskId]);

    if(!updatedTask.affectedRows) throw new Error("SomethingWentWrong");

    return {};
}

export default updateService;