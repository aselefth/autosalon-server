import pool from "../bd.js";

const getTransmissions = async () => {
    const [transmissions] = await pool.query(
        `select * from transmissions`);
    return transmissions;
}

const getTransmission = async (transmissionId) => {
    const [transmissionType] = await pool.query(`select * from transmissions where transmissionId = ?`, [transmissionId]);
    return transmissionId[0];
}


export {getTransmission, getTransmissions};