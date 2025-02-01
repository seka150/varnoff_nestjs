import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class NavesHomeDTO {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsNumber()
    price: number

    @ApiProperty()
    @IsNumber()
    serviceId: number
}

export class UpdateNavesHomeDTO {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsNumber()
    price: number

    @ApiProperty()
    @IsNumber()
    serviceId: number
}