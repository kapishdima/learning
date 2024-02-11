import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomesModule } from './incomes/incomes.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ExpensesModule, IncomesModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
