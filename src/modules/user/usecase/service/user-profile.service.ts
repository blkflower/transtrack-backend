import { Injectable } from '@nestjs/common';
import { UserProfileRepository } from '../../adapter/repository/user-profile.repository';
import { UserProfile } from '../../entity/user-profile.model';
import { UserProfileOutput } from '../../dto/user-profile.output';

@Injectable()
export class UserProfileService {
    constructor(private readonly userProfileRepository: UserProfileRepository) {}
    
    async upsertUserProfile(userId: string, userProfile: UserProfile): Promise<void> {
        await this.userProfileRepository.upsertUserProfile(userId, userProfile);
    }

    async getUserProfile(userId: string): Promise<UserProfileOutput> {
        return await this.userProfileRepository.getUserProfile(userId);
    }
}
