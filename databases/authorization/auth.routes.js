import {getCurrentUser, addCurrentUser, quitCurrentUser, getUsers, addUser} from './auth.controller.js'


const authRoutes = (app) => {
    app.get('/login', async (req, res) => {
        const currentUser = await getCurrentUser();
        res.send(currentUser);
    })
    
    app.post('/login', async (req, res) => {
        const {userId} = req.body;
        const user = await addCurrentUser(userId);
        res.send(user);
    })
    
    app.delete('/login/:userId', async (req, res) => {
        const userId = req.params.userId;
        const user = await quitCurrentUser(userId);
        res.send(user);
    })

    app.get('/register', async (req, res) => {
        const users = await getUsers();
        res.send(users);
    })

    app.post('/register', (req, res) => {
        const {login, password} = req.body;
        const user = addUser(login, password);
        res.send(user);
    })
}

export default authRoutes;