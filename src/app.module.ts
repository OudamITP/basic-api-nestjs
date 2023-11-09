import { AuthenticationModule } from './authentication/authentication.module';
import { StudentsModule } from './students/students.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { WelcomeMiddleware } from './middle-wares/welcome.middleware';

@Module({
  imports: [
    AuthenticationModule,
    StudentsModule, 
    TeachersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(WelcomeMiddleware)
      .forRoutes('authentication');
  }
}
