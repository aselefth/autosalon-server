import {getColors, getColor, updateColor, addColor, deleteColor} from './colors.controller.js'


const colorsRoutes = (app) => {
    app.get('/colors', async (req, res) => {
        const colors = await getColors();
        res.send(colors);
    })
    
    
    app.get('/colors/:colorId', async (req, res) => {
        const colorId =  req.params.colorId;
        const color = await getColor(colorId)
        res.send(color)
    })
    
    app.post('/colors', async (req, res) => {
        const {colorHex} = req.body;
        const color = await addColor(colorHex);
        res.send(color);
    })
    
    app.patch('/colors/:colorId', async (req, res) => {
        const colorId = req.params.colorId;
        const {colorHex} = req.body;
        const color = await updateColor(colorId, colorHex);
        res.send(color);
    })
    
    app.delete('/colors/:colorId', async (req, res) => {
        const colorId = req.params.colorId;
        const color = await deleteColor(colorId);
        console.log(req.params.colorId);
        res.send(color);
    })
}

export default colorsRoutes;