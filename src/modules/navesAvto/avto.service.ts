import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Avto } from './model';
import { AvtoDTO, UpdateAvtoDTO } from './dto';
import { AllAvtoResponse, AvtoResponse } from './response';

@Injectable()
export class AvtoService {
    constructor(
        @InjectModel(Avto) private readonly avtoRepository: typeof Avto,
    ) {}

    async createAvto(dto: AvtoDTO): Promise<AvtoDTO> {
        try {
            const avto = await this.avtoRepository.create({
                title: dto.title,
                description: dto.description,
                img: dto.img,
                price: dto.price,
                serviceId: dto.serviceId 
            });

            return avto.toJSON() as AvtoDTO;
        } catch (error) {
            throw new Error('Failed to create vehicle.');
        }
    }

    async publicAvto(): Promise<AllAvtoResponse> {
        try {
            const avto = await this.avtoRepository.findAll();
            const avtoResponse: AvtoResponse[] = avto.map(services => ({
                title: services.title,
                description: services.description,
                img: services.img,
                price: services.price,
                serviceId: services.serviceId
            }));
            return { services: avtoResponse }; 
        } catch (error) {
            throw new Error('Failed to retrieve vehicles.');
        }
    }

    async updateAvto(avtoId: number, dto: UpdateAvtoDTO): Promise<UpdateAvtoDTO> {
        try {
            await this.avtoRepository.update(dto, { where: { id: avtoId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update vehicle.');
        }
    }

    async deleteAvto(id: number): Promise<boolean> {
        try {
            await this.avtoRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete vehicle.');
        }
    }
}
