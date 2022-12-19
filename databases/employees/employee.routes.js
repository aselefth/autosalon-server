import { getEmployees, getEmployee, addEmployee, deleteEmployee, updateEmployee } from './employee.controller.js';


const employeeRoutes = (app) => {
    app.get('/employees', async (req, res) => {
        const employees = await getEmployees();
        res.send(employees)
    })
    
    
    app.get('/employees/:employeeId', async (req, res) => {
        const employeeId =  req.params.employeeId;
        const employee = await getEmployee(employeeId)
        res.send(employee)
    })
    
    app.post('/employees', async (req, res) => {
        const {employeeName, departmentId, equipmentId} = req.body;
        const employee = await addEmployee(employeeName, equipmentId, departmentId);
        res.send(employee);
    })
    
    app.patch('/employees/:employeeId', async (req, res) => {
        const employeeId = req.params.employeeId;
        const {employeeName, departmentId, equipmentId} = req.body;
        const employee = await updateEmployee(employeeId, employeeName, departmentId, equipmentId);
        res.send(employee);
    })
    
    app.delete('/employees/:employeeId', async (req, res) => {
        const employeeId = req.params.employeeId;
        const employee = await deleteEmployee(employeeId)
        console.log(req.params.employeeId);
        res.send(employee)
    })
}

export default employeeRoutes;