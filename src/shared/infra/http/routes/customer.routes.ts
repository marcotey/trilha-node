import { Router } from 'express';

import { CreateCustomerController } from '@modules/customers/useCases/createCustomer/CreateCustomerController';
import { ListCustomerController } from '@modules/customers/useCases/listCustomer/ListCustomerController';
import { UpdateCustomerController } from '@modules/customers/useCases/updateCustomer/UpdateCustomerController';

const customerRoutes = Router();

const createCustomerController = new CreateCustomerController();
const listCustomerController = new ListCustomerController();
const updateCustomerController = new UpdateCustomerController();

customerRoutes.post('/', createCustomerController.handle);
customerRoutes.get('/', listCustomerController.handle);
customerRoutes.put('/', updateCustomerController.handle);

export { customerRoutes };
