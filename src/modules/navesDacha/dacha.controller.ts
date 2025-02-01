import { Body, Controller, Delete, Param, Patch, Post, UseGuards, Get} from '@nestjs/common';
import { NavesDachaService} from './dacha.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { NavesDachaDTO, UpdateNavesDachaDTO} from './dto';
import { AllNavesDachaResponse} from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';

@Controller('service/naves_dacha')
export class NavesDachaController {
    constructor(private readonly navesDachaService: NavesDachaService){}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateNavesDachaDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    updateDacha(@Param('id') id: number, @Body() updateDto: UpdateNavesDachaDTO): Promise<UpdateNavesDachaDTO> {
    return this.navesDachaService.updateNavesDacha(id, updateDto); 
}

    @ApiTags("API")
    @ApiResponse({ status: 201, type: NavesDachaDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    createDacha(@Body() createDto: NavesDachaDTO): Promise<NavesDachaDTO> {
        return this.navesDachaService.createNavesDacha(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteDacha (@Param('id') id: number): Promise<boolean>  {
    return this.navesDachaService.deleteNavesDacha(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllNavesDachaResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getDacha(): Promise<AllNavesDachaResponse> {
        const dacha = await this.navesDachaService.publicNavesDacha();
        return dacha;
    }

}
