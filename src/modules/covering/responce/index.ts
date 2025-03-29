import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CoveringResponse {
    @ApiProperty()
    @IsString()
    type: string
}

export class AllCoveringResponse {
    @ApiProperty({type: [CoveringResponse]})
    type: CoveringResponse[];
}