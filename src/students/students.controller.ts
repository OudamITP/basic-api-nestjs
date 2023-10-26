import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateStudentDto } from './studentsDto/create-student.dto';
import { UpdateStudentDto } from './studentsDto/update-student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService){};

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll(): string {
    return 'This action returns all student';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns student number #${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} student`;
  }

}
