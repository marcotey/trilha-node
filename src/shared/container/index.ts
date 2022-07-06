import { container } from 'tsyringe';

import { CustomerRepository } from '@modules/customers/entities/repositories/CustomerRepository';
import { ICustomerRepository } from '@modules/customers/repositories/ICustomerRepository';

container.registerSingleton<ICustomerRepository>(
    'CustomerRepository',
    CustomerRepository,
);
