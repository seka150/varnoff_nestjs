import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RentServerDTO, UpdateRentServerDTO } from './dto';
import { RentServerService } from './rent-server.service';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { AllRentServerResponse } from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from "src/common/decorator";

@Controller('service/rent-server')
export class RentServerController {
    constructor(private readonly rentServerService: RentServerService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateRentServerDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    async updateRentServer(@Param('id') id: number, @Body() updateDto: UpdateRentServerDTO): Promise<UpdateRentServerDTO> {
        const updatedRentServer = await this.rentServerService.updateHost(id, updateDto);
        return updatedRentServer;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: RentServerDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    domen(@Body() createDto: RentServerDTO): Promise<RentServerDTO> {
        return this.rentServerService.createRentServer(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
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

