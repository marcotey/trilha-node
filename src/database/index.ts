import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../modules/accounts/entities/User';
import { Category } from '../modules/cars/entities/Category';
import { Specification } from '../modules/cars/entities/Specification';

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'database_ignite',
    port: 5432,
    username: 'marcote',
    password: '123',
    database: 'BDCurso',
    entities: [Category, Specification, User],
    migrations: ['src/database/migrations/*.ts'],
});

dataSource.initialize();
