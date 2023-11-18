import { Body, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './studentsDto/create-student.dto';
import { UpdateStudentDto } from './studentsDto/update-student.dto';
import e from 'express';
import { error } from 'console';
import { CustomBadRequestException } from 'src/General-purposes/custom-exceptions/custom-bad-request.exception';

@Injectable()
export class StudentsService {

    create(createStudentsDto: CreateStudentDto){
        return `Created successfully!`;
    }

    findAll(){
        return 'return all students!';
    }

    findOne(id: number){
        return `find student id #${id}`;
    }

    update(id: number ,updateStudentDto: UpdateStudentDto){
        return `update student id #${id}`;
    }

    delete(id: number){
        return `delete student id #${id}`;
    }
}
