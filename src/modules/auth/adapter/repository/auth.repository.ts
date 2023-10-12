import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClient } from '@supabase/supabase-js'

@Injectable()
export class AuthRepository {
    private supabase_url: string;
    private anon_key: string;

    constructor(configService: ConfigService) {
        this.supabase_url = configService.get('SUPABASE_URL');
        this.anon_key = configService.get('SUPABASE_KEY');
    }

    async login( email: string ): Promise<void> {
        const supabase = createClient(this.supabase_url, this.anon_key);
        await supabase.auth.signInWithOtp({ email });
    }
}
