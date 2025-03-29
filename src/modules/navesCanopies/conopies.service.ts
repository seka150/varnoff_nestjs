import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ConopiesDTO, UpdateConopiesDTO} from './dto';
import { AllConopiesResponse, ConopiesResponse} from './response/index.js';
import { Conopies} from './models';

@Injectable()
export class ConopiesService {
    constructor(
        @InjectModel(Conopies) private readonly conopiesRepository: typeof Conopies,
    ) {}

    async createConopies(dto: ConopiesDTO): Promise <ConopiesDTO> {
        try {
            const createdConopies = await this.conopiesRepository.create({
                title: dto.title,
                description: dto.description,
                img:dto.img,
                price: dto.price,
                serviceId: dto.serviceId 
            });

            return createdConopies.toJSON() as ConopiesDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }
    async publicConopies(): Promise<AllConopiesResponse> {
        try {
            const conopies = await this.conopiesRepository.findAll();
            const conopiesResponses: ConopiesResponse[] = conopies.map(services => ({
                title: services.title,
                description: services.description,
                img:services.img,
                price: services.price,
                serviceId: services.serviceId
            }));
            return { services: conopiesResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updateConopiens(conopiesId: number, dto: UpdateConopiesDTO): Promise<UpdateConopiesDTO> {
        try {
            await this.conopiesRepository.update(dto, { where: { id: conopiesId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteConopies(id: number): Promise<boolean> {
        try {
            await this.conopiesRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}