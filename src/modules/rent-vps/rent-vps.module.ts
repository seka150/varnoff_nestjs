import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RentVps } from './models';
import { RentVpsController } from './rent-vps.controller';
import { RentVpsService } from './rent-vps.service';

@Module({
    imports: [SequelizeModule.forFeature([RentVps])],
    controllers: [RentVpsController],
    providers: [RentVpsService]
})
export class RentVpsModule {}
