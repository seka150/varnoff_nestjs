import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RentVps } from './models';
import { RentVpsDTO, UpdateRentVpsDTO } from './dto';
import { AllRentVpsResponse, RentVpsResponse } from './response';

@Injectable()
export class RentVpsService {
    constructor(
        @InjectModel(RentVps) private readonly rentVpsRepository: typeof RentVps,
    ) {}

    async createRentVps(dto: RentVpsDTO): Promise <RentVpsDTO> {
        try {
            const createdRentVps = await this.rentVpsRepository.create({
                title: dto.title,
                perMonth: dto.perMonth,
                connect: dto.connect,
                core: dto.core,
                ram: dto.ram,
                hdd: dto.hdd,
                os: dto.os,
                cPanel: dto.cPanel,
                option: dto.option,
                serviceId: dto.serviceId 
            });

            return createdRentVps.toJSON() as RentVpsDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }

    async publicRentVps(): Promise<AllRentVpsResponse> {
        try {
            const rentVps = await this.rentVpsRepository.findAll();
            const rentVpsResponse: RentVpsResponse[] = rentVps.map(services => ({
                title: services.title,
                perMonth: services.perMonth,
                connect: services.connect,
                core: services.core,
                ram: services.ram,
                hdd: services.hdd,
                os: services.os,
                cPanel: services.cPanel,
                option: services.option
                
            }));
            return { services: rentVpsResponse }; 
        } catch (error) {
            throw new Error('Failed to retrieve rent VPS.');
        }
    }

    async updateVps(rentVpsId: number, dto: UpdateRentVpsDTO): Promise<UpdateRentVpsDTO> {
        try {
            await this.rentVpsRepository.update(dto, { where: { id: rentVpsId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteRentVps(id: number): Promise<boolean> {
        try {
            await this.rentVpsRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}
