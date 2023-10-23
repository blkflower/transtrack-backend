import { Controller, Get, UseGuards } from '@nestjs/common';
import { SupabaseGuard } from 'src/modules/auth/guard/auth.guard';
import { AuthUser } from 'src/modules/auth/decorator/auth-user.decorator';
import { AuthUserData } from '../../../auth/entity/auth-user-data.model';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserBalanceService } from '../../usecase/service/user-balance.service';
import { UserBalanceOutput } from '../dto/user-balance.output';

@ApiBearerAuth()
@ApiTags('user-balance')
@Controller('/user-balance')
export class UserBalanceController {
    constructor(private readonly userBalanceService: UserBalanceService) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: UserBalanceOutput,
    })
    @UseGuards(SupabaseGuard)
    async fetchUserBalance(@AuthUser() { sub: id }: AuthUserData): Promise<UserBalanceOutput> {
        return await this.userBalanceService.fetchUserBalance(id);
    }
}
