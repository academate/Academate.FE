import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamCalendarComponent } from './components/exam-calendar/exam-calendar.component';
import { AcademyCalendarHomeComponent } from './components/academy-calendar-home/academy-calendar-home.component';
import { DxSchedulerModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxSchedulerModule
  ],
  declarations: [ExamCalendarComponent, AcademyCalendarHomeComponent],
  exports: [
    AcademyCalendarHomeComponent
  ]
})
export class AcademyCalendarModule { }
