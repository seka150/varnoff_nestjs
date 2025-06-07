import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class CoveringResponse {
    @ApiProperty()
    @IsNumber()
    id: number

    @ApiProperty()
    @IsString()
    type: string
}

export class AllCoveringResponse {
    @ApiProperty({type: [CoveringResponse]})
    type: CoveringResponse[];
}