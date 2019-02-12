import { Component, OnInit } from '@angular/core';
import { ExamsDataServiceService } from '../../services/exams-data-service.service';

@Component({
  selector: 'app-academy-calendar-home',
  templateUrl: './academy-calendar-home.component.html',
  styleUrls: ['./academy-calendar-home.component.scss']
})
export class AcademyCalendarHomeComponent implements OnInit {

  studentExams: any[];

  constructor(private examsDataService: ExamsDataServiceService) { }

  ngOnInit() {
    this.refreshDataSource();
  }

  refreshDataSource(): void {
    this.examsDataService.getExams().subscribe( exams => this.studentExams = exams);
  }

}
