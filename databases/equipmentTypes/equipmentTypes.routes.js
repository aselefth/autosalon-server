import {getEquipmentTypes} from './equipmentTypes.controller.js'


const equipmentTypesRoutes = (app) => {
    app.get('/equipmentTypes', async (req, res) => {
        const equipmentTypes = await getEquipmentTypes();
        res.send(equipmentTypes);
    })
}

export default equipmentTypesRoutes;