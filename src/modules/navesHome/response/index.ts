import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class NavesHomeResponse {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNumber()
    serviceId: number;
}

export class AllNavesHomeResponse {
    @ApiProperty({ type: [NavesHomeResponse] }) 
    services: NavesHomeResponse[];
}
