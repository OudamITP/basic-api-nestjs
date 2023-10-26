import { Body, Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';
import { CreateStudentDto } from './studentsDto/create-student.dto';

@Controller('students')
export class StudentsController {
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return 'This action add a new student'; 
  }

  @Get()
  findAll(): string {
    return 'This action returns all student';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns student number #${id}`;
  }

}
