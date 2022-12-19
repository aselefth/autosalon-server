import pool from "../bd.js";

const getEmployees = async () => {
    const [employees] = await pool.query(
        `select e.employeeId, e.employeeName, d.departmentName, eq.equipmentName from employee as e
        join department as d on e.departmentId = d.departmentId
        join equipment as eq on e.equipmentId = eq.equipmentId`);
    return employees;
}

const getEmployee = async (employeeId) => {
    const [employee] = await pool.query(`select * from employee where employeeId = ?`, [employeeId]);
    return employee[0];
}

const addEmployee = async (employeeName, equipmentId, departmentId) => {
    await pool.query(`insert employee 
    (employeeName, equipmentId, departmentId)
     value (?, ?, ?)`, [employeeName, equipmentId, departmentId])
}

const updateEmployee = async (employeeId, employeeName, equipmentId, departmentId) => {
    await pool.query(`update employee set employeeName = ?, 
    equipmentId = ?, departmentId = ? where employeeId = ?`,
    [employeeName, equipmentId, departmentId, employeeId]
    )
}

const deleteEmployee = async (employeeId) => {
    await pool.query('delete from employee where employeeId = ?', [employeeId])
}


export {getEmployees, getEmployee, updateEmployee, deleteEmployee, addEmployee}