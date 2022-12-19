import {getEquipment, getEquipmentById, addEquipment, deleteEquipment, updateEquipment} from './equipment.controller.js'


const equipmentRoutes = (app) => {
    app.get('/equipment', async (req, res) => {
        const equipment = await getEquipment();
        res.send(equipment);
    })
    
    
    app.get('/equipment/:equipmentId', async (req, res) => {
        const equipmentId =  req.params.equipmentId;
        const equipment = await getEquipmentById(equipmentId)
        res.send(equipment);
    })
    
    app.post('/equipment', async (req, res) => {
        const {typeId, equipmentName} = req.body;
        const equipment = await addEquipment(typeId, equipmentName);
        res.send(equipment);
    })
    
    app.patch('/equipment/:equipmentId', async (req, res) => {
        const equipmentId =  req.params.equipmentId;
        const {typeId, equipmentName} = req.body;
        const equipment = await updateEquipment(equipmentId, typeId, equipmentName);
        res.send(equipment);
    })
    
    app.delete('/equipment/:equipmentId', async (req, res) => {
        const equipmentId = req.params.equipmentId;
        const equipment = await deleteEquipment(equipmentId);
        console.log(req.params.equipmentId);
        res.send(equipment);
    })
}

export default equipmentRoutes;