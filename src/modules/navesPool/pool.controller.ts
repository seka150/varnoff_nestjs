import { Body, Controller, Param, Patch, Post, UseGuards, Delete, Get } from '@nestjs/common';
import { NavesBoolService } from './pool.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { NavesBoolDTO, UpdateNavesBoolDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { AllNavesBoolResponse } from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';

@Controller('service/naves_pool')
export class NavesBoolController {
    constructor(private readonly boolService: NavesBoolService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateNavesBoolDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    async updateBool(@Param('id') id: number, @Body() updateDto: UpdateNavesBoolDTO): Promise<UpdateNavesBoolDTO> {
        const updatedBool = await this.boolService.updateNavesBool(id, updateDto);
        return updatedBool;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: NavesBoolDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    domen(@Body() createDto: NavesBoolDTO): Promise<NavesBoolDTO> {
        return this.boolService.createNavesBool(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteBool (@Param('id') id: number): Promise<boolean>  {
    return this.boolService.deleteNavesBool(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllNavesBoolResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getBool(): Promise<AllNavesBoolResponse> {
        const naves = await this.boolService.publicNavesBool();
        return naves;
    }
}
