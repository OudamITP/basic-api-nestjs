import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LogInDto } from './authentication.dto/logIn.dto';

@Injectable()
export class AuthenticationService { 

    logIn(loginDto: LogInDto) {
        return `Welcome back!`;
    }

}
