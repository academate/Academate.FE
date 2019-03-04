import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './spa/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AcademyCalendarHomeComponent } from './academy-calendar/components/academy-calendar-home/academy-calendar-home.component';
import { AuthGuardService } from './shared/guards/auth-guards.service';
import { CoursesComponent } from './my-courses/components/courses/courses.component';

const routes: Routes = [
  {
    path: 'spa',
    component: HomeComponent,
    children: [
      { path: 'acalendar', component: AcademyCalendarHomeComponent , outlet: 'mc' , canActivate: [AuthGuardService]},
      { path: 'courses', component: CoursesComponent , outlet: 'mc' , canActivate: [AuthGuardService]}
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
