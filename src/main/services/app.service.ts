import { Injectable } from '@nestjs/common';
import { DbCustomer } from 'src/infra/repository/db.customer';
import { CreateCustomerDto } from '../core/dtos/customer.dto';
import { Customer } from '../entity/customer';
import { Customer as customer_table } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor (private readonly db: DbCustomer) {}

  public async create(createCustomer: CreateCustomerDto): Promise<void> {
    const customer = Customer.create(createCustomer)
    await this.db.create(customer)
  }

  public async read(): Promise<customer_table[]> {
    const customers = await this.db.read()
    return customers
  }
}
