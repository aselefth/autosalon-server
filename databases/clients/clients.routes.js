import {getClients, getClient, updateClient, addClient, deleteClient} from './clients.controller.js'


const clientsRoutes = (app) => {
    app.get('/clients', async (req, res) => {
        const clients = await getClients();
        res.send(clients);
    })
    
    
    app.get('/clients/:clientId', async (req, res) => {
        const clientId =  req.params.clientId;
        const client = await getClient(clientId);
        res.send(client);
    })
    
    app.post('/clients', async (req, res) => {
        const {name, age, passport} = req.body;
        const client = await addClient(name, age, passport);
        res.send(client);
    })
    
    app.patch('/clients/:clientId', async (req, res) => {
        const clientId = req.params.clientId;
        const {name, age, passport} = req.body;
        const client = await updateClient(clientId, name, age, passport);
        res.send(client);
    })
    
    app.delete('/clients/:clientId', async (req, res) => {
        const clientId = req.params.clientId;
        const client = await deleteClient(clientId);
        res.send(client);
    })
}

export default clientsRoutes;