import { Body, Controller, Delete, Param, Patch, Post, UseGuards, Get} from '@nestjs/common';
import { NavesHomeService } from './home.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { NavesHomeDTO, UpdateNavesHomeDTO} from './dto';
import { AllNavesHomeResponse } from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';

@Controller('service/naves_home')
export class NavesHomeController {
    constructor(private readonly navesHomeService: NavesHomeService){}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateNavesHomeDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    updateHome(@Param('id') id: number, @Body() updateDto: UpdateNavesHomeDTO): Promise<UpdateNavesHomeDTO> {
    return this.navesHomeService.updateHomeService(id, updateDto); 
}

    @ApiTags("API")
    @ApiResponse({ status: 201, type: NavesHomeDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    createHome(@Body() createDto: NavesHomeDTO): Promise<NavesHomeDTO> {
        return this.navesHomeService.navesHomeService(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteService (@Param('id') id: number): Promise<boolean>  {
    return this.deleteService(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllNavesHomeResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getServices(): Promise<AllNavesHomeResponse> {
        const home = await this.navesHomeService.publicHomeService();
        return home;
    }

}
