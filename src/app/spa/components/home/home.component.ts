import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showMenu: boolean;
  currentDate: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.currentDate = formatDate(new Date(), 'EEEE, d MMM, y', 'en');
  }

  handleMenuClick($event): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
