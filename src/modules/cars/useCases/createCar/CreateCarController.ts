import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCarUseCase } from './CreateCarUseCase';

class CreateCarController {
    async handle(request: Request, response: Response) {
        const createCarUseCase = container.resolve(CreateCarUseCase);

        const {
            brand,
            category_id,
            description,
            daily_rate,
            fine_amount,
            license_plate,
            name,
        } = request.body;

        const car = await createCarUseCase.execute({
            brand,
            category_id,
            description,
            daily_rate,
            fine_amount,
            license_plate,
            name,
        });

        response.status(210).json(car);
    }
}

export { CreateCarController };
