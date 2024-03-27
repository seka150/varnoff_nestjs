import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CreateSitesController } from './create-sites.controller';
import { CreateSitesService } from './create-sites.service';
import { CreateSites } from './models';

@Module({
  imports: [SequelizeModule.forFeature([CreateSites])],
  controllers: [CreateSitesController],
  providers: [CreateSitesService]
})
export class CreateSitesModule {}