import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { AppError } from '@shared/errors/AppErros';

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationsUseCase {
    constructor(
        @inject('SpecificationsRepository')
        private specificationsRepository: ISpecificationsRepository,
    ) {}
    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlredyExists =
            await this.specificationsRepository.findByName(name);

        if (specificationAlredyExists) {
            throw new AppError('Specification alredy exists!');
        }

        await this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationsUseCase };
