import { Customer } from '../entities/Customer';

interface ICreateCustomerDTO {
    id?: string;
    name: string;
    document: number;
}

interface ICustomerRepository {
    create({ id, name, document }: ICreateCustomerDTO): Promise<Customer>;
    update({ id, name, document }: ICreateCustomerDTO): Promise<Customer>;
    delete(id: string): Promise<void>;
    findByID(id: string): Promise<Customer>;
}

export { ICustomerRepository, ICreateCustomerDTO };
