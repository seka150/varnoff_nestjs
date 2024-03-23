import { Body, Controller, Delete, Patch, Post, Req, UseGuards, Get, Param } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSeviceDTO, UpdateServiceDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { AllServiceResponse, ServiceResponse } from './response';

@Controller('service')
export class ServiceController {
    constructor(private readonly serviceService: ServiceService){}

    @ApiTags("API")
    @ApiResponse({status: 200, type: UpdateServiceDTO})
    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    updateService(@Param('id') id: number, @Body() updateDto: UpdateServiceDTO): Promise<UpdateServiceDTO> {
    return this.serviceService.updateService(id, updateDto);
}


    @ApiTags("API")
    @ApiResponse({ status: 201, type: CreateSeviceDTO })
    @UseGuards(JwtAuthGuard)
    @Post('create')
    createService(@Body() createDto: CreateSeviceDTO): Promise<CreateSeviceDTO> {
        return this.serviceService.createService(createDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    deleteService (@Param('id') id: number): Promise<boolean>  {
    return this.serviceService.deleteService(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllServiceResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getServices(): Promise<AllServiceResponse> {
        const services = await this.serviceService.publicService();
        return services;
    }
}
