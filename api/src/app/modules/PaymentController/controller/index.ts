import { Request, Response } from 'express';
import CreateCheckoutSession from '../useCases/CreateCheckoutSession';
import Subscription from '../useCases/Subscription';

class PaymentController {
  async createCheckoutSession(request: Request, response: Response) {
    const create = await CreateCheckoutSession();

    return response.send(create);
  }

  async subscription(request: Request, response: Response) {
    const id = request.user.id;

    const subscription = await Subscription(id);

    return response.sendStatus(204);
  }
}

export default new PaymentController();
