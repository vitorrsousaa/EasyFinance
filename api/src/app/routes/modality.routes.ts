import { Router } from 'express';
import ModalityController from '../modules/Modality/controller';

const modalityRoutes = Router();

modalityRoutes.post('/', ModalityController.store);
modalityRoutes.get('/', ModalityController.index);
modalityRoutes.delete('/:id?', ModalityController.delete);

export default modalityRoutes;
