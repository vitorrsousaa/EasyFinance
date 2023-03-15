import { Request, Response } from 'express';
import Authenticate from '../useCases/Authenticate';
import Register from '../useCases/Register';

class AuthController {
  async register(request: Request, response: Response) {
    const { email, name, password } = request.body;

    const create = await Register(email, name, password);

    return response.send(create);
  }

  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticate = await Authenticate(email, password);

    return response.send(authenticate);
  }
}

export default new AuthController();
