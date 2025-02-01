import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Avto } from './model';
import { AvtoController } from './avto.controller';
import { AvtoService } from './avto.service';

@Module({
    imports: [SequelizeModule.forFeature([Avto])],
    controllers: [AvtoController],
    providers: [AvtoService]
})
export class AvtoModule {}