import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RentServerResponse {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    description: string
}

export class AllRentServerResponse {
    @ApiProperty({ type: [RentServerResponse] }) 
    services: RentServerResponse[];
}
