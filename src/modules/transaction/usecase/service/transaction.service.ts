import { Injectable } from '@nestjs/common';
import { TransactionRepository } from '../../adapter/repository/transaction.repository';
import { Transaction } from '../../entity/transaction.model';
import { TransactionOutput } from '../../adapter/dto/transaction.output';
import { CategoryService } from 'src/modules/category/usecase/service/category.service';

@Injectable()
export class TransactionService {
    constructor(
        private readonly transactionRepository: TransactionRepository,
        private readonly categoryService: CategoryService
    ) {}

    async createTransaction(authUserId: string, transaction: Transaction): Promise<void> {
        await this.validateCategory(transaction);
        await this.transactionRepository.createTransaction(authUserId, transaction);
    }

    async updateTransaction(authUserId: string, transactionId: string, transaction: Transaction): Promise<void> {
        await this.validateTransaction(authUserId, transactionId);
        await this.validateCategory(transaction);
        await this.transactionRepository.updateTransaction(transactionId, transaction);
    }

    async getTransactions(authUserId: string): Promise<TransactionOutput[]> {
        return await this.transactionRepository.getTransactions(authUserId);
    }

    async getTransactionBy(authUserId: string, transactionId: string): Promise<TransactionOutput> {
        await this.validateTransaction(authUserId, transactionId);
        return await this.transactionRepository.getTransactionBy(transactionId);
    }

    async deleteTransactionBy(authUserId: string, transactionId: string): Promise<void> {
        await this.validateTransaction(authUserId, transactionId);
        await this.transactionRepository.deleteTransactionBy(transactionId);
    }

    async getUserBalance(authUserId: string): Promise<number> {
        return await this.transactionRepository.getUserBalance(authUserId);
    }

    private async validateCategory(transaction: Transaction) {
        if (transaction.categoryId) {
            await this.categoryService.categoryExists(transaction.categoryId.toString());
        }
    }

    private async validateTransaction(authUserId: string, transactionId: string) {
        await this.transactionRepository.checkTransactionBy(authUserId, transactionId);
    }
}
