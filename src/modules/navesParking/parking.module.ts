import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Parking} from './models';
import { ParkingController} from './parking.controller';
import { ParkingService } from './parking.service';

@Module({
    imports: [SequelizeModule.forFeature([Parking])],
    controllers: [ParkingController],
    providers: [ParkingService]
})
export class ParkingModule {}
