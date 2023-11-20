import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalHttpExceptionsFilter } from './General-purposes/custom-exceptions/global-http-exception.filter';
import { LoggingInterceptor } from './General-purposes/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalHttpExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
