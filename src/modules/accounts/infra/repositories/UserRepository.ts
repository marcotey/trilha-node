import { Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';
import { dataSource } from '@shared/infra/typeorm';

import { User } from '../typeorm/entities/User';

class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = dataSource.getRepository(User);
    }

    async create({
        name,
        password,
        email,
        driver_license,
        avatar,
        id,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            password,
            email,
            driver_license,
            avatar,
            id,
        });
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOneBy({ email });

        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOneBy({ id });

        return user;
    }
}

export { UserRepository };
