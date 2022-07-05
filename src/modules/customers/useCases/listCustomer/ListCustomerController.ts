import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCustomerUseCase } from './ListCustomerUseCase';

class ListCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.query;

        const customerRepository = container.resolve(ListCustomerUseCase);

        const customer = await customerRepository.execute(String(id));

        return response.status(200).json(customer);
    }
}

export { ListCustomerController };
