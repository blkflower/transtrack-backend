import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../usecase/service/auth.service';
import { EmailInput } from '../dto/email.input';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    async login(@Body() { email }: EmailInput): Promise<void> {
        await this.authService.login(email);
    }
}
