import pool from "../bd.js";

const getPurchases = async () => {
    const [purchases] = await pool.query(
        `select p.purchaseId, c.carName, e.employeeName, cl.name, p.price, p.vin from purchase as p
        join car as c on p.vin = c.vin
        join employee as e on p.employeeId = e.employeeId
        join client as cl on p.clientId = cl.clientId`);
    return purchases;
}

const getPurchase = async (purchaseId) => {
    const [purchase] = await pool.query(`select * from purchase where purchaseId = ?`, [purchaseId]);
    return purchase[0];
}

const addPurchase = async (vin, employeeId, clientId, price) => {
    await pool.query(`insert purchase 
    (vin, employeeId, clientId, price)
     value (?, ?, ?, ?)`, [vin, employeeId, clientId, price])
}

const updatePurchase = async (purchaseId, vin, employeeId, clientId, price) => {
    await pool.query('update purchase set vin = ?, employeeId = ?, clientId = ?, price = ? where purchaseId = ?',
    [vin, employeeId, clientId, price, purchaseId]
    )
}

const deletePurchase = async (purchaseId) => {
    await pool.query('delete from purchase where purchaseId = ?', [purchaseId])
}


export {getPurchases, getPurchase, addPurchase, updatePurchase, deletePurchase}