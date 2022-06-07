/* eslint-disable consistent-return */
import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryCrontroller {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        const impotCategoryUseCase = container.resolve(ImportCategoryUseCase);
        await impotCategoryUseCase.execute(file);
        try {
            return response.status(201).send();
        } catch (error) {
            console.log(error.message);
        }
    }
}

export { ImportCategoryCrontroller };
