import { Injectable } from '@nestjs/common'
import { Icustomer } from "src/main/entity/customer";
import { PrismaService } from '../prisma';

@Injectable()
export class DbCustomer {
  constructor (private readonly prisma: PrismaService) {}

  public async create (customer: Icustomer) {
    await this.prisma.customer.create({ data: customer })
  }
}