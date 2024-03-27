import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SSLController } from './ssl.controller';
import { SslService } from './ssl.service';
import { SSL } from './models';

@Module({
  imports: [SequelizeModule.forFeature([SSL])],
  controllers: [SSLController],
  providers: [SslService]
})
export class SslModule {}