import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UserRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UserRepositoryInMemory';
import { AppError } from '@shared/errors/AppErros';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
        authenticateUserUseCase = new AuthenticateUserUseCase(
            userRepositoryInMemory,
        );
    });

    it('should be able to authenticate an user', async () => {
        const user: ICreateUserDTO = {
            driver_license: '00123',
            email: 'user@123.com',
            password: '123',
            name: 'Marcote',
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute(user);

        expect(result).toHaveProperty('token');
    });

    it('should not be able to authenticate a none existent user ', async () => {
        await expect(
            authenticateUserUseCase.execute({
                email: 'maluco ta doido',
                password: '123',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to authenticate an user with wrong password', async () => {
        const user: ICreateUserDTO = {
            driver_license: '999',
            email: 'user@erroPassword.com',
            password: 'xablau',
            name: 'user password incorrect',
        };

        await createUserUseCase.execute(user);

        await expect(
            authenticateUserUseCase.execute({
                email: user.email,
                password: 'maluco ta doido',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
