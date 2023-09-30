import { Module } from '@nestjs/common';
import { PrismaService } from './infra/prisma';
import { AppController } from './presentation/controller/app.controller';
import { DbCustomer } from './infra/repository/db.customer';
import { CustomerService } from './main/services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, DbCustomer, CustomerService],
})
export class AppModule {}
