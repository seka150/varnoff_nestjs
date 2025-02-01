import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { ConopiesController} from './conopies.controller';
import { ConopiesService} from './conopies.service';
import { Conopies} from './models';

@Module({
    imports: [SequelizeModule.forFeature([Conopies])],
    controllers: [ConopiesController],
    providers: [ConopiesService]
})

export class ConopiesModule {}