import query from '../../../utils/query';

const getAllService = async (req: any, res: any): Promise<any> => {
    const sql: string = `SELECT task_id, name, DATE_FORMAT(due_date,'%d/%m/%Y') due_date, status 
                        FROM tasks 
                        WHERE user_id = ? AND status = 1 AND due_date >= (NOW() - INTERVAL 1 DAY)
                        ORDER BY due_date`;

    const tasks: any = await query(sql, [1]);

    return tasks;
}

export default getAllService;