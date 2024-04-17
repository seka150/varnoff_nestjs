import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './model';

@Module({
  imports: [SequelizeModule.forFeature([Order])],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
