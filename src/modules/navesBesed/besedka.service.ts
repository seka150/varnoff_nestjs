import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Besed } from './models/index.js';
import { BesedDTO, UpdateBesedDTO } from './dto/index.js';
import { AllBesedResponse, BesedResponse } from './response/index.js';

@Injectable()
export class BesedService {
    constructor(
        @InjectModel(Besed) private readonly besedkaRepository: typeof Besed,
    ) {}

    async createBesedka(dto: BesedDTO): Promise <BesedDTO> {
        try {
            const createdBesedka = await this.besedkaRepository.create({
                title: dto.title,
                desc: dto.desc,
                img:dto.img,
                price: dto.price,
                serviceId: dto.serviceId 
            });

            return createdBesedka.toJSON() as BesedDTO;
        } catch (error) {
            throw new Error('Failed to create besedka.');
        }
    }
    async publicBesedka(): Promise<AllBesedResponse> {
        try {
            const besedka = await this.besedkaRepository.findAll();
            const besedkaResponses: BesedResponse[] = besedka.map(services => ({
                title: services.title,
                desc: services.desc,
                img:services.img,
                price: services.price,
                serviceId: services.serviceId
            }));
            return { services: besedkaResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve besedka.');
        }
    }

    async updateBesedka(besedkaId: number, dto: UpdateBesedDTO): Promise<UpdateBesedDTO> {
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
