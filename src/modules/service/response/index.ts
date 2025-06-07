import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ServiceResponse {

    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsString()
    url: string

    @ApiProperty()
    @IsString()
    img: string
}

export class AllServiceResponse {
    @ApiProperty({ type: [ServiceResponse] }) 
    services: ServiceResponse[];
}
