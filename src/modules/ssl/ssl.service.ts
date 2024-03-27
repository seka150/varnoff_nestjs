import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SSL } from './models';
import { SSLDTO, UpdateSSLDTO } from './dto';
import { AllSSLResponse, SSLResponse } from './response';

@Injectable()
export class SslService {
    constructor(
        @InjectModel(SSL) private readonly sslRepository: typeof SSL,
    ) {}

    async createSSL(dto: SSLDTO): Promise<SSLDTO> {
        try {
            const ssl = await this.sslRepository.create({
                title: dto.title,
                description: dto.description,
                price: dto.price,
                serviceId: dto.serviceId 
            });

            return ssl.toJSON() as SSLDTO;
        } catch (error) {
            throw new Error('Failed to create site.');
        }
    }

    async publicSsl(): Promise<AllSSLResponse> {
        try {
            const ssl = await this.sslRepository.findAll();
            const sslResponses: SSLResponse[] = ssl.map(site => ({
                title: site.title,
                description: site.description,
                price: site.price,
            }));
            return { services: sslResponses }; 
        } catch (error) {
            throw new Error('Failed to retrieve sites.');
        }
    }

    async updateSsl(sslId: number, dto: UpdateSSLDTO): Promise<UpdateSSLDTO> {
        try {
            await this.sslRepository.update(dto, { where: { id: sslId } });
            return dto;
        } catch (error) {
            throw new Error('Failed to update site.');
        }
    }

    async deleteSsl(id: number): Promise<boolean> {
        try {
            await this.sslRepository.destroy({ where: { id } });
            return true;
        } catch (error) {
            throw new Error('Failed to delete site.');
        }
    }
}
