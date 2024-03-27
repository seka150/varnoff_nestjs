import { Module } from '@nestjs/common';
import { DomenController } from './domen.controller';
import { DomenService } from './domen.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Domen } from './models';

@Module({
  imports: [SequelizeModule.forFeature([Domen])],
  controllers: [DomenController],
  providers: [DomenService]
})
export class DomenModule {}
