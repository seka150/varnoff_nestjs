import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Host } from './models/index.js';
import { HostDTO, UpdateHostDTO } from './dto';
import { AllHostResponse, HostResponse } from './response/index.js';

@Injectable()
export class HostService {
    constructor(
        @InjectModel(Host) private readonly hostRepository: typeof Host,
    ) {}

    async createHost(dto: HostDTO): Promise <HostDTO> {
        try {
            const createdHost = await this.hostRepository.create({
                option: dto.option,
                practical: dto.practical,
                comfort:dto.comfort,
                perfect: dto.perfect,
                exclusive:dto.exclusive,
                serviceId: dto.serviceId 
            });

            return createdHost.toJSON() as HostDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }
    async publicHost(): Promise<AllHostResponse> {
        try {
            const host = await this.hostRepository.findAll();
            const hostResponses: HostResponse[] = host.map(services => ({
                option: services.option,
                practical: services.practical,
                comfort:services.comfort,
                perfect: services.perfect,
                exclusive:services.exclusive,
            }));
            return { services: hostResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updateHost(hostId: number, dto: UpdateHostDTO): Promise<UpdateHostDTO> {
        try {
            await this.hostRepository.update(dto, { where: { id: hostId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteHost(id: number): Promise<boolean> {
        try {
            await this.hostRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}
