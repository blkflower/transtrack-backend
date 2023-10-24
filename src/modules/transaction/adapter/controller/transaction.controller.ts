import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TransactionService } from '../../usecase/service/transaction.service';
import { SupabaseGuard } from 'src/modules/auth/guard/auth.guard';
import { TransactionInput } from '../dto/transaction.input';
import { TransactionOutput } from '../dto/transaction.output';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/modules/auth/decorator/auth-user.decorator';
import { AuthUserData } from 'src/modules/auth/entity/auth-user-data.model';

@ApiBearerAuth()
@ApiTags('transactions')
@Controller('/transactions')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {}

    @Post()
    @UseGuards(SupabaseGuard)
    async createTransaction(
        @AuthUser() { sub: authUserId }: AuthUserData,
        @Body() transaction: TransactionInput
    ): Promise<void> {
        await this.transactionService.createTransaction(authUserId, transaction);
    }

    @Post('/:id')
    @UseGuards(SupabaseGuard)
    async updateTransaction(
        @AuthUser() { sub: authUserId }: AuthUserData,
        @Param('id') transactionId: string,
        @Body() transaction: TransactionInput
    ): Promise<void> {
        await this.transactionService.updateTransaction(authUserId, transactionId, transaction);
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: [TransactionOutput],
    })
    @UseGuards(SupabaseGuard)
    async fetchTransactions(@AuthUser() { sub: authUserId }: AuthUserData): Promise<TransactionOutput[]> {
        return await this.transactionService.getTransactions(authUserId);
    }

    @Get('/:id')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: TransactionOutput,
    })
    @UseGuards(SupabaseGuard)
    async fetchTransaction(
        @AuthUser() { sub: authUserId }: AuthUserData,
        @Param('id') transactionId: string
    ): Promise<TransactionOutput> {
        return await this.transactionService.getTransactionBy(authUserId, transactionId);
    }

    @Delete('/:id')
    @UseGuards(SupabaseGuard)
    async deleteTransaction(
        @AuthUser() { sub: authUserId }: AuthUserData,
        @Param('id') transactionId: string
    ): Promise<void> {
        await this.transactionService.deleteTransactionBy(authUserId, transactionId);
    }
}
