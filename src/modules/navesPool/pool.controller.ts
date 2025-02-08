import { Body, Controller, Param, Patch, Post, UseGuards, Delete, Get } from '@nestjs/common';
import { NavesPoolService } from './pool.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { NavesPoolDTO, UpdateNavesPoolDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { AllNavesPoolResponse } from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';

@Controller('service/naves_pool')
export class NavesPoolController {
    constructor(private readonly boolService: NavesPoolService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateNavesPoolDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    async updateBool(@Param('id') id: number, @Body() updateDto: UpdateNavesPoolDTO): Promise<UpdateNavesPoolDTO> {
        const updatedBool = await this.boolService.updateNavesBool(id, updateDto);
        return updatedBool;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: NavesPoolDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    domen(@Body() createDto: NavesPoolDTO): Promise<NavesPoolDTO> {
        return this.boolService.createNavesBool(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteBool (@Param('id') id: number): Promise<boolean>  {
    return this.boolService.deleteNavesBool(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllNavesPoolResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getBool(): Promise<AllNavesPoolResponse> {
        const naves = await this.boolService.publicNavesBool();
        return naves;
    }
}
