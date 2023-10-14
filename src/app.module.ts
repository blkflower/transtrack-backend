import { Module } from '@nestjs/common';
import { TransactionModule } from './modules/transaction/transaction.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [AuthModule, TransactionModule, UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
