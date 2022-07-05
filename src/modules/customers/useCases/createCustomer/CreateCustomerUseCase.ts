import { inject, injectable } from 'tsyringe';

import { Customer } from '@modules/customers/entities/Customer';
import { ICustomerRepository } from '@modules/customers/repositories/ICustomerRepository';

interface IRequest {
    name: string;
    document: number;
}

@injectable()
class CreateCustomerUseCase {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository,
    ) {}

    async execute({ name, document }: IRequest): Promise<Customer> {
        const newCostumer = await this.customerRepository.create({
            name,
            document,
        });
        return newCostumer;
    }
}

export { CreateCustomerUseCase };
