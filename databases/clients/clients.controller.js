import pool from "../bd.js";

const getClients = async () => {
    const [clients] = await pool.query(
        `select * from client`);
    return clients;
}

const getClient = async (clientId) => {
    const [client] = await pool.query(`select * from client where clientId = ?`, [clientId]);
    return client[0];
}

const addClient = async (name, age, passport) => {
    await pool.query(`insert client 
    (name, age, passport)
     value (?, ?, ?)`, [name, age, passport])
}

const updateClient = async (clientId, name, age, passport) => {
    await pool.query('update client set name = ?, age = ?, passport = ? where clientId = ?',
    [name, age, passport, clientId]
    )
}

const deleteClient = async (clientId) => {
    await pool.query('delete from client where clientId = ?', [clientId])
}


export {getClients, getClient, addClient, updateClient, deleteClient};