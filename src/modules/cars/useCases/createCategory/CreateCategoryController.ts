import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;
        try {
            const createCategoryUseCase = container.resolve(
                CreateCategoryUseCase,
            );
            await createCategoryUseCase.execute({ name, description });
        } catch (err) {
            return response.status(400).json({ message: err.message });
        }

        return response.status(201).send();
    }
}

export { CreateCategoryController };
