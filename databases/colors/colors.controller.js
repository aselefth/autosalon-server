import pool from "../bd.js";

const getColors = async () => {
    const [colors] = await pool.query(
        `select * from colors`);
    return colors;
}

const getColor = async (colorId) => {
    const [color] = await pool.query(`select * from colors where colorId = ?`, [colorId]);
    return color[0];
}

const addColor = async (colorHex) => {
    await pool.query(`insert colors 
    (colorHex)
     value (?)`, [colorHex])
}

const updateColor = async (colorId, colorHex) => {
    await pool.query('update colors set colorHex = ? where colorId = ?',
    [colorHex, colorId]
    )
}

const deleteColor = async (colorId) => {
    await pool.query('delete from colors where colorId = ?', [colorId])
}


export {getColors, getColor, addColor, updateColor, deleteColor};