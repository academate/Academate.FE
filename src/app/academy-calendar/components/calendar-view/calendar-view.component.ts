import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalendarEvent } from '../../models/calendar-event.model';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  @Output() ShowExamsToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() ShowLecturesToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() calendarEvents: CalendarEvent[];
  currentDate: Date = new Date(2019, 1, 22);

  showExamsState: boolean;
  showLecturesState: boolean;

  editSettings: {
    allowAdding: false;
    allowDeleting: false;
    allowDragging: false;
    allowUpdating: false;
  };

  constructor() {
    this.showExamsState = true;
    this.showLecturesState = true;
  }

  ngOnInit() {
    this.refreshDataSource();
  }

  refreshDataSource(): void {
    if (!this.calendarEvents) {
      this.calendarEvents = [];
    }
  }

  showExamsToggled(): void {
    this.showExamsState = !this.showExamsState;
    this.ShowExamsToggled.emit(this.showExamsState);
  }

  showLecturesToggled(): void {
    this.showLecturesState = !this.showLecturesState;
    this.ShowLecturesToggled.emit(this.showLecturesState);
  }

}
