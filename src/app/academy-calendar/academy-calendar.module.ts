import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademyCalendarHomeComponent } from './components/academy-calendar-home/academy-calendar-home.component';
import { DxSchedulerModule } from 'devextreme-angular';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { MatSlideToggleModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DxSchedulerModule,
    MatSlideToggleModule
  ],
  declarations: [CalendarViewComponent, AcademyCalendarHomeComponent],
  exports: [
    AcademyCalendarHomeComponent
  ]
})
export class AcademyCalendarModule { }
