import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppErros';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;

let carsRepository: CarsRepositoryInMemory;

describe('Create Car', () => {
    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepository);
    });

    it('should be able to create a new car', async () => {
        const car = await createCarUseCase.execute({
            name: 'marcote',
            description: 'james',
            daily_rate: 100,
            license_plate: '73gh4343',
            fine_amount: 55,
            brand: 'jamé',
            category_id: 'clalca',
        });
        expect(car).toHaveProperty('id');
    });
    it('should not be able to create a new car with exists license plate', async () => {
        await createCarUseCase.execute({
            name: 'marcote',
            description: 'james',
            daily_rate: 100,
            license_plate: '73gh4343',
            fine_amount: 55,
            brand: 'jamé',
            category_id: 'clalca',
        });
        await expect(
            createCarUseCase.execute({
                name: 'marcote',
                description: 'james',
                daily_rate: 100,
                license_plate: '73gh4343',
                fine_amount: 55,
                brand: 'jamé',
                category_id: 'clalca',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should be able to create a new car with propertie avaliable true', async () => {
        const newCar = await createCarUseCase.execute({
            name: 'marcote',
            description: 'james',
            daily_rate: 100,
            license_plate: '73gh4343',
            fine_amount: 55,
            brand: 'jamé',
            category_id: 'clalca',
        });
        expect(newCar.avaliable).toBe(true);
    });
});
