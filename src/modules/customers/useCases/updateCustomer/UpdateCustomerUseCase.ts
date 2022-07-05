import { inject, injectable } from 'tsyringe';

import { Customer } from '@modules/customers/entities/Customer';
import {
    ICreateCustomerDTO,
    ICustomerRepository,
} from '@modules/customers/repositories/ICustomerRepository';
import { AppError } from '@shared/errors/AppErros';

@injectable()
class UpdateCustomerUseCase {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository,
    ) {}
    async execute({
        id,
        document,
        name,
    }: ICreateCustomerDTO): Promise<Customer> {
        const customerExists = await this.customerRepository.findByID(id);

        if (!customerExists) {
            throw new AppError('cliente inexistente', 404);
        }

        await this.customerRepository.delete(`customer:${id}`);

        const customer = await this.customerRepository.create({
            id,
            document,
            name,
        });

        return customer;
    }
}

export { UpdateCustomerUseCase };
