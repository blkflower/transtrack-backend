import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../usecase/service/auth.service';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    async login(@Body() { email }: Record<string, string>): Promise<void> {
        await this.authService.login(email);
    }
}
