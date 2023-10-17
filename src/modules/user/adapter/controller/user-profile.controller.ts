import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserProfileService } from '../../usecase/service/user-profile.service';
import { SupabaseGuard } from 'src/modules/auth/guard/auth.guard';
import { AuthUser } from 'src/modules/auth/decorator/auth-user.decorator';
import { UserProfileInput } from '../dto/user-profile.input';
import { UserProfileOutput } from '../dto/user-profile.output';
import { AuthUserData } from '../../../auth/entity/auth-user-data.model';

@Controller('/user-profile')
export class UserProfileController {
    constructor(private readonly userProfileService: UserProfileService) {}

    @Post()
    @UseGuards(SupabaseGuard)
    async upsertUserProfile(@AuthUser() { sub: id }: AuthUserData, @Body() userProfile: UserProfileInput): Promise<void> {
        await this.userProfileService.upsertUserProfile(id, userProfile);
    }

    @Get()
    @UseGuards(SupabaseGuard)
    async fetchUserProfile(@AuthUser() { sub: id }: AuthUserData): Promise<UserProfileOutput> {
        return await this.userProfileService.getUserProfile(id);
    }
}
