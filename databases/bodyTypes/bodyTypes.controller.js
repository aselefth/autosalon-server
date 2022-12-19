import pool from "../bd.js";

const getBodyTypes = async () => {
    const [bodyTypes] = await pool.query(
        `select * from bodyTypes`);
    return bodyTypes;
}

const getBodyType = async (bodyTypeId) => {
    const [bodyType] = await pool.query(`select * from bodyTypes where bodyTypeId = ?`, [bodyType]);
    return bodyType[0];
}


export {getBodyTypes, getBodyType};