import { HydratedDocument, model, Schema, Types } from 'mongoose';

type TransactionInfos = {
  description: string;
  createdAt: Date;
  category: string;
  type: string;
  modality: Types.ObjectId;
  amount: number;
  user: Types.ObjectId;
}

export type TTransaction = HydratedDocument<TransactionInfos>;

const TransactionSchema = new Schema<TTransaction>({
  description: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  modality: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'Modality',
  },
  amount: {
    type: Number,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'User',
  },
});

const Transaction = model<TTransaction>('Transaction', TransactionSchema);
export default Transaction;
