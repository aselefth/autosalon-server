import pool from "../bd.js";

const getCars = async () => {
    const [cars] = await pool.query(
        `select c.vin, col.colorHex, e.engineName, tr.transmissionType, b.bodyType, c.carName, c.img
        from car as c 
        join colors as col on c.colorId = col.colorId 
        join engines as e on c.engineId = e.engineId 
        join transmissions as tr on c.transmissionId = tr.transmissionId 
        join bodyTypes as b on c.bodyTypeId = b.bodyTypeId`);
    return cars;
}

const getCarsByName = async (name) => {
    const [cars] = await pool.query(`
    select c.vin, col.colorHex, e.engineName, tr.transmissionType, b.bodyType, c.carName, c.img
        from car as c 
        join colors as col on c.colorId = col.colorId 
        join engines as e on c.engineId = e.engineId 
        join transmissions as tr on c.transmissionId = tr.transmissionId 
        join bodyTypes as b on c.bodyTypeId = b.bodyTypeId where c.carName like '%${name}%'`);
    return cars;
}

const getCar = async (vin) => {
    const [car] = await pool.query(`select * from car where vin = ?`, [vin]);
    return car[0];
}

const addCar = async (vin, colorId, engineId, transmissionId, bodyTypeId, carName, img) => {
    await pool.query(`insert car 
    (vin, colorId, engineId, transmissionId, bodyTypeId, carName, img)
     value (?, ?, ?, ?, ?, ?, ?)`, [vin, colorId, engineId, transmissionId, bodyTypeId, carName, img])
}

const updateCar = async (vin, colorId, engineId, transmissionId, bodyTypeId, carName, img) => {
    await pool.query('update car set colorId = ?, engineId = ?, transmissionId = ?, bodyTypeId = ?, carName = ?, img = ? where vin = ?',
    [colorId, engineId, transmissionId, bodyTypeId, carName, img, vin]
    )
}

const deleteCar = async (vin) => {
    await pool.query('delete from car where vin = ?', [vin])
}


export {getCars, getCar, addCar, updateCar, deleteCar, getCarsByName}