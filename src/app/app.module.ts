import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './shared/interceptors/token-interceptor.service';
import { ErrorInterceptor } from './shared/interceptors/error-interceptor.service';
import { LoaderInterceptorService } from './shared/interceptors/loader-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { SpaModule } from './spa/spa.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AcademyCalendarModule } from './academy-calendar/academy-calendar.module';
import { MyCoursesModule } from './my-courses/my-courses.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatCardModule,
    MatIconModule,

    SpaModule,
    SharedModule,
    AcademyCalendarModule,
    MyCoursesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
