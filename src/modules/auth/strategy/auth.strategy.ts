import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { SUPABASE_JWT_SECRET } from 'src/modules/common/environment';

@Injectable()
export class SupabaseStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: SUPABASE_JWT_SECRET,
        });
    }

    async validate(request: Request) {
        return request;
    }
}
