import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Get('get-all-users')
    getUsers() {
        return this.userService.getUsers()
    }
}
