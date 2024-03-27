import { Module } from '@nestjs/common';
import { RentServerController } from './rent-server.controller';
import { RentServerService } from './rent-server.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RentServer } from './models';

@Module({
  imports: [SequelizeModule.forFeature([RentServer])],
  controllers: [RentServerController],
  providers: [RentServerService]
})
export class RentServerModule {}
