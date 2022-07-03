import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
    async findById(id: string): Promise<Car> {
        return this.cars.find(cars => cars.id === id);
    }
    cars: Car[] = [];
    async create({
        brand,
        category_id,
        description,
        daily_rate,
        fine_amount,
        license_plate,
        name,
    }: ICreateCarDTO): Promise<Car> {
        const newCar = new Car();

        Object.assign(newCar, {
            brand,
            category_id,
            description,
            daily_rate,
            fine_amount,
            license_plate,
            name,
        });
        this.cars.push(newCar);
        return newCar;
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        return this.cars.find(cars => cars.license_plate === license_plate);
    }

    async findAvaliable(
        brand?: string,
        category_id?: string,
        name?: string,
    ): Promise<Car[]> {
        const allCars = this.cars.filter(cars => {
            if (
                cars.avaliable === true ||
                (brand && cars.brand === brand) ||
                (category_id && cars.category_id === category_id) ||
                (name && cars.name === name)
            ) {
                return cars;
            }
            return null;
        });

        return allCars;
    }

    as;
}

export { CarsRepositoryInMemory };
