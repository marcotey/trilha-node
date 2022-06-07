import Router from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryCrontroller } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategory/ListCategoriesController';

const categoriesRoutes = Router();

const upload = multer({
    dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryCrontroller = new ImportCategoryCrontroller();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.post(
    '/import',
    upload.single('file'),
    importCategoryCrontroller.handle,
);

categoriesRoutes.get('/', listCategoriesController.handle);

export { categoriesRoutes };
