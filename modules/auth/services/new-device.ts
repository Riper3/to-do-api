import { v6 } from 'uuid';
import query from '../../../utils/query';

const newDeviceService = async (req: any, res: any): Promise<any> => {

    if(!req.body?.device_id) throw new Error("MissingDeviceId");

    const deviceId = req.body.device_id;

    const sqlSelect: string = `SELECT temporal_token
                        FROM users 
                        WHERE device_id = ? && device_id != 'unknown'`;

    const temporalToken: any = await query(sqlSelect, [deviceId]);

    let token: string = '';

    if(temporalToken?.temporal_token) {
        token = temporalToken.temporal_token;
    } else {
        token = v6();

        const sqlInsert: string = `INSERT INTO users (nick_name, temporal_token, device_id, updated_date, created_date) 
                            VALUES ('NoSignUp', ?, ?, current_timestamp(), current_timestamp())`;

        const insert: any = await query(sqlInsert, [token, deviceId]);
    }

    return {token: token};
}

export default newDeviceService;