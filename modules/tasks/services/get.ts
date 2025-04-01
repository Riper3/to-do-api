import query from '../../../utils/query';

const getService = async (req: any, res: any = {}): Promise<any> => {
    const body: any = req.body;

    let sqlWhere: string = 'AND user_id = ? ';
    let sqlParams: Array<any> = [1];

    if (Object.keys(body).length) {
        if (body.task_id) {
            if (!Number(body.task_id)) throw new Error("IdShouldBeANumber");

            sqlWhere += 'AND task_id = ?';
            sqlParams.push(body.task_id);
        }
    }

    const sql: string = `SELECT task_id, name, DATE_FORMAT(due_date,'%d/%m/%Y') due_date, status 
                        FROM tasks 
                        WHERE status = 1 AND due_date >= (NOW() - INTERVAL 1 DAY) ${sqlWhere}
                        ORDER BY due_date`;

    const tasks: any = await query(sql, sqlParams);

    return tasks;
}

export default getService;