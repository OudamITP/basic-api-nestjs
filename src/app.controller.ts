import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './General-purposes/custom-decorator/user.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  greeting(@User('firstName') firstName: string): string {
    return `What's up ${firstName}`
  }
}
