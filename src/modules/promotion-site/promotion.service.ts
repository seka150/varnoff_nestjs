import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Promotion } from './models/index.js';
import { PromotionDTO, UpdatePromotionDTO } from './dto/index.js';
import { AllPromotionResponse, PromotionResponse } from './response/index.js';

@Injectable()
export class PromotionService {
    constructor(
        @InjectModel(Promotion) private readonly promotionRepository: typeof Promotion,
    ) {}

    async createPromotion(dto: PromotionDTO): Promise <PromotionDTO> {
        try {
            const createdPromotion = await this.promotionRepository.create({
                title: dto.title,
                delovoi: dto.delovoi,
                business:dto.business,
                profi: dto.profi,
                lider:dto.lider,
                partner: dto.partner,
                serviceId: dto.serviceId 
            });

            return createdPromotion.toJSON() as PromotionDTO;
        } catch (error) {
            throw new Error('Failed to create promotion.');
        }
    }
    async publicPromotion(): Promise<AllPromotionResponse> {
        try {
            const promotion = await this.promotionRepository.findAll();
            const promotionResponses: PromotionResponse[] = promotion.map(services => ({
                title: services.title,
                delovoi: services.delovoi,
                business:services.business,
                profi: services.profi,
                lider:services.lider,
                partner: services.partner,
                serviceId: services.serviceId
            }));
            return { services: promotionResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updatePromotion(promotionId: number, dto: UpdatePromotionDTO): Promise<UpdatePromotionDTO> {
        try {
            await this.promotionRepository.update(dto, { where: { id: promotionId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteHost(id: number): Promise<boolean> {
        try {
            await this.promotionRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}
