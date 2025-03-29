import { Module } from '@nestjs/common';
import { CoveringService} from './cov.service';
import { CoveringController} from './cov.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Covering} from './models';

@Module({
  imports: [SequelizeModule.forFeature([Covering])],
  providers: [CoveringService],
  controllers: [CoveringController]
})
export class CoveringModule {}
