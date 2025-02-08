import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class NavesPoolDTO {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    desc: string

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

export class UpdateNavesPoolDTO {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    desc: string

    @ApiProperty()
    @IsString()
    img: string

    @ApiProperty()
    @IsNumber()
    price: number
}