import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TerrasaDTO, UpdateTerrasaDTO } from './dto';
import { TerrasaService } from './terrasa.service';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { AllTerrasaResponse } from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from "src/common/decorator";

@Controller('service/naves_terrasa')
export class TerrasaController {
    constructor(private readonly terrasaService: TerrasaService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateTerrasaDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    async updateTerrasa(@Param('id') id: number, @Body() updateDto: UpdateTerrasaDTO): Promise<UpdateTerrasaDTO> {
        const updatedTerrasa = await this.terrasaService.updateTerrasa(id, updateDto);
        return updatedTerrasa;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: TerrasaDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    terrasa(@Body() createDto: TerrasaDTO): Promise<TerrasaDTO> {
        return this.terrasaService.createTerrasa(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteTerrasa (@Param('id') id: number): Promise<boolean>  {
    return this.terrasaService.deleteTerrasa(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllTerrasaResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getTerrasa(): Promise<AllTerrasaResponse> {
        const terasa = await this.terrasaService.publicTerrasa();
        return terasa;
    }
}

