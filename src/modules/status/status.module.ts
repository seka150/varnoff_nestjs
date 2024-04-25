import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Status } from './models';

@Module({
  imports: [SequelizeModule.forFeature([Status])],
  providers: [StatusService],
  controllers: [StatusController]
})
export class StatusModule {}
