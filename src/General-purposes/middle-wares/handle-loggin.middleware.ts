import { HttpException, HttpStatus, Injectable, Logger, NestMiddleware, RequestMapping } from '@nestjs/common';
import { Request, Response } from 'express';
import { GeneralPurposesService } from 'src/General-purposes/Utilities/general-purposes.service';

@Injectable()
export class handleLogginMiddleware implements NestMiddleware {

  constructor(private readonly generalPurposesService: GeneralPurposesService ) {}

  use(req: Request, res: Response, next: Function) {
    req['roles'] = req.body['role'];
    next();
  }
}
