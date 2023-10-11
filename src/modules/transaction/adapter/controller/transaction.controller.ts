import { Controller, Get, UseGuards } from '@nestjs/common';
import { TransactionService } from '../../usecase/service/transaction.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getHello(): string {
    return this.transactionService.getHello();
  }
}