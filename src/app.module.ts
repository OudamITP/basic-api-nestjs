import { APP_FILTER } from '@nestjs/core';
import { GlobalHttpExceptionsFilter } from './custom-exceptions/global-http-exception.filter';
import { GeneralPurposesService } from './Utilities/general-purposes.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { StudentsModule } from './students/students.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { handleLogginMiddleware } from './middle-wares/handle-loggin.middleware';

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
    GeneralPurposesService, AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(handleLogginMiddleware)
      .forRoutes('*');
  }
}
