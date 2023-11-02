import { TransactionTypeEnum } from './transaction.type.enum';

export class Transaction {
    categoryId?: number;
    description: string;
    amount: number;
    transactionDate: Date;
    attachmentUrl: string;
    transactionType: TransactionTypeEnum;
}
