import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class DomenResponse {
    @ApiProperty()
    @IsString()
    zone: string;

    @ApiProperty()
    @IsNumber()
    register: number;

    @ApiProperty()
    @IsNumber()
    continue: number;

    @ApiProperty()
    @IsNumber()
    serviceId: number;
}

export class AllDomenResponse {
    @ApiProperty({ type: [DomenResponse] }) 
    services: DomenResponse[];
}
