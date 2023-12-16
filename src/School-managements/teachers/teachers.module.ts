import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from 'src/General-purposes/interceptors/logging.interceptor';
import { AuthGuard } from 'src/General-purposes/guards/auth.guard';
import { GeneralPurposesService } from 'src/General-purposes/Utilities/general-purposes.service';
import { GlobalHttpExceptionsFilter } from 'src/General-purposes/custom-exceptions/global-http-exception.filter';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService,
    {
      provide: APP_FILTER,
      useClass: GlobalHttpExceptionsFilter
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor 
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    GeneralPurposesService
  ],
})
export class TeachersModule {}
