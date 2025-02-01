import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { BesedkaService } from "./besedka.service";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/guards/jwt-guard";
import { BesedkaDTO, UpdateBesedkaDTO } from "./dto";
import { AllBesedkaResponse } from "./response";
import { RolesGuard } from "src/guards/role-guard";
import { UserRole } from "../users/models/user.model";
import { Roles } from "src/common/decorator";


@Controller('service/naves_besedka')
export class BesedkaController {
    constructor(private readonly besedkaService: BesedkaService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdateBesedkaDTO })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    async updateBesedka(@Param('id') id: number, @Body() updateDto: UpdateBesedkaDTO): Promise<UpdateBesedkaDTO> {
        const updatedBesedka = await this.besedkaService.updateBesedka(id, updateDto);
        return updatedBesedka;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: BesedkaDTO})
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Post('create')
    besedka(@Body() createDto: BesedkaDTO): Promise<BesedkaDTO> {
        return this.besedkaService.createBesedka(createDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Delete('delete/:id')
    deleteBesedka (@Param('id') id: number): Promise<boolean>  {
    return this.besedkaService.deleteBesedka(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllBesedkaResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getHost(): Promise<AllBesedkaResponse> {
        const besedka = await this.besedkaService.publicBesedka();
        return besedka;
    }
}
