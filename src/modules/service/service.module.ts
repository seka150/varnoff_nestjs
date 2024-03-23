import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Service } from './models';

@Module({
  imports: [SequelizeModule.forFeature([Service])],
  controllers: [ServiceController],
  providers: [ServiceService],
  exports: [ServiceService]
})
export class ServiceModule {}
