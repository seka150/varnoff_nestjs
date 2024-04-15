import { Body, Controller, Param, Patch, Post, UseGuards, Delete, Get } from '@nestjs/common';
import { DomenService } from './domen.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DomenDTO, UpdateDomenDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { AllDomenResponse } from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';

@Controller('service/domen')
export class DomenController {
    constructor(private readonly domenService: DomenService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateDomenDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    async updateDomen(@Param('id') id: number, @Body() updateDto: UpdateDomenDTO): Promise<UpdateDomenDTO> {
        const updatedDomen = await this.domenService.updateDomen(id, updateDto);
        return updatedDomen;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: DomenDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    domen(@Body() createDto: DomenDTO): Promise<DomenDTO> {
        return this.domenService.createDomen(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteDomen (@Param('id') id: number): Promise<boolean>  {
    return this.domenService.deleteDomen(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllDomenResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getDomen(): Promise<AllDomenResponse> {
        const domen = await this.domenService.publicDomen();
        return domen;
    }
}
