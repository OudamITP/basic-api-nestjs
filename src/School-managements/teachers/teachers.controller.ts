import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, UseInterceptors } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ApiSecurity } from '@nestjs/swagger';
import { ApiSecurityEnum } from 'src/General-purposes/Utilities/Enums/api-security.enum';
import { Auth } from 'src/General-purposes/custom-decorator/auth.decorator';
import { UserRoles } from 'src/General-purposes/Utilities/Enums/roles.enum';

@ApiSecurity(ApiSecurityEnum.BASIC)
@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Get()
  @Auth(UserRoles.ADMIN)
  findAll() {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return this.teachersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teachersService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.teachersService.remove(id);
  }
}
