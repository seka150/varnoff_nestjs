import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class StatusResponse {
    @ApiProperty()
    @IsString()
    status: string
}

export class AllStatusResponse {
    @ApiProperty({type: [StatusResponse]})
    statuses: StatusResponse[];
}