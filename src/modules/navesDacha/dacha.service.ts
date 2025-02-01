import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NavesDacha} from './models';
import { NavesDachaDTO, UpdateNavesDachaDTO} from './dto';
import { AllNavesDachaResponse, NavesDachaResponse} from './response';

@Injectable()
export class NavesDachaService {
    constructor(
        @InjectModel(NavesDacha) private readonly navesDachaRepository: typeof NavesDacha,
    ) {}

    async createNavesDacha(dto: NavesDachaDTO): Promise<NavesDachaDTO> {
        try {
            const navesDacha = await this.navesDachaRepository.create({
                title: dto.title,
                description: dto.description,
                price: dto.price,
                serviceId: dto.serviceId 
            });

            return navesDacha.toJSON() as NavesDachaDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }

    async publicNavesDacha(): Promise<AllNavesDachaResponse> {
        try {
            const dacha = await this.navesDachaRepository.findAll();
            const NavesDachaResponse: NavesDachaResponse[] = dacha.map(site => ({
                title: site.title,
                description: site.description,
                price: site.price,
                serviceId: site.serviceId
            }));
            return { services: NavesDachaResponse }; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updateNavesDacha(dachaId: number, dto: UpdateNavesDachaDTO): Promise<UpdateNavesDachaDTO> {
        try {
            await this.navesDachaRepository.update(dto, { where: { id: dachaId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteNavesDacha(id: number): Promise<boolean> {
        try {
            await this.navesDachaRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}
