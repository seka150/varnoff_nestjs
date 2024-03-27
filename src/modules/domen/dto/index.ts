import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class DomenDTO {
    @ApiProperty()
    @IsString()
    zone: string

    @ApiProperty()
    @IsNumber()
    register: number

    @ApiProperty()
    @IsNumber()
    continue: number

    @ApiProperty()
    @IsNumber()
    serviceId: number
}

export class UpdateDomenDTO {
    @ApiProperty()
    @IsString()
    zone: string

    @ApiProperty()
    @IsNumber()
    register: number

    @ApiProperty()
    @IsNumber()
    continue: number
}