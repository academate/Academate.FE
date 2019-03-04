import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ConfigurationService } from 'src/app/shared/services/configuration.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyCoursesDataService {

  private serverAddress = '';
  private readonly serviceAddress = 'courses';

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

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverAddress}/${this.serviceAddress}`);
  }
}
