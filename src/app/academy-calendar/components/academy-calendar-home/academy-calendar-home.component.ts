import { Component, OnInit } from '@angular/core';
import { LectureDataService } from 'src/app/shared/services/lecture-data.service';
import { ExamsDataService } from 'src/app/shared/services/exams-data.service';
import { CalendarEvent } from '../../models/calendar-event.model';
import { getDateByStartDateAndDuration } from '../../../utilities/date-utils';

@Component({
  selector: 'app-academy-calendar-home',
  templateUrl: './academy-calendar-home.component.html',
  styleUrls: ['./academy-calendar-home.component.scss']
})
export class AcademyCalendarHomeComponent implements OnInit {

  exams: CalendarEvent[];
  lectures: CalendarEvent[];

  calendarEvents: CalendarEvent[];

  constructor(
    private examsDataService: ExamsDataService,
    private lecturesDataServices: LectureDataService
  ) {
    // Default initializations
    this.calendarEvents = [];
  }

  ngOnInit() {
    this.refreshDataSource();
  }

  refreshDataSource(): void {
    this.refreshExams();
    this.refreshLectures();
  }

  private refreshExams(): void {
    this.examsDataService.getExams().subscribe(ex => {
      this.exams = ex.map(exam => {
        const _startDate = new Date(exam['startDate']);
        return {
          text: exam['title'],
          startDate: _startDate,
          endDate: getDateByStartDateAndDuration(_startDate, exam['duration'])
        } as CalendarEvent;
      });

      this.calendarEvents.push(...this.exams);
    });
  }

  private refreshLectures(): void {
    this.lecturesDataServices.getLectures().subscribe(ls => {

      this.lectures = ls.map(lec => {
        const _startDate = new Date(lec['dateTime']);
        const _isRecurrening = lec['repeatable'] as Boolean;
        let _recurranceDueDate = '';

        if (lec['dueTo']) {
          _recurranceDueDate = lec['dueTo'].split('-').join('').split(':').join('').split('.').join('');
        }

        const _reccuranceFreqExpression = _isRecurrening === true ? 'FREQ=WEEKLY;UNTIL=' + _recurranceDueDate : null;
        return {
          text: lec['title'],
          startDate: _startDate,
          endDate: getDateByStartDateAndDuration(_startDate, lec['duration']),
          recurrenceRule: _reccuranceFreqExpression
        } as CalendarEvent;
      });

      this.calendarEvents.push(...this.lectures);
    });
  }

  onShowExamsToggled(state: boolean) {
    if (state === true) {
      this.calendarEvents.push(...this.exams);
    } else {
      this.hideExams();
    }
  }

  onShowLecturesToggled(state: boolean) {
    if (state === true) {
      this.calendarEvents.push(...this.lectures);
    } else {
      this.hideLectures();
    }
  }

  private hideExams(): void {
    const toRemove = this.exams;
    const temp = this.calendarEvents.filter(function (e) {
      return toRemove.indexOf(e) < 0;
    });

    this.calendarEvents = temp;
  }

  private hideLectures(): void {
    const toRemove = this.lectures;
    const temp = this.calendarEvents.filter(function (e) {
      return toRemove.indexOf(e) < 0;
    });

    this.calendarEvents = temp;
  }

}
