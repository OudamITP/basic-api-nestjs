import { Body, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './studentsDto/create-student.dto';

@Injectable()
export class StudentsService {

    create(createStudentsDto: CreateStudentDto){
        return `Created successfully!`;
    }
}
