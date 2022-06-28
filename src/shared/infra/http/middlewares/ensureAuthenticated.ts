import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';
import { AppError } from '@shared/errors/AppErros';

import { IAuthRequest } from '../../../../modules/accounts/types/IAuthRequest';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: IAuthRequest,
    response: Response,
    next: NextFunction,
) {
    const authheader = request.headers.authorization;

    if (!authheader) {
        throw new AppError('Token missing', 401);
    }

    const [, token] = authheader.split(' ');

    try {
        const { sub: user_id } = verify(
            token,
            'b4cc344d25a2efe540adbf2678e2304c',
        ) as IPayload;

        const userRepository = new UserRepository();
        const user = userRepository.findById(user_id);

        if (!user) {
            throw new AppError('User does not exists!', 401);
        }

        request.user = {
            id: user_id,
        };

        next();
    } catch (error) {
        throw new AppError('Invalid token!', 401);
    }
}
