import express from 'express';
import cors from 'cors';
import carRoutes from './databases/cars/car.routes.js';
import colorRoutes from './databases/colors/colors.routes.js';
import enginesRoutes from './databases/engines/engines.routes.js';
import clientsRoutes from './databases/clients/clients.routes.js';
import bodyTypesRoutes from './databases/bodyTypes/bodyTypes.routes.js';
import transmissionsRoutes from './databases/transmissions/transmissions.routes.js';
import departmentsRoutes from './databases/departments/departments.routes.js';
import equipmentTypesRoutes from './databases/equipmentTypes/equipmentTypes.routes.js';
import equipmentRoutes from './databases/equipment/equipment.routes.js';
import employeeRoutes from './databases/employees/employee.routes.js';
import purchaseRoutes from './databases/purchases/purchase.routes.js';
import authRoutes from './databases/authorization/auth.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

enginesRoutes(app);
carRoutes(app);
colorRoutes(app);
clientsRoutes(app);
bodyTypesRoutes(app);
transmissionsRoutes(app);
departmentsRoutes(app);
equipmentTypesRoutes(app);
equipmentRoutes(app);
employeeRoutes(app);
purchaseRoutes(app);
authRoutes(app);

app.listen(3001, () => {
    console.log('app is running');
})

export default app;