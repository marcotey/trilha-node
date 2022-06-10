import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';

import { IUserRepository } from '../IUserRepository';

class UserRepositoryInMemory implements IUserRepository {
    user: User[] = [];
    async create({
        name,
        driver_license,
        email,
        password,
    }: ICreateUserDTO): Promise<void> {
        const newUser = new User();

        Object.assign(newUser, {
            name,
            driver_license,
            email,
            password,
        });

        this.user.push(newUser);
    }

    async findByEmail(email: string): Promise<User> {
        return this.user.find(user => user.email === email);
    }

    async findById(Id: string): Promise<User> {
        return this.user.find(user => user.id === Id);
    }
}

export { UserRepositoryInMemory };
