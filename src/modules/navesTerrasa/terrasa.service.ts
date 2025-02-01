import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Terrasa } from './models';
import { TerrasaDTO, UpdateTerrasaDTO } from './dto';
import { AllTerrasaResponse, TerrasaResponse } from './response';

@Injectable()
export class TerrasaService {
    constructor(
        @InjectModel(Terrasa) private readonly terrasaRepository: typeof Terrasa,
    ) {}

    async createTerrasa(dto: TerrasaDTO): Promise <TerrasaDTO> {
        try {
            const createdTerrasa = await this.terrasaRepository.create({
                title: dto.title,
                description: dto.description,
                price: dto.price,
                serviceId: dto.serviceId 
            });

            return createdTerrasa.toJSON() as TerrasaDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }

    async publicTerrasa(): Promise<AllTerrasaResponse> {
        try {
            const terrasa = await this.terrasaRepository.findAll();
            const TerrasaResponse: TerrasaResponse[] = terrasa.map(services => ({
                title: services.title,
                description:services.description,
                price: services.price,
                serviceId: services.serviceId
            }));
            return { services:  TerrasaResponse}; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updateTerrasa(terrasaId: number, dto: UpdateTerrasaDTO): Promise<UpdateTerrasaDTO> {
        try {
            await this.terrasaRepository.update(dto, { where: { id: terrasaId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteTerrasa(id: number): Promise<boolean> {
        try {
            await this.terrasaRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }

}
