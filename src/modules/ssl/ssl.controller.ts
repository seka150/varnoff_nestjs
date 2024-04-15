import { Body, Controller, Delete, Param, Patch, Post, UseGuards, Get} from '@nestjs/common';
import { SslService } from './ssl.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { SSLDTO, UpdateSSLDTO } from './dto';
import { AllSSLResponse } from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';

@Controller('service/ssl')
export class SSLController {
    constructor(private readonly SslService: SslService){}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateSSLDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    updateSsl(@Param('id') id: number, @Body() updateDto: UpdateSSLDTO): Promise<UpdateSSLDTO> {
    return this.SslService.updateSsl(id, updateDto); 
}

    @ApiTags("API")
    @ApiResponse({ status: 201, type: SSLDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    createSites(@Body() createDto: SSLDTO): Promise<SSLDTO> {
        return this.SslService.createSSL(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteService (@Param('id') id: number): Promise<boolean>  {
    return this.SslService.deleteSsl(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllSSLResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getServices(): Promise<AllSSLResponse> {
        const sites = await this.SslService.publicSsl();
        return sites;
    }

}
