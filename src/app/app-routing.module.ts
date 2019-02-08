import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './spa/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  // { path: '', component: ExpensesHomeComponent, canActivate: [AuthGuardService] },
  {
    path: 'spa',
    component: HomeComponent,
    children: [
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
