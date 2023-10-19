import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthUser = createParamDecorator((_data: unknown, context: ExecutionContext) => {
    const user = context.switchToHttp().getRequest().user;
    return user;
});
