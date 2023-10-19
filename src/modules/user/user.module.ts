import { Module } from '@nestjs/common';
import { UserProfileController } from './adapter/controller/user-profile.controller';
import { UserProfileService } from './usecase/service/user-profile.service';
import { UserProfileRepository } from './adapter/repository/user-profile.repository';

@Module({
    imports: [],
    controllers: [UserProfileController],
    providers: [UserProfileService, UserProfileRepository],
    exports: [UserProfileService],
})
export class UserModule {}
