import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCustomerUseCase } from './CreateCustomerUseCase';

class CreateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { document, name } = request.body;

        const customerRepository = container.resolve(CreateCustomerUseCase);

        const newCustomer = await customerRepository.execute({
            document,
            name,
        });

        return response.status(201).json(newCustomer);
    }
}

export { CreateCustomerController };
