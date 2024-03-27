import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { HostService } from './host.service';
import { HostDTO, UpdateHostDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AllHostResponse } from './response';

@Controller('host')
export class HostController {
    constructor(private readonly hostService: HostService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateHostDTO })
    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    async updateHost(@Param('id') id: number, @Body() updateDto: UpdateHostDTO): Promise<UpdateHostDTO> {
        const updatedHost = await this.hostService.updateHost(id, updateDto);
        return updatedHost;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: HostDTO })
    @UseGuards(JwtAuthGuard)
    @Post('create')
    domen(@Body() createDto: HostDTO): Promise<HostDTO> {
        return this.hostService.createHost(createDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    deleteDomen (@Param('id') id: number): Promise<boolean>  {
    return this.hostService.deleteHost(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllHostResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getHost(): Promise<AllHostResponse> {
        const host = await this.hostService.publicHost();
        return host;
    }
}
