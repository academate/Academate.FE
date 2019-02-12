import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule } from '@angular/material';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoaderComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
