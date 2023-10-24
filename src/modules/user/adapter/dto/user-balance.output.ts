import { ApiProperty } from '@nestjs/swagger';

export class UserBalanceOutput {
    @ApiProperty()
    userId: string;

    @ApiProperty()
    userBalance: number;
}
