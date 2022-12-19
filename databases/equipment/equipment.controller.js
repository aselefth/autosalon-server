import pool from "../bd.js";

const getEquipment = async () => {
    const [equipment] = await pool.query(
        `select e.equipmentId, et.equipmentType, e.equipmentName from equipment as e join equipmentType as et on e.typeId=et.typeId`);
    return equipment;
}

const getEquipmentById = async (equipmentId) => {
    const [equipment] = await pool.query(`select * from equipment where equipmentId = ?`, [equipmentId]);
    return equipment[0];
}

const addEquipment = async (typeId, equipmentName) => {
    await pool.query(`insert equipment 
    (typeId, equipmentName)
     value (?, ?)`, [typeId, equipmentName])
}

const updateEquipment = async (equipmentId, typeId, equipmentName) => {
    await pool.query('update equipment set typeId = ?, equipmentName = ? where equipmentId = ?',
    [typeId, equipmentName, equipmentId]
    )
}

const deleteEquipment = async (equipmentId) => {
    await pool.query('delete from equipment where equipmentId = ?', [equipmentId])
}


export {getEquipment, getEquipmentById, addEquipment, deleteEquipment, updateEquipment};