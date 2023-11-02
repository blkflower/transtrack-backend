import { ApiProperty } from '@nestjs/swagger';
import { TransactionTypeEnum } from '../../entity/transaction.type.enum';
import { IsEnum, IsInt, IsNumber, IsOptional } from 'class-validator';

export class TransactionInput {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    categoryId?: number;

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
