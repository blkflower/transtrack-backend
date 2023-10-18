import { ApiProperty } from "@nestjs/swagger";

export class UserProfileOutput {
    @ApiProperty()
    userId: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    photoUrl: string;
}