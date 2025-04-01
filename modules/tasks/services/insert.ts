import query from '../../../utils/query';
import getService from './get';

const insertService = async (req: any, res: any): Promise<any> => {
    const body = req.body;

    if(!body.name) throw new Error("MissingName");
    if(!body.due_date) throw new Error("MissingDueDate");

    const sql: string = `INSERT INTO tasks (user_id, name, due_date, created_date, updated_date, status) 
                VALUES (?, ?, ?, current_timestamp(), current_timestamp(), 1)`;

    const taskInserted: any = await query(sql, [1, body.name, new Date(body.due_date)]);

    return getService({body: {task_id: taskInserted.insertId}});
}

export default insertService;