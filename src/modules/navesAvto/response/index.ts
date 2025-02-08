import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AvtoResponse {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    img: string;

    @ApiProperty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNumber()
    serviceId: number;
}

export class AllAvtoResponse {
    @ApiProperty({ type: [AvtoResponse] }) 
    services: AvtoResponse[];
}
