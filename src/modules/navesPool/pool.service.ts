import { Injectable } from '@nestjs/common';
import { NavesPool } from './models';
import { InjectModel } from '@nestjs/sequelize';
import { NavesPoolDTO, UpdateNavesPoolDTO } from './dto';
import { AllNavesPoolResponse, NavesPoolResponse} from './response';

@Injectable()
export class NavesPoolService {
    constructor(
        @InjectModel(NavesPool) private readonly navesBoolRepository: typeof NavesPool,
    ) {}

    async createNavesBool(dto: NavesPoolDTO): Promise <NavesPoolDTO> {
        try {
            const createdNavesDomen = await this.navesBoolRepository.create({
                title: dto.title,
                description: dto.description,
                img: dto.img,
                price: dto.price,
                serviceId: dto.serviceId 
            });

            return createdNavesDomen.toJSON() as NavesPoolDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }
    async publicNavesBool(): Promise<AllNavesPoolResponse> {
        try {
            const naves = await this.navesBoolRepository.findAll();
            const navesResponses: NavesPoolResponse[] = naves.map(services => ({
                title: services.title,
                description: services.description,
                img: services.img,
                price: services.price,
                serviceId: services.serviceId
            }));
            return { services: navesResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updateNavesBool(boolId: number, dto: UpdateNavesPoolDTO): Promise<UpdateNavesPoolDTO> {
        try {
            await this.navesBoolRepository.update(dto, { where: { id: boolId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteNavesBool(id: number): Promise<boolean> {
        try {
            await this.navesBoolRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}
