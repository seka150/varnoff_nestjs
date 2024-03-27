import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RentServerDTO, UpdateRentServerDTO } from './dto';
import { RentServerService } from './rent-server.service';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { AllRentServerResponse } from './response';

@Controller('rent-server')
export class RentServerController {
    constructor(private readonly rentServerService: RentServerService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateRentServerDTO })
    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    async updateRentServer(@Param('id') id: number, @Body() updateDto: UpdateRentServerDTO): Promise<UpdateRentServerDTO> {
        const updatedRentServer = await this.rentServerService.updateHost(id, updateDto);
        return updatedRentServer;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: RentServerDTO })
    @UseGuards(JwtAuthGuard)
    @Post('create')
    domen(@Body() createDto: RentServerDTO): Promise<RentServerDTO> {
        return this.rentServerService.createRentServer(createDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    deleteDomen (@Param('id') id: number): Promise<boolean>  {
    return this.rentServerService.deleteRentService(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllRentServerResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getHost(): Promise<AllRentServerResponse> {
        const rentServer = await this.rentServerService.publicRentServer();
        return rentServer;
    }
}

