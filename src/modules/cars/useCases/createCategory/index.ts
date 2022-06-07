/* import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export default () => {
    const createCategoriesRepository = new CategoriesRepository(); // CategoriesRepository.getInstance();

    const createCategoryUseCase = new CreateCategoryUseCase(
        createCategoriesRepository,
    );

    const createCategoryController = new CreateCategoryController(
        createCategoryUseCase,
    );

    return createCategoryController;
};
 */
