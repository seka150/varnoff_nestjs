import { Module } from '@nestjs/common';
import { Promotion } from './models/index.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { PromotionController } from './promotion.controller.js';
import { PromotionService } from './promotion.service.js';

@Module({
    imports: [SequelizeModule.forFeature([Promotion])],
    controllers: [PromotionController],
    providers: [PromotionService]
})

export class PromotionModule {}
