import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class PromotionResponse {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    delovoi: string

    @ApiProperty()
    @IsString()
    business: string

    @ApiProperty()
    @IsString()
    profi: string

    @ApiProperty()
    @IsString()
    lider: string

    @ApiProperty()
    @IsString()
    partner: string

    @ApiProperty()
    @IsNumber()
    serviceId: number;
}

export class AllPromotionResponse {
    @ApiProperty({ type: [PromotionResponse] }) 
    services: PromotionResponse[];
}
