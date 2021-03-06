import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory';
import { AppError } from '@shared/errors/AppErros';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(
            categoriesRepositoryInMemory,
        );
    });
    it('should be able to create a new category', async () => {
        const newCategory = {
            name: 'Category Teste',
            description: 'Category description teste',
        };
        await createCategoryUseCase.execute({
            name: newCategory.name,
            description: newCategory.description,
        });

        const categoryCreated = await categoriesRepositoryInMemory.findByName(
            newCategory.name,
        );

        expect(categoryCreated).toHaveProperty('id');
    });

    it('should not be able to create a new category with name exists', async () => {
        expect(async () => {
            const newCategory = {
                name: 'Category Teste',
                description: 'Category description teste',
            };
            await createCategoryUseCase.execute({
                name: newCategory.name,
                description: newCategory.description,
            });

            await createCategoryUseCase.execute({
                name: newCategory.name,
                description: newCategory.description,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
