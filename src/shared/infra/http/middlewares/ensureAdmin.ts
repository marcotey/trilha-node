import { NextFunction, Response } from 'express';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';
import { IAuthRequest } from '@modules/accounts/types/IAuthRequest';
import { AppError } from '@shared/errors/AppErros';

export async function ensureAdmin(
    request: IAuthRequest,
    response: Response,
    next: NextFunction,
) {
    const { id } = request.user;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(id);

    if (!user.admin) {
        throw new AppError('user is not an admin!');
    }

    return next();
}
