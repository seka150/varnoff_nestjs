import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Status } from './models';
import { StatusDto, UpdateStatusDto } from './dto';
import { AllStatusResponse, StatusResponse } from './responce';

@Injectable()
export class StatusService {
    constructor (
        @InjectModel(Status) private readonly statusRepository: typeof Status,
    ) {}

    async createStatus(dto: StatusDto): Promise<StatusDto> {
        try {
            const createdStatus = await this.statusRepository.create({
                status: dto.status
            });
            return createdStatus.toJSON() as StatusDto;
        } catch (error) {
            throw new Error('Failed to create status.');
        }
    }

    async publicStatus(): Promise<AllStatusResponse> {
        try {
            const status = await this.statusRepository.findAll();
            const statusResponses: StatusResponse[] = status.map(data => ({
                status: data.status
            }));
            return {statuses: statusResponses}
        } catch (error) {
            throw new Error('Failed to retrieve statuses.')
        }
    }

    async updateStatus(statusId: number, dto: UpdateStatusDto): Promise<UpdateStatusDto> {
        try {
            await this.statusRepository.update(dto, {where:  {id: statusId}});
            return dto;
        } catch (error) {
            throw new Error ('Failed to update status')
        }
    }
}
