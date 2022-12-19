import pool from "../bd.js";

const getEngines = async () => {
    const [engines] = await pool.query(
        `select * from engines`);
    return engines;
}




export {getEngines};