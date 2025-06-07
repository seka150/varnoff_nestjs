import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Covering} from './models';
import { CoveringDto} from './dto';
import { AllCoveringResponse, CoveringResponse} from './responce';

@Injectable()
export class CoveringService {
    constructor (
        @InjectModel(Covering) private readonly covRepository: typeof Covering,
    ) {}

    async createCov(dto: CoveringDto): Promise<CoveringDto> {
        try {
            const createdCov = await this.covRepository.create({
                type: dto.type
            });
            return createdCov.toJSON() as CoveringDto;
        } catch (error) {
            throw new Error('Failed to create status.');
        }
    }

    async publicStatus(): Promise<AllCoveringResponse> {
        try {
            const cov = await this.covRepository.findAll();
            const covResponses: CoveringResponse[] = cov.map(data => ({
                id: data.id,
                type: data.type
            }));
            return {type: covResponses}
        } catch (error) {
            throw new Error('Failed to retrieve statuses.')
        }
    }
}
