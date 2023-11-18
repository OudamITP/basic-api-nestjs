import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { GlobalHttpExceptionsFilter } from './General-purposes/custom-exceptions/global-http-exception.filter';
import { GeneralPurposesService } from './General-purposes/Utilities/general-purposes.service';
import { AuthenticationModule } from './Authentications/authentication/authentication.module';
import { StudentsModule } from './School-managements/students/students.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './School-managements/teachers/teachers.module';
import { AuthGuard } from './General-purposes/guards/auth.guard';
import { RolesGuard } from './General-purposes/guards/role.guards';
import { handleLogginMiddleware } from './General-purposes/middle-wares/handle-loggin.middleware';

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
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    },
    GeneralPurposesService, 
    AppService,
    AuthGuard
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(handleLogginMiddleware)
      .forRoutes('*');
  }
}
