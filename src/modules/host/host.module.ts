import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { HostController } from './host.controller';
import { HostService } from './host.service';
import { Host } from './models';

@Module({
    imports: [SequelizeModule.forFeature([Host])],
    controllers: [HostController],
    providers: [HostService]
})

export class HostModule {}