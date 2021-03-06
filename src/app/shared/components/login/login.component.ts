import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = {};

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        // tslint:disable-next-line:no-string-literal
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get formControls() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.formControls.username.value, this.formControls.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigateByUrl('/spa').then(
                        () => this.router.navigateByUrl('/spa/(mc:acalendar)'),
                        (err) => console.error(`Cannot navigate to home page ${JSON.stringify(err)}`)
                    );
                },
                error => {
                    if (error.originalError.originalError.error) {
                        this.error = error.originalError.originalError.error;
                    } else if (error.originalError.error) {
                        this.error = error;
                    } else {
                        this.error = JSON.stringify(error);
                    }
                    this.loading = false;
                });
    }
}
