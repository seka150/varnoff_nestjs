import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSeviceDTO {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsNumber()
    price: number

    @ApiProperty()
    @IsString()
    url: string

    @ApiProperty()
    @IsString()
    img: string
}

export class UpdateServiceDTO {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsNumber()
    price: number
    
    @ApiProperty()
    @IsString()
    img: string
}