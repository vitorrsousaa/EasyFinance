import { Request, Response } from 'express';
import TransactionsRepository from '../repositories/TransactionsRepository';
import { itemsPerPage } from '../../constants/pagination';

class TransactionController {
  async index(req: Request, res: Response) {
    // Listar todos os registros
    const { page, period } = req.query;

    const id = req.user.id;

    try {
      const transactions = await TransactionsRepository.findAll(id);

      const total = transactions.length;

      if (page) {
        const pageStart = (Number(page) - 1) * itemsPerPage;

        const pageEnd = pageStart + itemsPerPage;

        const selectedTransactions = transactions.slice(pageStart, pageEnd);

        return res.send({
          itemsPerPage,
          totalItems: total,
          transactions: selectedTransactions,
        });
      }

      if (period) {
        const transactionsFromPeriod =
          await TransactionsRepository.findByPeriod(id, period.toString());
        return res.send({
          itemsPerPage,
          totalItems: total,
          transactions: transactionsFromPeriod,
        });
      }

      return res.send({
        itemsPerPage,
        totalItems: total,
        transactions,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: 'Registration failed' });
    }
  }

  async show() {
    // Listar um registro
  }

  async store(req: Request, res: Response) {
    const { description, category, type, modality, amount, createdAt } =
      req.body;

    if (!description) {
      return res.status(400).send({ error: 'Description is required' });
    }
    if (!category) {
      return res.status(400).send({ error: 'category is required' });
    }
    if (!type) {
      return res.status(400).send({ error: 'type is required' });
    }
    if (!modality) {
      return res.status(400).send({ error: 'modality is required' });
    }
    if (!amount) {
      return res.status(400).send({ error: 'amount is required' });
    }

    const id = req.user.id;
    const user = id;

    try {
      const newTransaction = await TransactionsRepository.create(
        description,
        category,
        modality,
        type,
        user,
        amount,
        createdAt
      );

      const transactionCreated = await TransactionsRepository.findById(
        newTransaction._id.toString()
      );

      return res.send(transactionCreated);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: 'Registration failed' });
    }
  }

  async update() {
    // Atualizar
  }

  async delete(req: Request, res: Response) {
    // Deletar
    const { transactionId } = req.params;

    if (!transactionId) {
      return res.status(400).send({ error: 'Transaction id is required' });
    }

    try {
      const transaction = await TransactionsRepository.delete(transactionId);

      if (!transaction) {
        return res.status(400).send({ error: 'Transaction does not exists' });
      }

      return res.status(204).send({ message: 'Transaction Deleted' });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: 'Registration failed' });
    }
  }
}

export default new TransactionController();
