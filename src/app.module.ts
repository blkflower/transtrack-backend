import { Module } from '@nestjs/common';
import { TransactionModule } from './modules/transaction/transaction.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [AuthModule, TransactionModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
