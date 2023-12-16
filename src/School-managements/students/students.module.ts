import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { GeneralPurposesService } from 'src/General-purposes/Utilities/general-purposes.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from 'src/General-purposes/interceptors/transform.interceptor';
import { GlobalHttpExceptionsFilter } from 'src/General-purposes/custom-exceptions/global-http-exception.filter';

@Module({
    controllers: [StudentsController],
    providers: [StudentsService, GeneralPurposesService,
        {
            provide: APP_FILTER,
            useClass: GlobalHttpExceptionsFilter
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInterceptor
        }
    ],
})
export class StudentsModule { }
