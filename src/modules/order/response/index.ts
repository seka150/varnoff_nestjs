import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class OrderResponse {
    @ApiProperty()
    @IsString()
    status: string

    @ApiProperty()
    @IsNumber()
    userId: number;

    @ApiProperty()
    @IsNumber()
    serviceId: number;
}

export class AllOrderResponse {
    @ApiProperty({ type: [OrderResponse] }) 
    services: OrderResponse[];
}
