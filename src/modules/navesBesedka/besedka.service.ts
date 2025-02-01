import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Besedka } from './models/index.js';
import { BesedkaDTO, UpdateBesedkaDTO } from './dto/index.js';
import { AllBesedkaResponse, BesedkaResponse } from './response/index.js';

@Injectable()
export class BesedkaService {
    constructor(
        @InjectModel(Besedka) private readonly besedkaRepository: typeof Besedka,
    ) {}

    async createBesedka(dto: BesedkaDTO): Promise <BesedkaDTO> {
        try {
            const createdBesedka = await this.besedkaRepository.create({
                title: dto.title,
                desc: dto.desc,
                price:dto.price,
                serviceId: dto.serviceId 
            });

            return createdBesedka.toJSON() as BesedkaDTO;
        } catch (error) {
            throw new Error('Failed to create besedka.');
        }
    }
    async publicBesedka(): Promise<AllBesedkaResponse> {
        try {
            const besedka = await this.besedkaRepository.findAll();
            const besedkaResponses: BesedkaResponse[] = besedka.map(services => ({
                title: services.title,
                desc: services.desc,
                price:services.price,
                serviceId: services.serviceId
            }));
            return { services: besedkaResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve besedka.');
        }
    }

    async updateBesedka(besedkaId: number, dto: UpdateBesedkaDTO): Promise<UpdateBesedkaDTO> {
        try {
            await this.besedkaRepository.update(dto, { where: { id: besedkaId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteBesedka(id: number): Promise<boolean> {
        try {
            await this.besedkaRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}
