import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ConopiesResponse {
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
    serviceId: number;
}

export class AllConopiesResponse {
    @ApiProperty({ type: [ConopiesResponse] }) 
    services: ConopiesResponse[];
}