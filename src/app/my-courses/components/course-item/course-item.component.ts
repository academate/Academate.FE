import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() CourseItem: Course;
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
