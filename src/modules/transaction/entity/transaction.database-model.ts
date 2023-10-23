import { TransactionTypeEnum } from './transaction.type.enum';

export class TransactionDatabaseModel {
    id?: number;
    user_id?: string;
    amount: number;
    description: string;
    attachment_url: string;
    transaction_date: Date;
    category_id: number;
    transaction_type: TransactionTypeEnum;
}
