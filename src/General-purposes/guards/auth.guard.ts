import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GeneralPurposesService } from 'src/General-purposes/Utilities/general-purposes.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly generalPurposesService: GeneralPurposesService ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.generalPurposesService.validateRequestion(request);
  }
}


