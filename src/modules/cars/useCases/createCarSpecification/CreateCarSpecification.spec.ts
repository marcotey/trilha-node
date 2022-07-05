import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppErros';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create car specification', () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carsRepositoryInMemory,
        );
    });

    it('Should be able to add a new specification to a non existent car', async () => {
        expect(async () => {
            const car_id = '123';
            const specifications_id = ['534'];
            await createCarSpecificationUseCase.execute({
                car_id,
                specifications_id,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('Should be able to add a new specification to the car', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'marcote',
            description: 'james',
            daily_rate: 100,
            license_plate: '73gh4343',
            fine_amount: 55,
            brand: 'jamé',
            category_id: 'clalca',
        });

        const specifications_id = ['534'];
        await createCarSpecificationUseCase.execute({
            car_id: car.id,
            specifications_id,
        });
    });
});
