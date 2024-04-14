import { Injectable } from '@nestjs/common';
import { Domen } from './models';
import { InjectModel } from '@nestjs/sequelize';
import { DomenDTO, UpdateDomenDTO } from './dto';
import { AllDomenResponse, DomenResponse } from './response';

@Injectable()
export class DomenService {
    constructor(
        @InjectModel(Domen) private readonly domenRepository: typeof Domen,
    ) {}

    async createDomen(dto: DomenDTO): Promise <DomenDTO> {
        try {
            const createdDomen = await this.domenRepository.create({
                zone: dto.zone,
                register: dto.register,
                continue: dto.continue,
                serviceId: dto.serviceId 
            });

            return createdDomen.toJSON() as DomenDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }
    async publicDomen(): Promise<AllDomenResponse> {
        try {
            const domen = await this.domenRepository.findAll();
            const domenResponses: DomenResponse[] = domen.map(services => ({
                zone: services.zone,
                register: services.register,
                continue: services.continue,
                serviceId: services.serviceId
            }));
            return { services: domenResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updateDomen(domenId: number, dto: UpdateDomenDTO): Promise<UpdateDomenDTO> {
        try {
            await this.domenRepository.update(dto, { where: { id: domenId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteDomen(id: number): Promise<boolean> {
        try {
            await this.domenRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}
