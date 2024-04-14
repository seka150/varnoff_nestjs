import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateSitesResponse {
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

export class AllCreateSitesResponse {
    @ApiProperty({ type: [CreateSitesResponse] }) 
    services: CreateSitesResponse[];
}
