import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from '../../models/calendar-event.model';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  @Input() calendarEvents: CalendarEvent[];
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
    if (!this.calendarEvents) {
      this.calendarEvents = [];
    }
  }

}
