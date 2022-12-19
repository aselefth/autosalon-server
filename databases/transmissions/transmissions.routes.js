import {getTransmissions, getTransmission} from './transmissions.controller.js'


const transmissionsRoutes = (app) => {
    app.get('/transmissions', async (req, res) => {
        const transmissions = await getTransmissions();
        res.send(transmissions);
    })
    
    
    app.get('/transmissions/:transmissionId', async (req, res) => {
        const transmissionId =  req.params.transmissionId;
        const transmissionType = await getTransmission(transmissionId);
        res.send(transmissionId);
    })
    
}

export default transmissionsRoutes;