import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParkingDTO, UpdateParkingDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { AllParkingResponse } from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';

@Controller('service/naves_parking')
export class ParkingController {
    constructor(private readonly parkingService: ParkingService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateParkingDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    async updateParking(@Param('id') id: number, @Body() updateDto: UpdateParkingDTO): Promise<UpdateParkingDTO> {
        const updatedParking = await this.parkingService.updateParking(id, updateDto);
        return updatedParking;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: ParkingDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    parking(@Body() createDto: ParkingDTO): Promise<ParkingDTO> {
        return this.parkingService.createParking(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteParking(@Param('id') id: number): Promise<boolean> {
        return this.parkingService.deleteParking(id);
    }

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllParkingResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getParking(): Promise<AllParkingResponse> {
        const parking = await this.parkingService.publicParking();
        return parking;
    }
}
