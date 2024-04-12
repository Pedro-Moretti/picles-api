import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";


export default class CreatePetControllerInput {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    type: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    size: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1024)
    @ApiProperty()
    bio: string;
}