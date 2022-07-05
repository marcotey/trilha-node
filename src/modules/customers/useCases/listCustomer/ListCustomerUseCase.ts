import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import { Customer } from '@modules/customers/entities/Customer';
import { ICustomerRepository } from '@modules/customers/repositories/ICustomerRepository';
import { AppError } from '@shared/errors/AppErros';

@injectable()
class ListCustomerUseCase {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository,
    ) {}
    async execute(id: string): Promise<Customer> {
        const customer = await this.customerRepository.findByID(id);
        if (!customer) {
            throw new AppError('cliente inexistente', 404);
        }
        return customer;
    }
}

export { ListCustomerUseCase };
