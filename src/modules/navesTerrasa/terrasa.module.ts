import { Module } from '@nestjs/common';
import { TerrasaController } from './terrasa.controller';
import { TerrasaService } from './terrasa.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Terrasa } from './models';

@Module({
  imports: [SequelizeModule.forFeature([Terrasa])],
  controllers: [TerrasaController],
  providers: [TerrasaService]
})
export class TerrasaModule {}
