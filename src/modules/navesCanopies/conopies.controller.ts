import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ConopiesService} from './conopies.service';
import { ConopiesDTO, UpdateConopiesDTO} from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AllConopiesResponse} from './response';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';

@Controller('service/naves_conopies')
export class ConopiesController {
    constructor(private readonly conopiesService: ConopiesService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateConopiesDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    async updateConopies(@Param('id') id: number, @Body() updateDto: UpdateConopiesDTO): Promise<UpdateConopiesDTO> {
        const updatedConopies = await this.conopiesService.updateConopiens(id, updateDto);
        return updatedConopies;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: ConopiesDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    domen(@Body() createDto: ConopiesDTO): Promise<ConopiesDTO> {
        return this.conopiesService.createConopies(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteConopies (@Param('id') id: number): Promise<boolean>  {
    return this.conopiesService.deleteConopies(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllConopiesResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getConopies(): Promise<AllConopiesResponse> {
        const conopies = await this.conopiesService.publicConopies();
        return conopies;
    }
}