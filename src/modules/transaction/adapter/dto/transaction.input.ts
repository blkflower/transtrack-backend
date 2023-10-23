import { ApiProperty } from "@nestjs/swagger";
import { TransactionTypeEnum } from "../../entity/transaction.type.enum";
import { IsEnum, IsInt, IsNumber } from "class-validator";

export class TransactionInput {
    @ApiProperty()
    @IsInt()
    categoryId: number;

    @ApiProperty()
    description: string;

    @ApiProperty()
    @IsNumber()
    amount: number;

    @ApiProperty()
    transactionDate: Date;

    @ApiProperty()
    attachmentUrl: string;

    @ApiProperty({
        enum: TransactionTypeEnum,
        example: TransactionTypeEnum.EXPENSE,
    })
    @IsEnum(TransactionTypeEnum)
    transactionType: TransactionTypeEnum;
}
