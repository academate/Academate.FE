import { Component, OnInit, Input } from '@angular/core';
import { Enrollment } from '../../models/enrollment.model';

@Component({
  selector: 'app-course-enrollment-details',
  templateUrl: './course-enrollment-details.component.html',
  styleUrls: ['./course-enrollment-details.component.scss']
})
export class CourseEnrollmentDetailsComponent implements OnInit {

  @Input() Enrollment: Enrollment;
  constructor() { }

  ngOnInit() {
  }

}
