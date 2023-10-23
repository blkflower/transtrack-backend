import { UserProfileDatabaseModel } from '../../entity/user-profile.database-model';
import { UserProfileOutput } from '../dto/user-profile.output';

export class UserProfileMapper {
    static mapToUserProfileOutput(userProfile: UserProfileDatabaseModel): UserProfileOutput {
        return {
            userId: userProfile.user_id,
            firstName: userProfile.first_name,
            lastName: userProfile.last_name,
            photoUrl: userProfile.photo_url,
        };
    }
}
