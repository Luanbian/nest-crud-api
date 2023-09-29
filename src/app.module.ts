import { Module } from '@nestjs/common';
import { PrismaService } from './infra/prisma';
import { AppController } from './presentation/controller/app.controller';
import { DbCustomer } from './infra/repository/db.customer';
import { Customer } from './main/services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, DbCustomer, Customer],
})
export class AppModule {}
