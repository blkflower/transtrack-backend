import { BadRequestException, Injectable } from '@nestjs/common';
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
            const categoryExists: boolean = await this.categoryService.categoryExists(
                transaction.categoryId.toString()
            );
            if (!categoryExists)
                throw new BadRequestException(`Category with id ${transaction.categoryId} does not exist`);
        }
    }

    private async validateTransaction(authUserId: string, transactionId: string) {
        const existingTransaction: boolean = await this.transactionRepository.checkTransactionBy(
            authUserId,
            transactionId
        );
        if (!existingTransaction)
            throw new BadRequestException(
                `Transaction with id ${transactionId} does not exist or is not owned by user with id ${authUserId}`
            );
    }
}
