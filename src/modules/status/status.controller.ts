import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { StatusService } from './status.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { StatusDto, UpdateStatusDto } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';
import { AllStatusResponse } from './responce';

@Controller('status')
export class StatusController {
    constructor(private readonly statusService: StatusService){}

    @ApiTags("API")
    @ApiResponse({status: 200, type: UpdateStatusDto})
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    updateStatus(@Param('id') id: number, @Body() updateDto: UpdateStatusDto): Promise<UpdateStatusDto> {
        return this.statusService.updateStatus(id, updateDto);
    }

    @ApiTags("API")
    @ApiResponse({status: 201, type: StatusDto})
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    createStatus(@Body() createDto: StatusDto): Promise<StatusDto> {
        return this.statusService.createStatus(createDto);
    }

    @ApiTags("API")
    @ApiResponse({status: 200, type: AllStatusResponse})
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Get('get')
    async getStatus(): Promise<AllStatusResponse> {
        const status = await this.statusService.publicStatus();
        return status;
    }
}
