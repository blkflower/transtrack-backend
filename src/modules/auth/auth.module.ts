import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { SupabaseStrategy } from './strategy/auth.strategy';
import { AuthController } from './adapter/controller/auth.controller';
import { AuthService } from './usecase/service/auth.service';
import { AuthRepository } from './adapter/repository/auth.repository';

@Module({
    controllers: [AuthController],
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        PassportModule,
    ],
    providers: [SupabaseStrategy, AuthService, AuthRepository],
})
export class AuthModule {}
