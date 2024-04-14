import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class SSLResponse {
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

export class AllSSLResponse {
    @ApiProperty({ type: [SSLResponse] }) 
    services: SSLResponse[];
}
