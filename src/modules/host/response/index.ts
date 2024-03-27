import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class HostResponse {
    @ApiProperty()
    @IsString()
    option: string

    @ApiProperty()
    @IsString()
    practical: string

    @ApiProperty()
    @IsString()
    comfort: string

    @ApiProperty()
    @IsString()
    perfect: string

    @ApiProperty()
    @IsString()
    exclusive: string
}

export class AllHostResponse {
    @ApiProperty({ type: [HostResponse] }) 
    services: HostResponse[];
}
