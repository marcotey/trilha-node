import { DataSource } from 'typeorm';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

import 'reflect-metadata';

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'database_ignite',
    port: 5432,
    username: 'marcote',
    password: '123',
    database: 'BDCurso',
    entities: [Category, Specification, User, Car],
    migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
});

dataSource.initialize();
