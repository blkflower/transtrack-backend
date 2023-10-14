import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClient } from '@supabase/supabase-js'
import { UserProfile } from "../../entity/user-profile.model";
import { UserProfileOutput } from "../../dto/user-profile.output";

@Injectable()
export class UserProfileRepository {
    private supabaseUrl: string;
    private supabaseKey: string;
    private readonly logger: Logger = new Logger(UserProfileRepository.name);
    private readonly USER_PROFILE_TABLE = 'user_profiles';

    constructor(configService: ConfigService) {
        this.supabaseUrl = configService.get('SUPABASE_URL');
        this.supabaseKey = configService.get('SUPABASE_KEY');
    }

    async upsertUserProfile(userId: string, userProfile: UserProfile): Promise<void> {
        const supabase = createClient(this.supabaseUrl, this.supabaseKey);
        const { error } = await supabase.from(this.USER_PROFILE_TABLE).upsert(
            { 
                user_id: userId, 
                first_name: userProfile.firstName, 
                last_name: userProfile.lastName, 
                photo_url: userProfile.photoUrl
            },
            { onConflict: 'user_id' }
        );
        if (error) {
            this.logger.error(error);
            throw error;
        }
    }

    async getUserProfile(userId: string): Promise<UserProfileOutput> {
        const supabase = createClient(this.supabaseUrl, this.supabaseKey);
        const { data, error } = await supabase.from(this.USER_PROFILE_TABLE).select().eq('user_id', userId);
        if (error) {
            this.logger.error(error);
            throw error;
        }
        return data[0];
    }
}
