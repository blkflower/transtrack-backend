import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../adapter/repository/category.repository';
import { Category } from '../../entity/category.model';
import { CategoryOutput } from '../../adapter/dto/category.output';

@Injectable()
export class CategoryService {
    constructor(private readonly categoryRepository: CategoryRepository) {}

    async createCategory(category: Category): Promise<void> {
        await this.categoryRepository.createCategory(category);
    }

    async updateCategory(id: string, category: Category): Promise<void> {
        await this.categoryRepository.updateCategory(id, category);
    }

    async getCategories(): Promise<CategoryOutput[]> {
        return await this.categoryRepository.getCategories();
    }

    async getCategoryBy(id: string): Promise<CategoryOutput> {
        return await this.categoryRepository.getCategoryBy(id);
    }

    async deleteCategoryBy(id: string): Promise<void> {
        await this.categoryRepository.deleteCategoryBy(id);
    }

    async categoryExists(id: string): Promise<boolean> {
        return await this.categoryExists(id);
    }
}
