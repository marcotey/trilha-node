import { Router } from 'express';

import { customerRoutes } from './customer.routes';

const router = Router();

router.use('/customer', customerRoutes);

export { router };
