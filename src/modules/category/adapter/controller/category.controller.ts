import { Body, Controller, Delete, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from '../../usecase/service/category.service';
import { SupabaseGuard } from 'src/modules/auth/guard/auth.guard';
import { CategoryInput } from '../dto/category.input';
import { CategoryOutput } from '../dto/category.output';
import { ENABLE_CATEGORY_MUTATION } from 'src/modules/common/environment';

@Controller('/categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    @UseGuards(SupabaseGuard)
    async createCategory(@Body() category: CategoryInput): Promise<void> {
        if (!ENABLE_CATEGORY_MUTATION) throw new NotFoundException();
        await this.categoryService.createCategory(category);
    }

    @Post('/:id')
    @UseGuards(SupabaseGuard)
    async updateCategory(@Param('id') id: string, @Body() category: CategoryInput): Promise<void> {
        if (!ENABLE_CATEGORY_MUTATION) throw new NotFoundException();
        await this.categoryService.updateCategory(id, category);
    }

    @Get()
    @UseGuards(SupabaseGuard)
    async fetchCategories(): Promise<CategoryOutput[]> {
        return await this.categoryService.getCategories();
    }

    @Get('/:id')
    @UseGuards(SupabaseGuard)
    async fetchCategory(@Param('id') id: string): Promise<CategoryOutput> {
        return await this.categoryService.getCategoryBy(id);
    }

    @Delete('/:id')
    @UseGuards(SupabaseGuard)
    async deleteCategory(@Param('id') id: string): Promise<void> {
        if (!ENABLE_CATEGORY_MUTATION) throw new NotFoundException();
        await this.categoryService.deleteCategoryBy(id);
    }
}
