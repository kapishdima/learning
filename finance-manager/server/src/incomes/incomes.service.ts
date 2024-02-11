import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IncomesService {
  constructor(private prisma: PrismaService) {}

  create(createIncomeDto: Prisma.IncomeCreateInput) {
    return this.prisma.income.create({ data: createIncomeDto });
  }

  findAll() {
    return this.prisma.income.findMany({ include: { category: true } });
  }

  findOne(id: number) {
    return this.prisma.income.findFirst({
      where: { id },
      include: { category: true },
    });
  }

  update(id: number, updateIncomeDto: Prisma.IncomeUpdateInput) {
    return this.prisma.income.update({ where: { id }, data: updateIncomeDto });
  }

  remove(id: number) {
    return this.prisma.income.delete({ where: { id } });
  }
}
