import TransactionRepository from '../../repositories/implementation/TransactionRepository';
import AppError from '../../../../error';
import { itemsPerPage } from '../../../../constants/pagination';

export default async function ListAllTransactions(page: string, period: string, id: string) {
  const transactions = await TransactionRepository.findAllByIdUser(id);
  if (transactions === null) throw new AppError('You no have transaction!');

  const total = transactions.length;

  if (page) {
    const pageStart = (Number(page) - 1) * itemsPerPage;

    const pageEnd = pageStart + itemsPerPage;

    const selectedTransactions = transactions.slice(pageStart, pageEnd);

    return {
      itemsPerPage,
      totalItems: total,
      transactions: selectedTransactions,
    };
  }

  if (period) {
    const transactionsFromPeriod =
      await TransactionRepository.findByPeriod(id, period.toString());
    return {
      itemsPerPage,
      totalItems: total,
      transactions: transactionsFromPeriod,
    };
  }

  return {
    itemsPerPage,
    totalItems: total,
    transactions,
  };
}
