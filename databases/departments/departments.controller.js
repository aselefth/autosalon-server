import pool from "../bd.js";

const getDepartments = async () => {
    const [departments] = await pool.query(
        `select * from department`);
    return departments;
}




export {getDepartments};