import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class AuthRepository {
    private supabaseUrl: string;
    private supabaseKey: string;

    constructor(configService: ConfigService) {
        this.supabaseUrl = configService.get('SUPABASE_URL');
        this.supabaseKey = configService.get('SUPABASE_KEY');
    }

    async login(email: string): Promise<void> {
        const supabase = createClient(this.supabaseUrl, this.supabaseKey);
        await supabase.auth.signInWithOtp({ email });
    }
}
