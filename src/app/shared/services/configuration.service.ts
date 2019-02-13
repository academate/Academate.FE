import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private readonly serviceAddress = 'dummy';
  
  constructor(private http: HttpClient) { }

  // Basic implementation to get all configurations from server - returns as string (json)
  getConfigurationFromServer(): Observable<string> {
    if (this.serviceAddress) {
      return this.http.get<string>(this.serviceAddress);
    }

    return of('');
  }

  getServerAddress(): Observable<string> {
    return of('https://academatebe.azurewebsites.net');
  }

}
