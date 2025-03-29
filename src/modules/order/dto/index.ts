import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class OrderDTO {
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
    userId: number

    @ApiProperty()
    @IsNumber()
    coveringId: number

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
