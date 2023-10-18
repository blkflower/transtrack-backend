import { Injectable } from "@nestjs/common";
import { createClient } from '@supabase/supabase-js'
import { SUPABASE_KEY, SUPABASE_URL } from "src/modules/common/environment";

@Injectable()
export class AuthRepository {
    async login( email: string ): Promise<void> {
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        await supabase.auth.signInWithOtp({ email });
    }
}
