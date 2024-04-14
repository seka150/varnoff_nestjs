import { Body, Controller, Delete, Param, Patch, Post, UseGuards, Get} from '@nestjs/common';
import { SslService } from './ssl.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { SSLDTO, UpdateSSLDTO } from './dto';
import { AllSSLResponse } from './response';

@Controller('service/ssl')
export class SSLController {
    constructor(private readonly SslService: SslService){}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateSSLDTO })
    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    updateSsl(@Param('id') id: number, @Body() updateDto: UpdateSSLDTO): Promise<UpdateSSLDTO> {
    return this.SslService.updateSsl(id, updateDto); 
}

    @ApiTags("API")
    @ApiResponse({ status: 201, type: SSLDTO })
    @UseGuards(JwtAuthGuard)
    @Post('create')
    createSites(@Body() createDto: SSLDTO): Promise<SSLDTO> {
        return this.SslService.createSSL(createDto);
    }

    @UseGuards(JwtAuthGuard)
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
