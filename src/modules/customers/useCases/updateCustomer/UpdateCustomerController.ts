import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

class UpdateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name, document } = request.body;

        const updateCustomerUseCase = container.resolve(UpdateCustomerUseCase);

        const costumer = await updateCustomerUseCase.execute({
            id,
            name,
            document,
        });

        return response.status(200).json(costumer);
    }
}

export { UpdateCustomerController };
