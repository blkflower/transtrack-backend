import { Injectable, Logger } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { UserProfile } from '../../entity/user-profile.model';
import { UserProfileOutput } from '../dto/user-profile.output';
import { SUPABASE_KEY, SUPABASE_URL } from 'src/modules/common/environment';

@Injectable()
export class UserProfileRepository {
    private readonly logger: Logger = new Logger(UserProfileRepository.name);
    private readonly USER_PROFILE_TABLE = 'user_profiles';

    async upsertUserProfile(userId: string, userProfile: UserProfile): Promise<void> {
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { error } = await supabase.from(this.USER_PROFILE_TABLE).upsert(
            {
                user_id: userId,
                first_name: userProfile.firstName,
                last_name: userProfile.lastName,
                photo_url: userProfile.photoUrl,
            },
            { onConflict: 'user_id' }
        );
        if (error) {
            this.logger.error(error);
            throw error;
        }
    }

    async getUserProfile(userId: string): Promise<UserProfileOutput> {
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { data, error } = await supabase.from(this.USER_PROFILE_TABLE).select().eq('user_id', userId);
        if (error) {
            this.logger.error(error);
            throw error;
        }
        return data[0];
    }
}
