import { Body, Controller, Delete, Param, Patch, Post, UseGuards, Get } from '@nestjs/common';
import { AvtoService } from './avto.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { AvtoDTO, UpdateAvtoDTO } from './dto';
import { AllAvtoResponse } from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';

@Controller('service/naves_avto')
export class AvtoController {
    constructor(private readonly avtoService: AvtoService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateAvtoDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    updateAvto(@Param('id') id: number, @Body() updateDto: UpdateAvtoDTO): Promise<UpdateAvtoDTO> {
        return this.avtoService.updateAvto(id, updateDto); 
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: AvtoDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    createAvto(@Body() createDto: AvtoDTO): Promise<AvtoDTO> {
        return this.avtoService.createAvto(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteAvto(@Param('id') id: number): Promise<boolean>  {
        return this.avtoService.deleteAvto(id);
    }

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllAvtoResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getAvto(): Promise<AllAvtoResponse> {
        const avto = await this.avtoService.publicAvto();
        return avto;
    }
}
