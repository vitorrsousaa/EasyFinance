import { Router } from 'express';

import authValidate from '../middlewares/auth';

import authRoutes from './auth.routes';
import modalityRoutes from './modality.routes';
import transactionsRoutes from './transactions.routes';

const routes = Router();

routes.use('/api/modality', modalityRoutes);
routes.use('/api/auth', authRoutes);
routes.use('/api/transactions', authValidate, transactionsRoutes);

export default routes;
