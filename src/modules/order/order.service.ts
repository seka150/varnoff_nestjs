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
                title: dto.title,
                description: dto.description,
                statusId: dto.statusId,
                serviceId: dto.serviceId
            });
            return createdOrder.toJSON() as OrderDTO;
        } catch (error) {
            throw new Error('Failed to create order')
        }
    }

    async publicOrder(): Promise<AllOrderResponse> {
        try {
            const order = await this.orderRepository.findAll();
            const orderResponses: OrderResponse[] = order.map(services => ({
                title: services.title,
                description: services.description,
                userId: services.userId,
                statusId: services.statusId,
                serviceId: services.serviceId
            }));
            return {services: orderResponses};
        } catch (error) {
            throw new Error('Failed to get order')
        }
    }

    async updateOrder(orderId: number, dto: UpdateOrderDto): Promise<UpdateOrderDto> {
        try {
            await this.orderRepository.update(dto, {where: {id: orderId}})
            return dto;
        } catch (error) {
            throw new Error('Failed to update order')
        }
    }
}

