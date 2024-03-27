import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class HostDTO {
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

    @ApiProperty()
    @IsNumber()
    serviceId: number
}

export class UpdateHostDTO {
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