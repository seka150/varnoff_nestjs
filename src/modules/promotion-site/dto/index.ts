import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class PromotionDTO {
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
    serviceId: number
}

export class UpdatePromotionDTO {
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
}