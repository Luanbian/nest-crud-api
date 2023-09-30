import { Injectable } from '@nestjs/common';
import { DbCustomer } from 'src/infra/repository/db.customer';
import { CreateCustomerDto } from '../core/dtos/customer.dto';
import { Customer } from '../entity/customer';

@Injectable()
export class CustomerService {
  constructor (private readonly db: DbCustomer) {}

  public async create(createCustomer: CreateCustomerDto): Promise<void> {
    const customer = new Customer()
    customer.name = createCustomer.name
    customer.email = createCustomer.email
    customer.phone = createCustomer.phone
    await this.db.create(customer)
  }
}
