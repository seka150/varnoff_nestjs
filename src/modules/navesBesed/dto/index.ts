import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class BesedDTO {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsString()
    img: string

    @ApiProperty()
    @IsNumber()
    price: number

    @ApiProperty()
    @IsNumber()
    serviceId: number
}

export class UpdateBesedDTO {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsString()
    img: string

    @ApiProperty()
    @IsNumber()
    price: number
}