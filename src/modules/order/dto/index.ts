import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class OrderDTO {
    @ApiProperty()
    @IsString()
    status: string

    @ApiProperty()
    @IsNumber()
    userId: number

    @ApiProperty()
    @IsNumber()
    serviceId: number;
}

export class UpdateOrderDTO {
    @ApiProperty()
    @IsString()
    status: string
}
