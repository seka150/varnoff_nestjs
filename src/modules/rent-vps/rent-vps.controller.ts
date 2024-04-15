import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { RentVpsService } from './rent-vps.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RentVpsDTO, UpdateRentVpsDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { AllRentVpsResponse } from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';

@Controller('service/rent-vps')
export class RentVpsController {
    constructor(private readonly rentVpsService: RentVpsService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateRentVpsDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    async updateRentVps(@Param('id') id: number, @Body() updateDto: UpdateRentVpsDTO): Promise<UpdateRentVpsDTO> {
        const updatedRentVps = await this.rentVpsService.updateVps(id, updateDto);
        return updatedRentVps;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: RentVpsDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    rentVps(@Body() createDto: RentVpsDTO): Promise<RentVpsDTO> {
        return this.rentVpsService.createRentVps(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteRentVps (@Param('id') id: number): Promise<boolean>  {
    return this.rentVpsService.deleteRentVps(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllRentVpsResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getRentVps(): Promise<AllRentVpsResponse> {
        const rentVps = await this.rentVpsService.publicRentVps();
        return rentVps;
    }
}
