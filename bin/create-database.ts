require('dotenv').config();

const mysql = require('mysql');

let db = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
});

const dbname = process.env.DB_NAME;

const query = (sql: string) => {
    return new Promise((resolve, reject) => {
      db.query(sql, (err: any, result: any, fields: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
};

const createDatabase = async () => {
    await query(`CREATE DATABASE `+ dbname);

    console.log('✅', dbname +' database created!');
  
    db.end();
  
    db = mysql.createConnection({
      host     : process.env.DB_HOST,
      user     : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : dbname
    });

    console.log('✅', 'Creating tables ...');

    query(`CREATE TABLE users (
        user_id int PRIMARY KEY AUTO_INCREMENT,
        nick_name varchar(255) NOT NULL,
        first_name varchar(255),
        last_name varchar(255),
        email varchar(255),
        password varchar(255),
        created_date date,
        updated_date date,
        requests int
    );`);

    query(`CREATE TABLE tasks (
        task_id int PRIMARY KEY AUTO_INCREMENT,
        user_id int NOT NULL,
        name varchar(255) NOT NULL,
        due_date date,
        created_date date,
        updated_date date,
        status int
    );`);

    db.end();

    console.log('🎉', 'Done!');
}

query(`DROP DATABASE IF EXISTS `+ dbname);

createDatabase();