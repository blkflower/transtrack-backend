import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { SupabaseStrategy } from './strategy/auth.strategy';

@Module({
    controllers: [],
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        PassportModule,
    ],
    providers: [SupabaseStrategy],
})
export class AuthModule {}
