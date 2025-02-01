import { Module } from '@nestjs/common';
import { NavesBoolController } from './pool.controller';
import { NavesBoolService } from './pool.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { NavesBool } from './models';

@Module({
  imports: [SequelizeModule.forFeature([NavesBool])],
  controllers: [NavesBoolController],
  providers: [NavesBoolService]
})
export class NavesBoolModule {}
