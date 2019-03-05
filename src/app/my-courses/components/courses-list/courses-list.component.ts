import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() Courses: any[];
  @Output() ShowEnrollmentDetails: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onShowEnrollmentDetails(courseId: number): void {
    console.log(' --> Expand enrollment details for ' + courseId);
    this.ShowEnrollmentDetails.emit(courseId);
  }

}
