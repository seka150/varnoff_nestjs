import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NavesHome } from './models';
import { NavesHomeDTO, UpdateNavesHomeDTO} from './dto';
import { AllNavesHomeResponse, NavesHomeResponse } from './response';
import { NavesHomeController } from './home.controller';

@Injectable()
export class NavesHomeService {
    constructor(
        @InjectModel(NavesHome) private readonly navesHomeRepository: typeof NavesHome,
    ) {}

    async navesHomeService(dto: NavesHomeDTO): Promise<NavesHomeDTO> {
        try {
            const navesHome = await this.navesHomeRepository.create({
                title: dto.title,
                description: dto.description,
                img: dto.img,
                price: dto.price,
                serviceId: dto.serviceId 
            });

            return navesHome.toJSON() as NavesHomeDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }

    async publicHomeService(): Promise<AllNavesHomeResponse> {
        try {
            const home = await this.navesHomeRepository.findAll();
            const homeResponses: NavesHomeResponse[] = home.map(service => ({
                title: service.title,
                description: service.description,
                img: service.img,
                price: service.price,
                serviceId: service.serviceId
            }));
            return { services: homeResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updateHomeService(homeId: number, dto: UpdateNavesHomeDTO): Promise<UpdateNavesHomeDTO> {
        try {
            await this.navesHomeRepository.update(dto, { where: { id: homeId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteHomeService(id: number): Promise<boolean> {
        try {
            await this.navesHomeRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}
