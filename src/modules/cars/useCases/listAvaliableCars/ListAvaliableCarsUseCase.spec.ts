import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvaliableCarsUseCase } from './ListAvaliableCarsUseCase';

let listCarsUseCase: ListAvaliableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe('List Cars', () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listCarsUseCase = new ListAvaliableCarsUseCase(carsRepositoryInMemory);
    });

    it('should be able to list all avaliable cars', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'HRV',
            description: 'hrv lindão',
            daily_rate: 100,
            license_plate: 'james321',
            fine_amount: 55,
            brand: 'Honda',
            category_id: 'a345b22f-46ee-45fe-828b-d26146853150',
        });
        const cars = await listCarsUseCase.execute({});
        expect(cars).toEqual([car]);
    });

    it('should be able to list all avaliable cars by name', async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'HRV',
            description: 'hrv lindão',
            daily_rate: 100,
            license_plate: 'james321',
            fine_amount: 55,
            brand: 'Honda',
            category_id: 'a345b22f-46ee-45fe-828b-d26146853150',
        });

        const cars = await listCarsUseCase.execute({ name: 'HRV' });
        expect(cars).toEqual([car]);
    });
});
