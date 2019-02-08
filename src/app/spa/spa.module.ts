import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../shared/interceptors/token-interceptor.service';
import { ErrorInterceptor } from '../shared/interceptors/error-interceptor.service';
import { LoaderInterceptorService } from '../shared/interceptors/loader-interceptor.service';

@NgModule({
  declarations: [
    HomeComponent],
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
  ]
})
export class SpaModule { }
