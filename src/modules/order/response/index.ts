import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class OrderResponse {
    @ApiProperty()
    @IsNumber()
    id: number

    @ApiProperty()
    @IsNumber()
    length: number

    @ApiProperty()
    @IsNumber()
    width: number

    @ApiProperty()
    @IsNumber()
    height: number

    @ApiProperty()
    @IsNumber()
    userId: number;

    @ApiProperty()
    @IsNumber()
    serviceId: number;

    @ApiProperty()
    @IsNumber()
    coveringId: number;

    @ApiProperty()
    @IsNumber()
    statusId: number;
}

export class AllOrderResponse {
    @ApiProperty({ type: [OrderResponse] }) 
    orders: OrderResponse[];
}
