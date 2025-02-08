import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { BesedService } from "./besedka.service";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/guards/jwt-guard";
import { BesedDTO, UpdateBesedDTO } from "./dto";
import { AllBesedResponse } from "./response";
import { RolesGuard } from "src/guards/role-guard";
import { UserRole } from "../users/models/user.model";
import { Roles } from "src/common/decorator";


@Controller('service/naves_besed')
export class BesedController {
    constructor(private readonly besedkaService: BesedService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateBesedDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    async updateBesedka(@Param('id') id: number, @Body() updateDto: UpdateBesedDTO): Promise<UpdateBesedDTO> {
        const updatedBesedka = await this.besedkaService.updateBesedka(id, updateDto);
        return updatedBesedka;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: BesedDTO})
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    besedka(@Body() createDto: BesedDTO): Promise<BesedDTO> {
        return this.besedkaService.createBesedka(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteBesedka (@Param('id') id: number): Promise<boolean>  {
    return this.besedkaService.deleteBesedka(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllBesedResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getHost(): Promise<AllBesedResponse> {
        const besedka = await this.besedkaService.publicBesedka();
        return besedka;
    }
}
