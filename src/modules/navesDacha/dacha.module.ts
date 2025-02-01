import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NavesDachaController} from './dacha.controller';
import { NavesDachaService} from './dacha.service';
import { NavesDacha} from './models';

@Module({
  imports: [SequelizeModule.forFeature([NavesDacha])],
  controllers: [NavesDachaController],
  providers: [NavesDachaService]
})
export class NavesDachaModule {}