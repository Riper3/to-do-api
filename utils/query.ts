require('dotenv').config();

import mysql from 'mysql';

const db = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

db.connect();

const query = (sql: string, values: Array<any> = []) => {
    return new Promise((resolve, reject) => {
      db.query(sql, values, (err: any, result: any, fields: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
};

export default query;