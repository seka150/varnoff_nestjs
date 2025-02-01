import { Module } from '@nestjs/common';
import { Besedka } from './models/index.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { BesedkaController } from './besedka.controller.js';
import { BesedkaService } from './besedka.service.js';

@Module({
    imports: [SequelizeModule.forFeature([Besedka])],
    controllers: [BesedkaController],
    providers: [BesedkaService]
})

export class BesedkaModule {}
