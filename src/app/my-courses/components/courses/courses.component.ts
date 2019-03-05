import { Component, OnInit } from '@angular/core';
import { MyCoursesDataService } from '../../services/my-courses-data.service';
import { Course } from '../../models/course.model';
import { Exam } from '../../models/exam.model';
import { EnrollmentsDataService } from 'src/app/shared/services/enrollments-data.service';
import { FormControl } from '@angular/forms';
import { Enrollment } from '../../models/enrollment.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: any[];
  enrollmentToShow: Enrollment;
  semesters: string[] = ['A (First Year)', 'B', 'C', 'D', 'E', 'F'];

  semesterSelection = new FormControl();

  constructor(private coursesDataService: MyCoursesDataService,
    private enrollmentsDataService: EnrollmentsDataService) { }

  ngOnInit() {
    this.coursesDataService.getCourses().subscribe(courses => {
      this.courses = courses;

      this.courses = courses.map(course => {
        return {
          courseId: course['courseId'],
          enrollmentId: course['enrollmentId'],
          title: course['title'],
          finalGrade: course['finalGrade'] || 'N/A',
          qualified: course['qualified'],
          semesterId: course['semesterId'],

          courseExams: this.getCourseExams(course['courseExams'])
        } as Course;
      });
    });
  }

  private getCourseExams(exams: string[]) {
    if (exams) {
      return exams.map(examItem => {
        return {
          date: new Date(examItem['startDate']),
          duration: examItem['duration'],
          id: examItem['id'],
          title: examItem['title'],
          type: examItem['type']
        } as Exam;
      });
    }
  }

  onShowEnrollmentDetails(courseId: number): void {
    console.log(' --> requesting enrollment details for ' + courseId);
    this.enrollmentsDataService.getCourseEnrollment(courseId).subscribe( enrollment => {
      this.enrollmentToShow = {
          courseId : enrollment['courseId'],
          id : enrollment['id'],
          finalGrade : enrollment['finalGrade'] || 'N/A',
          qualified : enrollment['qualified'],
          status : enrollment['status'],
          submittedTasks : this.getEnrollmentSubmittedTasks(enrollment),
          title : enrollment['title']
        } as Enrollment;
    });
  }

  private getEnrollmentSubmittedTasks(enrollment: Enrollment): any {

  }

}
