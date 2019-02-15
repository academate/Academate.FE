import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from '../../models/calendar-event.model';

@Component({
  selector: 'app-exam-calendar',
  templateUrl: './exam-calendar.component.html',
  styleUrls: ['./exam-calendar.component.scss']
})
export class ExamCalendarComponent implements OnInit {

  @Input() examsData: CalendarEvent[];
  currentDate: Date = new Date(2019, 1, 22);

  editSettings: {
    allowAdding: false;
    allowDeleting: false;
    allowDragging: false;
    allowUpdating: false;
  };

  constructor() {
  }

  ngOnInit() {
    this.refreshDataSource();
  }

  refreshDataSource(): void {
    if (!this.examsData) {
      this.examsData = [];
    }
  }

}
