import { Types } from 'mongoose';
import { TTransaction } from '../model';

interface TransactionProps {
  description: string;
  category: 'Receita' | 'Despesa';
  type: 'Fixo' | 'Variável';
  modality: string;
  amount: number;
}

export interface ITransactionRepository {
  create(
    description: string,
    category: string,
    modality: Types.ObjectId,
    type: string,
    user: string,
    amount: number,
    createdAt: Date
  ): Promise<TTransaction>;
  findAllByIdUser(id: string): Promise<TTransaction[] | null>;
  findByPeriod(id: string, month: string): Promise<TTransaction[] | null>;
  findById(id: string): Promise<TTransaction | null>;
  delete(id: string): Promise<void | null>;
}
