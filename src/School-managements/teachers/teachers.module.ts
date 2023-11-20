import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from 'src/General-purposes/interceptors/logging.interceptor';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor 
    }
  ],
})
export class TeachersModule {}
