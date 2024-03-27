import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RentServer } from './models';
import { RentServerDTO, UpdateRentServerDTO } from './dto';
import { AllRentServerResponse, RentServerResponse } from './response';

@Injectable()
export class RentServerService {
    constructor(
        @InjectModel(RentServer) private readonly rentServerRepository: typeof RentServer,
    ) {}

    async createRentServer(dto: RentServerDTO): Promise <RentServerDTO> {
        try {
            const createdRentServer = await this.rentServerRepository.create({
                title: dto.title,
                description: dto.description,
                serviceId: dto.serviceId 
            });

            return createdRentServer.toJSON() as RentServerDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }

    async publicRentServer(): Promise<AllRentServerResponse> {
        try {
            const rentServer = await this.rentServerRepository.findAll();
            const RentServerResponse: RentServerResponse[] = rentServer.map(services => ({
                title: services.title,
                description:services.description,
            }));
            return { services:  RentServerResponse}; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updateHost(rentServerId: number, dto: UpdateRentServerDTO): Promise<UpdateRentServerDTO> {
        try {
            await this.rentServerRepository.update(dto, { where: { id: rentServerId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteRentService(id: number): Promise<boolean> {
        try {
            await this.rentServerRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }

}
