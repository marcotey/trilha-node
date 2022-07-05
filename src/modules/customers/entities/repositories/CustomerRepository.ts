import 'reflect-metadata';
import {
    ICustomerRepository,
    ICreateCustomerDTO,
} from '@modules/customers/repositories/ICustomerRepository';
import { delRedis, getRedis, setRedis } from '@utils/redisConfig';

import { Customer } from '../Customer';

class CustomerRepository implements ICustomerRepository {
    async delete(id: string): Promise<void> {
        await delRedis(`customer:${id}`);
    }
    async create({
        name,
        document,
        id,
    }: ICreateCustomerDTO): Promise<Customer> {
        const newCustomer = new Customer();
        Object.assign(newCustomer, { name, document, id });
        await setRedis(
            `customer:${newCustomer.id}`,
            JSON.stringify(newCustomer),
        );
        return newCustomer;
    }
    update(data: ICreateCustomerDTO): Promise<Customer> {
        throw new Error('Method not implemented.');
    }
    async findByID(id: string): Promise<Customer> {
        const userRedis = await getRedis(`customer:${id}`);
        const user = JSON.parse(userRedis);
        return user;
    }
}

export { CustomerRepository };
