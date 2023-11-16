/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { GeneralPurposesService } from 'src/Utilities/general-purposes.service';

@Module({
    controllers: [StudentsController],
    providers: [StudentsService, GeneralPurposesService],
})
export class StudentsModule { }
