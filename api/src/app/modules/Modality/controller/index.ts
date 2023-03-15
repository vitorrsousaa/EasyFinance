import { Request, Response } from 'express';
import Delete from '../useCases/Delete';
import FindaAll from '../useCases/FindAll';
import Register from '../useCases/Register';

class ModalityController {
  async store(request: Request, response: Response) {
    const { name, icon } = request.body;

    const modality = await Register(name, icon, request.body);

    return response.send(modality);
  }

  async index(request: Request, response: Response) {
    const modalities = await FindaAll();

    return response.send(modalities);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await Delete(id);

    return response.sendStatus(204);
  }
}

export default new ModalityController();
