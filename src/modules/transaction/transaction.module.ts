import { Module } from '@nestjs/common';
import { TransactionController } from './adapter/controller/transaction.controller';
import { TransactionService } from './usecase/service/transaction.service';
import { TransactionRepository } from './adapter/repository/transaction.repository';
import { CategoryModule } from '../category/category.module';

@Module({
    imports: [CategoryModule],
    controllers: [TransactionController],
    providers: [TransactionService, TransactionRepository],
})
export class TransactionModule {}
