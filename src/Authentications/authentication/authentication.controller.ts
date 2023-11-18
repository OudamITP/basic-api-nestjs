import { Body, Controller, Post } from '@nestjs/common';
import { LogInDto } from './authentication.dto/logIn.dto';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {

    constructor(private readonly authenticationService: AuthenticationService) {}

    @Post()
    logIn(@Body() loginDto: LogInDto): string {
        return this.authenticationService.logIn(loginDto);
    }

}
