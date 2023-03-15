import { Request, Response } from 'express';
import Create from '../useCases/Create';
import Delete from '../useCases/Delete';
import ListAllTransactions from '../useCases/ListAllTransactions';

class TransactionController {
  async index(request: Request, response: Response) {
    const { page, period } = request.body;
    const id = request.user.id;

    const listAllTransactions = await ListAllTransactions(page, period, id);

    return response.send(listAllTransactions);
  }

  async store(request: Request, response: Response) {
    const id = request.user.id;

    const createTransaction = await Create(request.body, id);

    return response.send(createTransaction);
  }

  async delete(request: Request, response: Response) {
    const { transactionId } = request.params;

    await Delete(transactionId);

    return response.sendStatus(204);
  }
}

export default new TransactionController();
