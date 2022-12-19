import {getDepartments} from './departments.controller.js'


const departmentsRoutes = (app) => {
    app.get('/departments', async (req, res) => {
        const departments = await getDepartments();
        res.send(departments);
    })
}

export default departmentsRoutes;