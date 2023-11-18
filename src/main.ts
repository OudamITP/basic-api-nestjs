import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalHttpExceptionsFilter } from './General-purposes/custom-exceptions/global-http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalHttpExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
