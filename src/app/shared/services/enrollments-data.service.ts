import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsDataService {

  private serverAddress = '';
  private readonly enrollmentsDataServiceApiUrl = ''; // 'enrollments';

  constructor(private configService: ConfigurationService, private http: HttpClient) {
    configService.getServerAddress()
      .pipe(
        catchError(err => {
          console.log('Cound not get base server address', err);
          return throwError(err);
        })
      )
      .subscribe(address => this.serverAddress = address);
  }

  getCourseEnrollment(courseId: number): Observable<any> {
    if (courseId > 0) {
      return this.http.get(`${this.serverAddress}/${this.enrollmentsDataServiceApiUrl}/${courseId}`);
    }
  }

}
