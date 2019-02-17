import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ConfigurationService } from 'src/app/shared/services/configuration.service';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamsDataService {

  private serverAddress = '';
  private readonly examDataServiceApiUrl = 'exams';

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

  getExams(): Observable<any> {
    if (this.serverAddress) {
      return this.http.get<any>(`${this.serverAddress}/${this.examDataServiceApiUrl}`);
    }
  }
}
