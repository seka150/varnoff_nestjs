import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class NavesBoolResponse {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    desc: string;

    @ApiProperty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNumber()
    serviceId: number;
}

export class AllNavesBoolResponse {
    @ApiProperty({ type: [NavesBoolResponse] }) 
    services: NavesBoolResponse[];
}
