import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: "password",
    database: 'automobile_production'
}).promise();


export default pool