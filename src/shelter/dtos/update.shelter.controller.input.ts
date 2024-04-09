import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator"

export default class UpdateShelterControllerInput {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @Length(10, 11)
    @IsNotEmpty()
    whatsapp: string

    @IsString()
    @IsNumberString()
    @IsNotEmpty()
    phone: string
    
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string
}