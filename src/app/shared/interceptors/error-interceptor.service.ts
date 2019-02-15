import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { HttpStatusCode, Consts } from '../consts';

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor {

    networkErrors = [
        0,
        HttpStatusCode.BAD_REQUEST, // Originally not in the old client (happens when HMAC is invalid)
        HttpStatusCode.NOT_FOUND,
        HttpStatusCode.REQUEST_TIMEOUT,
        HttpStatusCode.BAD_GATEWAY,
        HttpStatusCode.SERVICE_UNAVAILABLE,
        HttpStatusCode.GATEWAY_TIMEOUT
    ];

    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                if (this.networkErrors.includes(err.status)) {
                    return throwError({ message: 'Network Error', originalError: err, type: 'common', handled: true });
                }
                return throwError({originalError: err, handled: false});
            }));
    }
}
