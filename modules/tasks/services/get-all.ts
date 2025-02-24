import query from '../../../utils/query';

const getAllService = async (req: any, res: any): Promise<any> => {
    const sql: string = `SELECT task_id, name, due_date, status FROM tasks WHERE user_id = ?`;

    const tasks: any = await query(sql, [1]);

    return tasks;
}

export default getAllService;