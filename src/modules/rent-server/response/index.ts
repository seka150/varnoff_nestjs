import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class RentServerResponse {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsNumber()
    serviceId: number;
}

export class AllRentServerResponse {
    @ApiProperty({ type: [RentServerResponse] }) 
    services: RentServerResponse[];
}
