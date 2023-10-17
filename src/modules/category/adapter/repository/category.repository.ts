import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClient } from '@supabase/supabase-js'
import { Category } from "../../entity/category.model";
import { CategoryOutput } from "../dto/category.output";

@Injectable()
export class CategoryRepository {
    private supabaseUrl: string;
    private supabaseKey: string;
    private readonly logger: Logger = new Logger(CategoryRepository.name);
    private readonly CATEGORY_TABLE = 'categories';

    constructor(configService: ConfigService) {
        this.supabaseUrl = configService.get('SUPABASE_URL');
        this.supabaseKey = configService.get('SUPABASE_KEY');
    }

    async createCategory(category: Category): Promise<void> {
        const supabase = createClient(this.supabaseUrl, this.supabaseKey);
        const { error } = await supabase.from(this.CATEGORY_TABLE).insert(
            { 
                name: category.name,
            }
        );
        if (error) {
            this.logger.error(error);
            throw error;
        }
    }

    async updateCategory(id: string, category: Category): Promise<void> {
        const supabase = createClient(this.supabaseUrl, this.supabaseKey);
        const { error } = await supabase.from(this.CATEGORY_TABLE).update({
            name: category.name,
        }).eq('id', id);
        if (error) {
            this.logger.error(error);
            throw error;
        }
    }

    async getCategories(): Promise<CategoryOutput[]> {
        const supabase = createClient(this.supabaseUrl, this.supabaseKey);
        const { data, error } = await supabase.from(this.CATEGORY_TABLE).select();
        if (error) {
            this.logger.error(error);
            throw error;
        }
        return data;
    }

    async getCategoryBy(id: string): Promise<CategoryOutput> {
        const supabase = createClient(this.supabaseUrl, this.supabaseKey);
        const { data, error } = await supabase.from(this.CATEGORY_TABLE).select().eq('id', id);
        if (error) {
            this.logger.error(error);
            throw error;
        }
        return data[0];
    }

    async deleteCategoryBy(id: string): Promise<void> {
        const supabase = createClient(this.supabaseUrl, this.supabaseKey);
        const { error } = await supabase.from(this.CATEGORY_TABLE).delete().eq('id', id);
        if (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
