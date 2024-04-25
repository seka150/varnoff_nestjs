import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class OrderResponse {

    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsNumber()
    userId: number;

    @ApiProperty()
    @IsNumber()
    serviceId: number;

    @ApiProperty()
    @IsNumber()
    statusId: number;
}

export class AllOrderResponse {
    @ApiProperty({ type: [OrderResponse] }) 
    services: OrderResponse[];
}
