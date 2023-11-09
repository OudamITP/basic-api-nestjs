import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class WelcomeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Welcome!');
    next();
  }
}
