import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { GeneralPurposesService } from 'src/General-purposes/Utilities/general-purposes.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from 'src/General-purposes/interceptors/transform.interceptor';

@Module({
    controllers: [StudentsController],
    providers: [StudentsService, GeneralPurposesService,
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInterceptor
        }
    ],
})
export class StudentsModule { }
