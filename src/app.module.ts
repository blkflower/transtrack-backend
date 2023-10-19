import { Module } from '@nestjs/common';
import { TransactionModule } from './modules/transaction/transaction.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
    imports: [AuthModule, TransactionModule, UserModule, CategoryModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
