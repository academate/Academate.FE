import { Component, OnInit } from '@angular/core';
import { LectureDataService } from 'src/app/lectures/services/lecture-data.service';
import { ExamsDataService } from 'src/app/exams/services/exams-data.service';
import { CalendarEvent } from '../../models/calendar-event.model';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';

@Component({
  selector: 'app-academy-calendar-home',
  templateUrl: './academy-calendar-home.component.html',
  styleUrls: ['./academy-calendar-home.component.scss']
})
export class AcademyCalendarHomeComponent implements OnInit {

  studentExams: CalendarEvent[];
  lectures: CalendarEvent[];

  constructor(
    private exams: ExamsDataService,
    private lessons: LectureDataService
  ) { }

  ngOnInit() {
    this.refreshDataSource();
  }

  private getEndDate(startDate: Date, duration: number): Date {
    const newDate = new Date(startDate);
    newDate.setMinutes(startDate.getMinutes() + duration);
    return newDate;
  }

  refreshDataSource(): void {

    this.exams.getExams().subscribe(ex => {
      this.studentExams = ex.map(exam => {
        const _startDate = new Date(exam['startDate']);
        return {
          text : exam['title'],
          startDate: _startDate,
          endDate: this.getEndDate(_startDate, exam['duration'])
        } as CalendarEvent;
      });
    });

    this.lessons.getLectures().subscribe(ls => {
      this.lectures = ls;
    });
  }

}
