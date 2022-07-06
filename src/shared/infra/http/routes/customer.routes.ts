import { Router } from 'express';

import { CreateCustomerController } from '@modules/customers/useCases/createCustomer/CreateCustomerController';
import { ListCustomerController } from '@modules/customers/useCases/listCustomer/ListCustomerController';
import { UpdateCustomerController } from '@modules/customers/useCases/updateCustomer/UpdateCustomerController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const customerRoutes = Router();

const createCustomerController = new CreateCustomerController();
const listCustomerController = new ListCustomerController();
const updateCustomerController = new UpdateCustomerController();

customerRoutes.post('/', ensureAuthenticated, createCustomerController.handle);
customerRoutes.get('/', ensureAuthenticated, listCustomerController.handle);
customerRoutes.put('/', ensureAuthenticated, updateCustomerController.handle);

export { customerRoutes };
