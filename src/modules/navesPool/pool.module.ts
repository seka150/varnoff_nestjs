import { Module } from '@nestjs/common';
import { NavesPoolController } from './pool.controller';
import { NavesPoolService } from './pool.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { NavesPool } from './models';

@Module({
  imports: [SequelizeModule.forFeature([NavesPool])],
  controllers: [NavesPoolController],
  providers: [NavesPoolService]
})
export class NavesPoolModule {}
