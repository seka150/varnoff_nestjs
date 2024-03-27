import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSites } from './models';
import { CreateSitesDTO, UpdateSitesDTO } from './dto';
import { AllCreateSitesResponse, CreateSitesResponse } from './response';

@Injectable()
export class CreateSitesService {
    constructor(
        @InjectModel(CreateSites) private readonly sitesRepository: typeof CreateSites,
    ) {}

    async createSiteService(dto: CreateSitesDTO): Promise<CreateSitesDTO> {
        try {
            const createdSite = await this.sitesRepository.create({
                title: dto.title,
                description: dto.description,
                price: dto.price,
                serviceId: dto.serviceId 
            });

            return createdSite.toJSON() as CreateSitesDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }

    async publicSiteService(): Promise<AllCreateSitesResponse> {
        try {
            const sites = await this.sitesRepository.findAll();
            const sitesResponses: CreateSitesResponse[] = sites.map(site => ({
                title: site.title,
                description: site.description,
                price: site.price,
            }));
            return { services: sitesResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updateSiteService(sitesId: number, dto: UpdateSitesDTO): Promise<UpdateSitesDTO> {
        try {
            await this.sitesRepository.update(dto, { where: { id: sitesId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteSiteService(id: number): Promise<boolean> {
        try {
            await this.sitesRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}
