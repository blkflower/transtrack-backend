import { ApiProperty } from "@nestjs/swagger";

export class UserProfileInput {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    photoUrl: string;
}