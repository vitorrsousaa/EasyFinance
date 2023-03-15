import { Router } from 'express';

import AuthController from '../modules/Auth/controller';
import authValidate from '../middlewares/auth';

const authRoutes = Router();

authRoutes.post('/register', AuthController.register);
authRoutes.post('/authenticate', AuthController.authenticate);
authRoutes.get('/', authValidate, (req, res) => res.send({ ok: true }));

export default authRoutes;
