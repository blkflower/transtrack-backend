import { ApiProperty } from "@nestjs/swagger";
import { TransactionTypeEnum } from "../../entity/transaction.type.enum";

export class TransactionOutput {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    categoryId: number;

    @ApiProperty()
    description: string;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    transactionDate: Date;

    @ApiProperty()
    attachmentUrl: string;

    @ApiProperty()
    userId: string;

    @ApiProperty({
        enum: TransactionTypeEnum,
        example: TransactionTypeEnum.EXPENSE,
    })
    transactionType: TransactionTypeEnum;
}
