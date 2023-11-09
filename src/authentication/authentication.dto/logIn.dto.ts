import { IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";

export class LogInDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    username: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(255)
    password: string
}