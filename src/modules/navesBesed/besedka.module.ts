import { Module } from '@nestjs/common';
import { Besed } from './models/index.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { BesedController } from './besedka.controller.js';
import { BesedService } from './besedka.service.js';

@Module({
    imports: [SequelizeModule.forFeature([Besed])],
    controllers: [BesedController],
    providers: [BesedService]
})

export class BesedModule {}
