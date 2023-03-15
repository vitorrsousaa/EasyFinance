import returnErrorMissingField from '../../../../utils/returnErrorMissingField';
import { TTransaction } from '../../model';
import TransactionRepository from '../../repositories/implementation/TransactionRepository';

export default async function Create(infosTransaction: TTransaction, user: string) {
  returnErrorMissingField(
    infosTransaction,
    ['description', 'category', 'type', 'modality', 'amount', 'createdAt']
  );

  const {
    description, category, type, modality, amount, createdAt
  } = infosTransaction;

  const newTransaction = await TransactionRepository.create(
    description,
    category,
    modality,
    type,
    user,
    amount,
    createdAt,
  );

  return newTransaction;

}
