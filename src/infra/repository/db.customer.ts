import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma';
import { Customer } from 'src/main/entity/customer';
import { Customer as customer_table } from '@prisma/client';

@Injectable()
export class DbCustomer {
  constructor (private readonly prisma: PrismaService) {}

  public async create (customer: Customer): Promise<void> {
    await this.prisma.customer.create({ data: customer })
  }

  public async read (): Promise<customer_table[]> {
    const consult = await this.prisma.customer.findMany()
    return consult
  }

  public async update (id: string, customer: Customer): Promise<void> {
    await this.prisma.customer.update({
      data: customer, 
      where: {
        id: Number(id)
      }
    })
  }

  public async delete (id: string): Promise<void> {
    await this.prisma.customer.delete({
      where: { id: Number(id) }
    })
  }
}