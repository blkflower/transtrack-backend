import { TransactionDatabaseModel } from '../../entity/transaction.database-model';
import { TransactionOutput } from '../dto/transaction.output';

export class TransactionMapper {
    static mapToTransactionOutput(transaction: TransactionDatabaseModel): TransactionOutput {
        return {
            id: transaction.id,
            userId: transaction.user_id,
            categoryId: transaction.category_id,
            description: transaction.description,
            amount: transaction.amount,
            transactionDate: transaction.transaction_date,
            attachmentUrl: transaction.attachment_url,
            transactionType: transaction.transaction_type,
        };
    }
}
