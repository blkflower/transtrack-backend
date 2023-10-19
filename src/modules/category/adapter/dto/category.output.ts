import { ApiProperty } from "@nestjs/swagger";

export class CategoryOutput {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
}
