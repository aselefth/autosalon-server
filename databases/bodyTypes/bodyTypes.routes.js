import {getBodyTypes, getBodyType} from './bodyTypes.controller.js'


const bodyTypesRoutes = (app) => {
    app.get('/bodyTypes', async (req, res) => {
        const bodyTypes = await getBodyTypes();
        res.send(bodyTypes);
    })
    
    
    app.get('/bodyTypes/:bodyTypeId', async (req, res) => {
        const bodyTypeId =  req.params.bodyTypeId;
        const bodyType = await getBodyType(bodyTypeId);
        res.send(bodyType);
    })
    
}

export default bodyTypesRoutes;