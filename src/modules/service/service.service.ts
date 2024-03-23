import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Service } from './models';
import { CreateSeviceDTO, UpdateServiceDTO } from './dto';
import { AllServiceResponse, ServiceResponse } from './response';

@Injectable()
export class ServiceService {
    constructor(
        @InjectModel(Service) private readonly serviceRepository: typeof Service
    ) {}

    async createService(dto: CreateSeviceDTO): Promise<CreateSeviceDTO> {
        try {
        await this.serviceRepository.create({
            name: dto.name,
            description: dto.description,
            price: dto.price,
        });
        return dto;
        }catch (e) {
        throw new Error(e)
        }
    }

    async publicService(): Promise<AllServiceResponse> {
        try {
            const services = await this.serviceRepository.findAll();
            const serviceResponses: ServiceResponse[] = services.map(service => ({
                name: service.name,
                description: service.description,
                price: service.price
            }));
            return { services: serviceResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve services.');
        }
    }

    async updateService (serviceId: number, dto: UpdateServiceDTO): Promise<UpdateServiceDTO> {
        try {
        await this.serviceRepository.update(dto, {where: {id: serviceId}})
        return dto
        }catch (e) {
        throw new Error(e)
        }
    }

    async deleteService (id: number): Promise<boolean> {
        try {
        await this.serviceRepository.destroy({where: {id}})
        return true
        }catch (e) {
        throw new Error(e)
        }
    }
    }