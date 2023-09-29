import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../main/services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async handle(): Promise<string> {
    return await this.appService.getHello();
  }
}
