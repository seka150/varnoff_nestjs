import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NavesHomeController } from './home.controller';
import {NavesHome } from './models';
import { NavesHomeService } from './home.service';

@Module({
  imports: [SequelizeModule.forFeature([NavesHome])],
  controllers: [NavesHomeController],
  providers: [NavesHomeService]
})
export class CreateSitesModule {}