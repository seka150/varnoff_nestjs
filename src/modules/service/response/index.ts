import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ServiceResponse {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNumber()
    price: number;
}

export class AllServiceResponse {
    @ApiProperty({ type: [ServiceResponse] }) 
    services: ServiceResponse[];
}
