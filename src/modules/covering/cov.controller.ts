import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CoveringService} from './cov.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CoveringDto} from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { RolesGuard } from 'src/guards/role-guard';
import { UserRole } from '../users/models/user.model';
import { Roles } from 'src/common/decorator';
import { AllCoveringResponse} from './responce';

@Controller('covering')
export class CoveringController {
    constructor(private readonly covService: CoveringService){}

    @ApiTags("API")
    @ApiResponse({status: 201, type: CoveringDto})
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    createCovering(@Body() createDto: CoveringDto): Promise<CoveringDto> {
        return this.covService.createCov(createDto);
    }

    @ApiTags("API")
    @ApiResponse({status: 200, type: AllCoveringResponse})
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.USER)
    @Get('get')
    async getCovering(): Promise<AllCoveringResponse> {
        const cov = await this.covService.publicStatus();
        return cov;
    }
}
