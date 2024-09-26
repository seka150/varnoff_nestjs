import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderDTO, UpdateOrderDto } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { RolesGuard } from 'src/guards/role-guard';
import { Roles } from 'src/common/decorator';
import { UserRole } from '../users/models/user.model';
import { AllOrderResponse } from './response';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @ApiTags("API")
    @ApiResponse({status: 201, type: OrderDTO })
    @UseGuards(JwtAuthGuard)
    @Post('create')
    order(@Body() createDto: OrderDTO): Promise <OrderDTO> {
        return this.orderService.createOrder(createDto)
    }

    @ApiTags("API")
    @ApiResponse({status: 200, type: AllOrderResponse })
    @UseGuards(JwtAuthGuard)
    @Get('get')
    async getOrder(): Promise <AllOrderResponse> {
        const order = await this.orderService.publicOrder();
        return order;
    }

    @ApiTags("API")
    @ApiResponse({status: 200, type: UpdateOrderDto})
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch('update/:id')
    updateOrder(@Param('id') id: number, @Body() updateDto: UpdateOrderDto): Promise<UpdateOrderDto> {
        return this.orderService.updateOrder(id, updateDto);
    }
}
