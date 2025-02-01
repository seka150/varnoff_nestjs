import { Injectable } from '@nestjs/common';
import { NavesBool } from './models';
import { InjectModel } from '@nestjs/sequelize';
import { NavesBoolDTO, UpdateNavesBoolDTO } from './dto';
import { AllNavesBoolResponse, NavesBoolResponse} from './response';

@Injectable()
export class NavesBoolService {
    constructor(
        @InjectModel(NavesBool) private readonly navesBoolRepository: typeof NavesBool,
    ) {}

    async createNavesBool(dto: NavesBoolDTO): Promise <NavesBoolDTO> {
        try {
            const createdNavesDomen = await this.navesBoolRepository.create({
                title: dto.title,
                desc: dto.desc,
                price: dto.price,
                serviceId: dto.serviceId 
            });

            return createdNavesDomen.toJSON() as NavesBoolDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }
    async publicNavesBool(): Promise<AllNavesBoolResponse> {
        try {
            const naves = await this.navesBoolRepository.findAll();
            const navesResponses: NavesBoolResponse[] = naves.map(services => ({
                title: services.title,
                desc: services.desc,
                price: services.price,
                serviceId: services.serviceId
            }));
            return { services: navesResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updateNavesBool(boolId: number, dto: UpdateNavesBoolDTO): Promise<UpdateNavesBoolDTO> {
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
