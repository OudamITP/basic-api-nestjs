import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class handleLogginMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: Function) {
    req['roles'] = req.body['role'];
    next();
  }
}
