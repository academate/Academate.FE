import { Component, OnInit } from '@angular/core';
import { MyCoursesDataService } from '../../services/my-courses-data.service';
import { Course } from '../../models/course.model';
import { Exam } from '../../models/exam.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: any[];
  constructor(private coursesDataService: MyCoursesDataService) { }

  ngOnInit() {
    this.coursesDataService.getCourses().subscribe( courses => {
      this.courses = courses;

      this.courses = courses.map( course => {
        return {
          id : course['id'],
          finalGrade: course['finalGrade'] || 'N/A',
          qualified: course['qualified'],
          courseExams: this.getCourseExams(course['courseExams'])
        } as Course;
      });
    });
  }

  private getCourseExams(exams: string[]) {
    if (exams) {
      return exams.map( examItem => {
        return {
          date : new Date(examItem['startDate']),
          duration: examItem['duration'],
          id: examItem['id'],
          title: examItem['title'],
          type: examItem['type']
        } as Exam;
      });
    }
  }

}
