import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './spa/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AcademyCalendarHomeComponent } from './academy-calendar/components/academy-calendar-home/academy-calendar-home.component';

const routes: Routes = [
  {
    path: 'spa',
    component: HomeComponent,
    children: [
      { path: 'acalendar', component: AcademyCalendarHomeComponent , outlet: 'maincontent' }
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
