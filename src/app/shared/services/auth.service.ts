import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User, LoginCredentials } from '../models/user.model';
import { Consts } from '../consts';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serverAddress = '';
  private tokenServiceAddress = 'api/users/authenticate';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private configService: ConfigurationService, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(Consts.ConfigurationKeys.CurrentUser)));
    this.currentUser = this.currentUserSubject.asObservable();
    configService.getServerAddress()
      .pipe(
        catchError(err => {
          console.log('Cound not get base server address', err);
          return throwError(err);
        })
      )
      .subscribe(address => this.serverAddress = address);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, pass: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const loginCredentialsRequestBody: LoginCredentials = {
      userName: username,
      password: pass
    };

    // tslint:disable-next-line:max-line-length
    return this.http.post<User>(`${this.serverAddress}/${this.tokenServiceAddress}`, JSON.stringify(loginCredentialsRequestBody), httpOptions)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout(): Observable<boolean> {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

    if (localStorage.getItem(Consts.ConfigurationKeys.CurrentUser) === '' ||
      !localStorage.getItem(Consts.ConfigurationKeys.CurrentUser)) {
      return of(true);
    }
    return of(false);
  }
}
