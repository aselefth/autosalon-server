import {getEngines} from './engines.controller.js'


const enginesRoutes = (app) => {
    app.get('/engines', async (req, res) => {
        const engines = await getEngines();
        res.send(engines);
    })
}

export default enginesRoutes;