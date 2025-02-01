import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Parking } from './models';
import { ParkingDTO, UpdateParkingDTO } from './dto';
import { AllParkingResponse, ParkingResponse } from './response';

@Injectable()
export class ParkingService {
    constructor(
        @InjectModel(Parking) private readonly parkingRepository: typeof Parking,
    ) {}

    async createParking(dto: ParkingDTO): Promise <ParkingDTO> {
        try {
            const createdParking = await this.parkingRepository.create({
                title: dto.title,
                desc: dto.desc,
                price: dto.price,
                serviceId: dto.serviceId 
            });

            return createdParking.toJSON() as ParkingDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }

    async publicParking(): Promise<AllParkingResponse> {
        try {
            const parking = await this.parkingRepository.findAll();
            const parkingResponse: ParkingResponse[] = parking.map(services => ({
                title: services.title,
                desc: services.desc,
                price: services.price,
                serviceId: services.serviceId
            }));
            return { services: parkingResponse }; 
        } catch (error) {
            throw new Error('Failed to retrieve parking.');
        }
    }

    async updateParking(parkingId: number, dto: UpdateParkingDTO): Promise<UpdateParkingDTO> {
        try {
            await this.parkingRepository.update(dto, { where: { id: parkingId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteParking(id: number): Promise<boolean> {
        try {
            await this.parkingRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}
