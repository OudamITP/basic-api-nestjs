import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { GeneralPurposesService } from 'src/Utilities/general-purposes.service';

@Injectable()
export class handleLogginMiddleware implements NestMiddleware {

  constructor(private readonly generalPurposesService: GeneralPurposesService ) {}

  use(req: Request, res: Response, next: Function) {

    const authInfo: string | undefined = req.headers['authorization'];

    if(!authInfo) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    const decryptedAuthInfo: string[] = this.generalPurposesService.stringDecryption(authInfo) ?? [];
    const username = decryptedAuthInfo[0];
    const password = decryptedAuthInfo[1];
     
    if(username !== 'admin' || password !== '123') {
      throw new HttpException('Invalid username or password', HttpStatus.UNAUTHORIZED);
    }

    next();
  }
}
