import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './model';
import { OrderDTO, UpdateOrderDto } from './dto';
import { AllOrderResponse, OrderResponse } from './response';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order) private readonly orderRepository: typeof Order,
    ) {}

    async createOrder(dto: OrderDTO): Promise<OrderDTO> {
        try {
            const createdOrder = await this.orderRepository.create({
                userId: dto.userId,
                length: dto.length,
                height: dto.height,
                width: dto.width,
                statusId: dto.statusId,
                serviceId: dto.serviceId,
                coveringId: dto.coveringId
            });
            return createdOrder.toJSON() as OrderDTO;
        } catch (error) {
            throw new Error('Failed to create order')
        }
    }

    public async publicOrder(): Promise<AllOrderResponse> {
        try {
            const order = await this.orderRepository.findAll();
            const orderResponses: OrderResponse[] = order.map(orders => ({
                id: orders.id,
                length: orders.length,
                height: orders.height,
                width: orders.width,
                userId: orders.userId,
                statusId: orders.statusId,
                serviceId: orders.serviceId,
                coveringId: orders.coveringId
            }));
            return { orders: orderResponses };
        } catch (error) {
            throw new Error('Failed to get order')
        }
    }

    async updateOrder(orderId: number, dto: UpdateOrderDto): Promise<UpdateOrderDto> {
        try {
            await this.orderRepository.update(dto, { where: { id: orderId } });
            return dto; 
        } catch (error) {
            throw new Error('Failed to update order');
        }
    }
    
}

