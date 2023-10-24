import { Injectable } from '@nestjs/common';
import { TransactionService } from 'src/modules/transaction/usecase/service/transaction.service';
import { UserBalanceOutput } from '../../adapter/dto/user-balance.output';

@Injectable()
export class UserBalanceService {
    constructor(private readonly transactionService: TransactionService) {}

    async fetchUserBalance(authUserId: string): Promise<UserBalanceOutput> {
        const userBalance: number = await this.transactionService.getUserBalance(authUserId);
        return { userId: authUserId, userBalance };
    }
}
