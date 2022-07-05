import { Customer } from '@modules/customers/entities/Customer';

import {
    ICreateCustomerDTO,
    ICustomerRepository,
} from '../ICustomerRepository';

class CustomerRepositoryInMemory implements ICustomerRepository {
    customers: Customer[] = [];
    async create({
        id,
        name,
        document,
    }: ICreateCustomerDTO): Promise<Customer> {
        const newCustomer = new Customer();

        if (id) {
            newCustomer.id = id;
        }

        Object.assign(newCustomer, {
            name,
            document,
        });

        this.customers.push(newCustomer);

        return newCustomer;
    }
    async update({
        id,
        name,
        document,
    }: ICreateCustomerDTO): Promise<Customer> {
        const customer = this.customers.find(customer => {
            if (customer.id === id) {
                Object.assign(customer, {
                    name,
                    document,
                });
                return customer;
            }
            return customer;
        });

        return customer;
    }
    async delete(id: string): Promise<void> {
        const customerIndex = this.customers.findIndex(
            customer => customer.id === id,
        );

        if (customerIndex >= 0) {
            this.customers.splice(customerIndex, 1);
        }
    }
    async findByID(id: string): Promise<Customer> {
        return this.customers.find(customer => customer.id === id);
    }
}

export { CustomerRepositoryInMemory };
