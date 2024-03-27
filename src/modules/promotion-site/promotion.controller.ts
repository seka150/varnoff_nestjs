import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { PromotionService } from "./promotion.service";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/guards/jwt-guard";
import { PromotionDTO, UpdatePromotionDTO } from "./dto";
import { AllPromotionResponse } from "./response";


@Controller('promotion')
export class PromotionController {
    constructor(private readonly promotionService: PromotionService) {}

    @ApiTags("API")
    @ApiResponse({ status: 200, type: UpdatePromotionDTO })
    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    async updatePromotion(@Param('id') id: number, @Body() updateDto: UpdatePromotionDTO): Promise<UpdatePromotionDTO> {
        const updatedPromotion = await this.promotionService.updatePromotion(id, updateDto);
        return updatedPromotion;
    }

    @ApiTags("API")
    @ApiResponse({ status: 201, type: PromotionDTO})
    @UseGuards(JwtAuthGuard)
    @Post('create')
    promotion(@Body() createDto: PromotionDTO): Promise<PromotionDTO> {
        return this.promotionService.createPromotion(createDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    deletePromotion (@Param('id') id: number): Promise<boolean>  {
    return this.promotionService.deleteHost(id);
}

    @ApiTags('API')
    @ApiResponse({ status: 200, type: AllPromotionResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getHost(): Promise<AllPromotionResponse> {
        const promotion = await this.promotionService.publicPromotion();
        return promotion;
    }
}
