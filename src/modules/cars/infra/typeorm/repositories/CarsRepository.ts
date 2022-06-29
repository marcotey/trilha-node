import { Repository } from 'typeorm';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { dataSource } from '@shared/infra/typeorm';

import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = dataSource.getRepository(Car);
    }
    async findAvaliable(
        brand?: string,
        name?: string,
        category_id?: string,
    ): Promise<Car[]> {
        const carsQuery = await this.repository
            .createQueryBuilder('c')
            .where('avaliable = :avaliable', { avaliable: true });

        if (brand) {
            carsQuery.andWhere('c.brand = :brand', { brand });
        }

        if (brand) {
            carsQuery.andWhere('c.category_id = :category_id', { category_id });
        }

        if (brand) {
            carsQuery.andWhere('c.name = :name', { name });
        }

        const cars = await carsQuery.getMany();

        return cars;
    }

    async create({
        brand,
        category_id,
        description,
        daily_rate,
        fine_amount,
        license_plate,
        name,
    }: ICreateCarDTO): Promise<Car> {
        const newCar = this.repository.create({
            brand,
            category_id,
            description,
            daily_rate,
            fine_amount,
            license_plate,
            name,
        });

        await this.repository.save(newCar);

        return newCar;
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOneBy({ license_plate });
        return car;
    }
}

export { CarsRepository };
