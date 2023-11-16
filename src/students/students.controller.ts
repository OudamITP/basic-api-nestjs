import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateStudentDto } from './studentsDto/create-student.dto';
import { UpdateStudentDto } from './studentsDto/update-student.dto';
import { StudentsService } from './students.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService){};

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(): string {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    return this.studentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCatDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.delete(id);
  }

}
