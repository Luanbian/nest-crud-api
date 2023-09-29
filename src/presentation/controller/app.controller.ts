import { Controller, Post, Body } from '@nestjs/common';
import { Customer } from '../../main/services/app.service';
import { Icustomer } from 'src/main/entity/customer';

@Controller()
export class AppController {
  constructor(private readonly appService: Customer) {}

  @Post('/create')
  public async handle(@Body() customer: Icustomer): Promise<string> {
    try {
      await this.appService.create(customer);
      return 'criado com sucesso'
    } catch (err) {
      throw new Error(err)
    }
  }
}
