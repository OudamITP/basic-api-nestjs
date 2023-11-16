import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { GlobalHttpExceptionsFilter } from './custom-exceptions/global-http-exception.filter';
import { GeneralPurposesService } from './Utilities/general-purposes.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { StudentsModule } from './students/students.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    AuthenticationModule,
    StudentsModule,
    TeachersModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalHttpExceptionsFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    GeneralPurposesService, 
    AppService,
    AuthGuard
  ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(handleLogginMiddleware)
  //     .forRoutes('*');
  // }
}
