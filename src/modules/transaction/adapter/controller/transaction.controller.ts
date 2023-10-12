import { Controller, Get, UseGuards } from '@nestjs/common';
import { TransactionService } from '../../usecase/service/transaction.service';
import { SupabaseGuard } from 'src/modules/auth/guard/auth.guard';

@Controller()
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {}

    @Get()
    @UseGuards(SupabaseGuard)
    getHello(): string {
        return this.transactionService.getHello();
    }
}
