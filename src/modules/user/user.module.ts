import { Module } from '@nestjs/common';
import { UserProfileController } from './adapter/controller/user-profile.controller';
import { UserProfileService } from './usecase/service/user-profile.service';
import { UserProfileRepository } from './adapter/repository/user-profile.repository';
import { UserBalanceController } from './adapter/controller/user-balance.controller';
import { UserBalanceService } from './usecase/service/user-balance.service';
import { TransactionModule } from '../transaction/transaction.module';

@Module({
    imports: [TransactionModule],
    controllers: [UserProfileController, UserBalanceController],
    providers: [UserProfileService, UserProfileRepository, UserBalanceService],
    exports: [UserProfileService, UserBalanceService],
})
export class UserModule {}
