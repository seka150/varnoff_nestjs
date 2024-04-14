import { Body, Controller, Delete, Param, Patch, Post, UseGuards, Get} from '@nestjs/common';
import { CreateSitesService } from './create-sites.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CreateSitesDTO, UpdateSitesDTO } from './dto';
import { AllCreateSitesResponse } from './response';

@Controller('service/create-sites')
export class CreateSitesController {
    constructor(private readonly createSitesService: CreateSitesService){}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateSitesDTO })
    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    updateSites(@Param('id') id: number, @Body() updateDto: UpdateSitesDTO): Promise<UpdateSitesDTO> {
    return this.createSitesService.updateSiteService(id, updateDto); 
}

    @ApiTags("API")
    @ApiResponse({ status: 201, type: CreateSitesDTO })
    @UseGuards(JwtAuthGuard)
    @Post('create')
    createSites(@Body() createDto: CreateSitesDTO): Promise<CreateSitesDTO> {
        return this.createSitesService.createSiteService(createDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    deleteService (@Param('id') id: number): Promise<boolean>  {
    return this.createSitesService.deleteSiteService(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllCreateSitesResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getServices(): Promise<AllCreateSitesResponse> {
        const sites = await this.createSitesService.publicSiteService();
        return sites;
    }

}
