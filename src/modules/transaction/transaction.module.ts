import { Module } from '@nestjs/common';
import { TransactionController } from './adapter/controller/transaction.controller';
import { TransactionService } from './usecase/service/transaction.service';

@Module({
    imports: [],
    controllers: [TransactionController],
    providers: [TransactionService],
})
export class TransactionModule {}
