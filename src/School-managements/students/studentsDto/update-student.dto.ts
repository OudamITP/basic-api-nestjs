import { IsNumber, IsString } from "class-validator";

export class UpdateStudentDto {
    @IsString()
    name: string

    @IsNumber()
    age: string
}