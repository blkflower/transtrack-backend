import { Module } from '@nestjs/common';
import { CategoryController } from './adapter/controller/category.controller';
import { CategoryService } from './usecase/service/category.service';
import { CategoryRepository } from './adapter/repository/category.repository';

@Module({
    imports: [],
    controllers: [CategoryController],
    providers: [CategoryService, CategoryRepository],
    exports: [CategoryService],
})
export class CategoryModule {}
