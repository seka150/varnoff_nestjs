import { Module } from '@nestjs/common';
import { Host } from './models/index.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { HostController } from './host.controller';
import { HostService } from './host.service';

@Module({
    imports: [SequelizeModule.forFeature([Host])],
    controllers: [HostController],
    providers: [HostService]
})

export class HostModule {}
