import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsController } from './students/StudentsController';

@Module({
  imports: [],
  controllers: [AppController, StudentsController],
  providers: [AppService],
})
export class AppModule {}
