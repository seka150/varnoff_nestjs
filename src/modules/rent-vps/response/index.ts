import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class RentVpsResponse {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsNumber()
    perMonth: number

    @ApiProperty()
    @IsString()
    connect: string

    @ApiProperty()
    @IsNumber()
    core: number

    @ApiProperty()
    @IsNumber()
    ram: number

    @ApiProperty()
    @IsNumber()
    hdd: number

    @ApiProperty()
    @IsString()
    os: string

    @ApiProperty()
    @IsString()
    cPanel: string

    @ApiProperty()
    @IsString()
    option: string

    @ApiProperty()
    @IsNumber()
    serviceId: number;
}

export class AllRentVpsResponse {
    @ApiProperty({ type: [RentVpsResponse] }) 
    services: RentVpsResponse[];
}
