import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showMenu: boolean;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  handleMenuClick($event): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
