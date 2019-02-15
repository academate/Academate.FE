import { Injectable } from '@angular/core';
import { ConfigurationService } from 'src/app/shared/services/configuration.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LectureDataService {

  private serverAddress = '';
  private readonly lessonsDataServiceApiUrl = 'lessons';

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

  getLectures(): Observable<any> {
    if (this.serverAddress) {
      return this.http.get<any>(`${this.serverAddress}/${this.lessonsDataServiceApiUrl}`);
    }
  }
}
