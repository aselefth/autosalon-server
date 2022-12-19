import { getPurchases, addPurchase, updatePurchase, deletePurchase, getPurchase } from './purchase.controller.js';


const purchaseRoutes = (app) => {
    app.get('/purchases', async (req, res) => {
        const purchases = await getPurchases();
        res.send(purchases)
    })
    
    
    app.get('/purchases/:purchaseId', async (req, res) => {
        const purchaseId =  req.params.purchaseId;
        const purchase = await getPurchase(purchaseId)
        res.send(purchase)
    })
    
    app.post('/purchases', async (req, res) => {
        const {vin, employeeId, clientId, price} = req.body;
        const purchase = await addPurchase(vin, employeeId, clientId, price);
        res.send(purchase);
    })
    
    app.patch('/purchases/:purchaseId', async (req, res) => {
        const purchaseId =  req.params.purchaseId;
        const {vin, employeeId, clientId, price} = req.body;
        const purchase = await updatePurchase(purchaseId, vin, employeeId, clientId, price);
        res.send(purchase);
    })
    
    app.delete('/purchases/:purchaseId', async (req, res) => {
        const purchaseId =  req.params.purchaseId;
        const purchase = await deletePurchase(purchaseId)
        console.log(req.params.purchaseId);
        res.send(purchase)
    })
}

export default purchaseRoutes;