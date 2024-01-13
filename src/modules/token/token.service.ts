import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
    constructor(
        private readonly jwtService: JwtService, 
        private readonly configSevice: ConfigService
        ) {}

    async generateJwtToken (user) {
        const payload = {user};
        return this.jwtService.sign(payload, {
            secret: this.configSevice.get('secret_jwt'),
            expiresIn: this.configSevice.get('expire_jwt')
        })
    }
}
