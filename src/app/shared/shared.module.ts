import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule } from '@angular/material';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BooleanToTrueFalsePipe } from './pipes/boolean-to-true-false.pipe';

@NgModule({
  declarations: [
    LoginComponent,
    LoaderComponent,
    CalendarComponent,
    BooleanToTrueFalsePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
  ],
  exports: [
    LoaderComponent,
    BooleanToTrueFalsePipe
  ]
})
export class SharedModule { }
