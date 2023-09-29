import { Module } from '@nestjs/common';
import { AppController } from './presentation/controller/app.controller';
import { AppService } from './main/services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
