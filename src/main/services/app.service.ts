import { Injectable } from '@nestjs/common';
import { DbCustomer } from 'src/infra/repository/db.customer';
import { Icustomer } from '../entity/customer';

@Injectable()
export class Customer {
  constructor (private readonly db: DbCustomer) {}

  public async create(customer: Icustomer): Promise<void> {
    await this.db.create(customer)
  }
}
