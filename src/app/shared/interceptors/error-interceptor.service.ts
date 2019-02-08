import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { HttpStatusCode } from '../consts';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor {

  constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (typeof err === 'string') {
                return throwError(err);
            } else if (err.status === HttpStatusCode.UNAUTHORIZED) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            } else if (err.status === HttpStatusCode.BAD_REQUEST) {
                // tslint:disable-next-line:no-string-literal
                const httpError = err.error['error_description'];
                return throwError(httpError);
            } else if (err.status === 0) {
                const httpError = 'Could not not contact the server';
                return throwError(httpError);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
