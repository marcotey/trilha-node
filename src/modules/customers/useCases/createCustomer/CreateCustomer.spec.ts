import { Customer } from '@modules/customers/entities/Customer';
import { CustomerRepositoryInMemory } from '@modules/customers/repositories/in-memory/CustomerRepositoryInMemory';

import { ListCustomerUseCase } from '../listCustomer/ListCustomerUseCase';
import { UpdateCustomerUseCase } from '../updateCustomer/UpdateCustomerUseCase';
import { CreateCustomerUseCase } from './CreateCustomerUseCase';

let customerRespository: CustomerRepositoryInMemory;
let createCustomerUseCase: CreateCustomerUseCase;
let listCustomerUseCase: ListCustomerUseCase;
let updateCustomerUseCase: UpdateCustomerUseCase;

describe('Create Customer', () => {
    beforeEach(() => {
        customerRespository = new CustomerRepositoryInMemory();

        createCustomerUseCase = new CreateCustomerUseCase(customerRespository);

        listCustomerUseCase = new ListCustomerUseCase(customerRespository);

        updateCustomerUseCase = new UpdateCustomerUseCase(customerRespository);
    });

    it('Should be able to create a new Customer e find it by Id', async () => {
        const customer = await createCustomerUseCase.execute({
            name: 'Marco Antonio',
            document: 123,
        });

        const newCustomer = await listCustomerUseCase.execute(customer.id);

        expect(newCustomer).toEqual(customer);
    });

    it('should be able to update a customer', async () => {
        const customer = await createCustomerUseCase.execute({
            name: 'Marco Antonio',
            document: 123,
        });

        const customerUpdated = await updateCustomerUseCase.execute({
            name: 'James',
            document: 65321,
            id: customer.id,
        });
        console.log(customerUpdated);
        expect(customerUpdated).toEqual({
            name: 'James',
            document: 65321,
            id: customer.id,
        });
    });
});
