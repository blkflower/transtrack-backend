import { Injectable, Logger } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { Transaction } from '../../entity/transaction.model';
import { SUPABASE_KEY, SUPABASE_URL } from 'src/modules/common/environment';
import { TransactionMapper } from '../mapper/transaction.mapper';
import { TransactionOutput } from '../dto/transaction.output';

@Injectable()
export class TransactionRepository {
    private readonly logger: Logger = new Logger(TransactionRepository.name);
    private readonly TRANSACTION_TABLE = 'transactions';

    async createTransaction(authUserId: string, transaction: Transaction): Promise<void> {
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { error } = await supabase.from(this.TRANSACTION_TABLE).insert({
            user_id: authUserId,
            amount: transaction.amount,
            description: transaction.description,
            attachment_url: transaction.attachmentUrl,
            transaction_date: transaction.transactionDate,
            category_id: transaction.categoryId,
            transaction_type: transaction.transactionType,
        });
        if (error) {
            this.logger.error(error);
            throw error;
        }
    }

    async updateTransaction(transactionId: string, transaction: Transaction): Promise<void> {
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { error } = await supabase
            .from(this.TRANSACTION_TABLE)
            .update({
                amount: transaction.amount,
                description: transaction.description,
                attachment_url: transaction.attachmentUrl,
                transaction_date: transaction.transactionDate,
                category_id: transaction.categoryId,
                transaction_type: transaction.transactionType,
            })
            .eq('id', transactionId);
        if (error) {
            this.logger.error(error);
            throw error;
        }
    }

    async getTransactions(authUserId: string): Promise<TransactionOutput[]> {
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { data, error } = await supabase.from(this.TRANSACTION_TABLE).select().eq('user_id', authUserId);
        if (error) {
            this.logger.error(error);
            throw error;
        }
        return data.map((data) => TransactionMapper.mapToTransactionOutput(data));
    }

    async getTransactionBy(transactionId: string): Promise<TransactionOutput> {
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { data, error } = await supabase.from(this.TRANSACTION_TABLE).select().eq('id', transactionId).single();
        if (error) {
            this.logger.error(error);
            throw error;
        }
        return TransactionMapper.mapToTransactionOutput(data);
    }

    async checkTransactionBy(authUserId: string, transactionId: string): Promise<boolean> {
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { data, error } = await supabase
            .from(this.TRANSACTION_TABLE)
            .select()
            .eq('user_id', authUserId)
            .eq('id', transactionId)
            .single();
        if (error) {
            this.logger.error(error);
            throw error;
        }
        return !!data;
    }

    async deleteTransactionBy(transactionId: string): Promise<void> {
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { error } = await supabase.from(this.TRANSACTION_TABLE).delete().eq('id', transactionId);
        if (error) {
            this.logger.error(error);
            throw error;
        }
    }

    async getUserBalance(authUserId: string): Promise<number> {
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { data, error } = await supabase.rpc('compute_user_balance', { user_id: authUserId });
        if (error) {
            this.logger.error(error);
            throw error;
        }
        return data;
    }
}
