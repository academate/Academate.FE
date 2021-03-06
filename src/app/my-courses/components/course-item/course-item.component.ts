import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() CourseItem: Course;
  @Output() ShowEnrollmentDetails: EventEmitter<any> = new EventEmitter<any>();

  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

  ShowEnrollmentDetailsClicked(event: any, courseId: number): void {
    this.ShowEnrollmentDetails.emit(courseId);
  }
}
