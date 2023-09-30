import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CustomerService } from '../../main/services/app.service';
import { CreateCustomerDto } from 'src/main/core/dtos/customer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: CustomerService) {}

  @Post('/create')
  public async handle(@Body(new ValidationPipe()) customer: CreateCustomerDto ): Promise<string> {
    try {
      await this.appService.create(customer);
      return 'criado com sucesso'
    } catch (err) {
      throw new Error(err)
    }
  }
}
