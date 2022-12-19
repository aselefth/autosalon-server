import { getCar, getCars, addCar, updateCar, deleteCar, getCarsByName } from './car.controller.js';


const carRoutes = (app) => {
    app.get('/cars', async (req, res) => {
        const cars = await getCars();
        res.send(cars)
    })

    app.get('/cars/search/:name', async (req, res) => {
        const name = req.params.name;
        const cars = await getCarsByName(name);
        res.send(cars);
    })
    
    app.get('/cars/car/:vin', async (req, res) => {
        const vin =  req.params.vin;
        const car = await getCar(vin)
        res.send(car)
    })
    
    app.post('/cars', async (req, res) => {
        const {vin, colorId, engineId, transmissionId, bodyTypeId, carName, img} = req.body;
        const car = await addCar(vin, colorId, engineId, transmissionId, bodyTypeId, carName, img);
        res.send(car);
    })
    
    app.patch('/cars/:vin', async (req, res) => {
        const vin = req.params.vin;
        const {colorId, engineId, transmissionId, bodyTypeId, carName, img} = req.body;
        const car = await updateCar(vin, colorId, engineId, transmissionId, bodyTypeId, carName, img);
        res.send(car);
    })
    
    app.delete('/cars/:vin', async (req, res) => {
        const vin = req.params.vin;
        const car = await deleteCar(vin)
        console.log(req.params.vin);
        res.send(car)
    })
}

export default carRoutes;