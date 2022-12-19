import pool from "../bd.js";


const getCurrentUser = async () => {
    const [user] = await pool.query(`select c.userId, u.access from currentUser as c join users as u on c.userId = u.userId`);
    return user[0];
}

const addCurrentUser = async (userId) => {
    await pool.query(`insert currentUser 
    (userId)
     value (?)`, [userId])
}


const quitCurrentUser = async (userId) => {
    await pool.query('delete from currentUser where userId = ?', [userId])
}

const getUsers = async () => {
    const [users] = await pool.query('select * from users');
    return users;
}

const addUser = async (login, password) => {
    await pool.query(`insert users 
    (login, password)
     value (?, ?)`, [login, password])
}


export {getCurrentUser, addCurrentUser, quitCurrentUser, getUsers, addUser};