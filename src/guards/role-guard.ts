import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AppError } from "src/common/constants/errors";
import { User, UserRole } from "src/modules/users/models/user.model";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<UserRole[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        
        const request = context.switchToHttp().getRequest();
        const user: User = request.user;

        if (!user || !user.role) {
            throw new ForbiddenException(AppError.WRONG_ROLE);
        }

        if (!roles.includes(user.role)) {
            throw new ForbiddenException(AppError.DONT_ADMIN);
        }

        return true; 
    }
}
