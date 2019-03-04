import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() Courses: any[];
  semesterSelection = new FormControl();
  semesters: string[] = ['A (First Year)', 'B', 'C', 'D', 'E', 'F'];
  constructor() { }

  ngOnInit() {
  }

}
