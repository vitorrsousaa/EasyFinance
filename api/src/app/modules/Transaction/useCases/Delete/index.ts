import AppError from '../../../../error';
import TransactionRepository from '../../repositories/implementation/TransactionRepository';

export default async function Delete(transactionId: string) {
  if (!transactionId) throw new AppError('Transaction ID is required!');

  const findTransaction = await TransactionRepository.findById(transactionId);
  if (!findTransaction) throw new AppError('Transaction does not exists', 404);

  await TransactionRepository.delete(transactionId);

  return 'Transaction Delected!';
}
