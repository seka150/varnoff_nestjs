import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class NavesBoolDTO {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    desc: string

    @ApiProperty()
    @IsNumber()
    price: number

    @ApiProperty()
    @IsNumber()
    serviceId: number
}

export class UpdateNavesBoolDTO {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    desc: string

    @ApiProperty()
    @IsNumber()
    price: number
}