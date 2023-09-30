import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma';
import { Customer } from 'src/main/entity/customer';

@Injectable()
export class DbCustomer {
  constructor (private readonly prisma: PrismaService) {}

  public async create (customer: Customer) {
    await this.prisma.customer.create({ data: customer })
  }
}