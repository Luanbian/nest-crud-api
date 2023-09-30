import { Controller, Post, Query, Body, ValidationPipe, Get, Put } from '@nestjs/common';
import { CustomerService } from '../../main/services/app.service';
import { CreateCustomerDto } from 'src/main/core/dtos/customer.dto';
import { Customer as customer_table } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: CustomerService) {}

  @Post('/create')
  public async handleCreate(@Body(new ValidationPipe()) customer: CreateCustomerDto ): Promise<string> {
    try {
      await this.appService.create(customer);
      return 'criado com sucesso'
    } catch (err) {
      throw new Error(err)
    }
  }

  @Get('/read')
  public async handleRead(): Promise<customer_table[]> {
    try {
      const customers = await this.appService.read()
      return customers
    } catch (error) {
      throw new Error(error)
    }
  }

  @Put('/update')
  public async handleUpdate(@Query() query: { id: string }, @Body(new ValidationPipe()) customer: CreateCustomerDto): Promise<string> {
    try {
      await this.appService.update(query.id, customer)
      return 'atualizado com sucesso'
    } catch (error) {
      throw new Error(error)
    }
  }
}
