import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  create(createExpenseDto: Prisma.ExpenseCreateInput) {
    return this.prisma.expense.create({ data: createExpenseDto });
  }

  findAll() {
    return this.prisma.expense.findMany({ include: { category: true } });
  }

  findOne(id: number) {
    return this.prisma.expense.findFirst({
      where: { id },
      include: { category: true },
    });
  }

  update(id: number, updateExpenseDto: Prisma.ExpenseUpdateInput) {
    return this.prisma.expense.update({
      where: { id },
      data: updateExpenseDto,
    });
  }

  remove(id: number) {
    return this.prisma.expense.delete({ where: { id } });
  }
}
