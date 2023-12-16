import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './role.decorator';
import { CustomUnauthorizedException } from '../custom-exceptions/custom-unauthorized.exception';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user.roles;
    return matchRoles(roles, user);
  }
}

function matchRoles(requiredRoles: string[], userRoles: any): boolean {
  if(requiredRoles[0] !== userRoles) {
    throw new CustomUnauthorizedException('No permission');
  }
  return true;
}

