import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class StatusDto {
    @ApiProperty()
    @IsString()
    status: string
}

export class UpdateStatusDto {
    @ApiProperty()
    @IsString()
    status: string
}