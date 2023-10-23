import { CategoryDatabaseModel } from '../../entity/category.database-model';
import { CategoryOutput } from '../dto/category.output';

export class CategoryMapper {
    static mapToCategoryOutput(category: CategoryDatabaseModel): CategoryOutput {
        return {
            id: category?.id,
            name: category?.name,
        };
    }
}
