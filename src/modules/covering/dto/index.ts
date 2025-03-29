import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CoveringDto {
    @ApiProperty()
    @IsString()
    type: string
}
