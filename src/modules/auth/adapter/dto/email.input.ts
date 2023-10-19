import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class EmailInput {
    @IsEmail()
    @ApiProperty()
    email: string;
}
