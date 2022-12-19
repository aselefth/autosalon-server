import pool from "../bd.js";

const getEquipmentTypes = async () => {
    const [equipmentTypes] = await pool.query(
        `select * from equipmentType`);
    return equipmentTypes;
}




export {getEquipmentTypes};