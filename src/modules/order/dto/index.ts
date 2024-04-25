import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class OrderDTO {

    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsNumber()
    userId: number

    @ApiProperty()
    @IsNumber()
    serviceId: number;

    @ApiProperty()
    @IsNumber()
    statusId: number;
}

export class UpdateOrderDto {
    statusId: number
}
